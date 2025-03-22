import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-screen flex items-center flex-col justify-center gap-y-4">
      <h2 className="font-bold  text-4xl">
        We are using React with TanStack Router
      </h2>

      <p>
        You have been clicked: {count} {count <= 1 ? "time" : "times"}
      </p>

      <Button onClick={() => setCount((prev) => prev + 1)}>
        Shadcn Button
      </Button>
    </div>
  );
}
