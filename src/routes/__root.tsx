import { useEffect, useState } from "react";
import "./__root.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import getBuilding from "@/api/getBuilding";
import { useNavigate } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Hooks should be declared at the top level
  const [buildingNames, setBuildingNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const navigate = useNavigate();

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

  const handleNavigate = () => {
    if (selectedBuilding) {
      navigate({ to: `/${selectedBuilding}` });
    }
  };

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
      <div>Hello "__root"!</div>
      <select onChange={(e) => setSelectedBuilding(e.target.value)} defaultValue="">
        <option value="" disabled hidden>
          - Select Building -
        </option>
        {buildingNames.map((name, index) => (
          <option key={index + 1} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate} disabled={!selectedBuilding}>
        Go
      </button>
      <Outlet />
    </>
  );
}
