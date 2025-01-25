import { createFileRoute, useParams } from "@tanstack/react-router";
import Button from "@/components/button";

export const Route = createFileRoute("/$building/$floor")({
  component: RouteComponent,
});

function RouteComponent() {
  const {building, floor} = useParams({ from: "/$building/$floor" });
  return (
    <>
      <div>Hello "/$building/$floor"!</div>
      <div>Building: {building}</div>
      <div>Floor: {floor}</div>
      <Button index={1} />
    </>
  );
}
