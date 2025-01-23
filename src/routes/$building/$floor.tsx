import { createFileRoute } from "@tanstack/react-router";
import Button from "@/components/button";

export const Route = createFileRoute("/$building/$floor")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Button index={1} />
      <div>Hello "/$building/$floor"!</div>
    </>
  );
}
