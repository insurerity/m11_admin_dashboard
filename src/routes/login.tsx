import LoginForm from "@/modules/login/molecules/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-gray-50">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <div className="mb-6 relative w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
            <span className="text-slate-800 text-2xl font-bold">M11</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            M11 Admin Dashboard
          </h1>
          <p className="text-slate-600 mb-6">
            Please provide your credentials to gain access
          </p>
        </div>
      </div>

      {/* Login form section (right side) */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 md:shadow-lg md:shadow-slate-200/50">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
