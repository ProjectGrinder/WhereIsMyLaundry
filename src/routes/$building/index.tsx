import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/$building/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {building} = useParams({ from: "/$building/" });
  return (
    <>
    <div>Hello "/$building"!</div>
    <div>Building: {building}</div>
    </>
  );
}
