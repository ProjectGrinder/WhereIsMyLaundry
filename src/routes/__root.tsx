import "./__root.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import MockBuildingData from "@/mocks/building";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const building_names = MockBuildingData.map(building => building.building_name)
  return (
    <>
      <div>Hello "__root"! {building_names}</div>
      <Outlet />
    </>
  );
}
