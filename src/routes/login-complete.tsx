import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { toast } from "sonner";
import { auth } from "@/lib/firebase";
import { LoadingSpinner } from "@/components/ui/loading";
import { M11_ACCESS_TOKEN_NAME } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login-complete")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completeSignIn = async () => {
      const email = localStorage.getItem("emailForSignIn");

      if (!email) {
        toast.error("No email found. Please sign in again.");
        setLoading(false);
        return;
      }

      if (!isSignInWithEmailLink(auth, window.location.href)) {
        toast.error("Invalid or expired sign-in link.");
        setLoading(false);
        return;
      }

      try {
        const result = await signInWithEmailLink(
          auth,
          email,
          window.location.href
        );

        // Get Firebase token
        const idToken = await result.user.getIdToken();
        localStorage.setItem(M11_ACCESS_TOKEN_NAME, idToken);

        // Clean up stored email
        localStorage.removeItem("emailForSignIn");

        toast.success("Sign-in successful!");
        window.location.href = "/listings";
      } catch (err) {
        console.error("Sign-in error:", err);
        toast.error("Sign-in failed. Please try again.");
        setLoading(false);
      }
    };

    completeSignIn();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <div className="flex flex-col items-center gap-2">
          <LoadingSpinner />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Completing sign-in, please wait...
          </p>
        </div>
      ) : (
        <div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <p className="text-center text-xl">Error Signing In</p>
            <p className="text-center">
              We could not sign you in. Please try again.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
              <Button
                onClick={() => navigate({ to: "/login" })}
                className="mb-2 sm:mb-0"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
