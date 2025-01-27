import { useEffect, useState } from "react";
import "./__root.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import getBuilding from "@/api/getBuilding";


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [buildingNames, setBuildingNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBuildings = async () => {
      try {
        const data = await getBuilding();
        setBuildingNames(data);
      } catch (error) {
        console.error("Failed to fetch building names:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBuildings();
  }, []);

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
      <div>Hello "__root"!</div>
      <select>
        {buildingNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Outlet />
    </>
  );
}
