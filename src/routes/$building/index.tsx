import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$building/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$building/"!</div>
}
