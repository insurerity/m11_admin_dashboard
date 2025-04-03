import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
// Ensure this points to your Firebase config file
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { auth } from "@/lib/firebase";

// Define Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        async (user) => {
          const accessToken = await user?.user?.getIdToken();
          localStorage.setItem("M11_ACCESS_TOKEN", accessToken);
        }
      );
      toast.success("Logged in successfully", {
        description: `Welcome back, ${data.email}!`,
      });
      navigate({ to: "/" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Login failed", {
        description: () => {
          return (
            <span className="text-red-600">
              {error.message || "Invalid email or password."}
            </span>
          );
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Login</h2>
        <p className="text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              className={`h-12 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm font-medium text-slate-900 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              {...register("password")}
              className={`h-12 ${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Any issues?{" "}
          <a
            href="https://chat.whatsapp.com/ErfLaqHrAO5LoO0z902u3a"
            className="font-medium text-slate-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Insurerity
          </a>
        </p>
      </div>
    </div>
  );
}
