import { useEffect, useState } from "react";
import "./__root.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import getBuildingData from "@/api/getBuildingData";
import Navigation from "@/components/navigation";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Hooks should be declared at the top level
  const [buildings, setBuildings] = useState<BuildingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBuildings = async () => {
      try {
        const data = await getBuildingData();
        setBuildings(data);
      } catch (error) {
        console.error("Failed to fetch building names:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBuildings();
  }, []);

  // Return loading state **after** all hooks have been declared
  if (loading) {
    return (
      <>
        <div>Hello "__root"! Loading...</div>
        <Outlet />
      </>
    );
  }


  return (
    <>
      <div id="topbar">
        <div>ระบบจัดการสถานะเครื่องซักผ้า</div>
        <div>หอพักนิสิตจุฬาฯ</div>
      </div>
      <Navigation buildings={buildings}></Navigation>
    </>
  );
}
