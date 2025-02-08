import { createFileRoute, useParams } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import getBuildingData from '@/api/getBuildingData';

export const Route = createFileRoute('/$building/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {building} = useParams({ from: "/$building/" });
  const [floorNames, setFloorNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFloor, setSelectedFloor] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadFloors = async () => {
      try {
        const data = await getBuildingData(building);
        setFloorNames(data.map(floorNum => `${floorNum}`));
      } catch (error) {
        console.error("Failed to fetch floor names:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFloors();
  }, []);

  const handleNavigate = () => {
    if (selectedFloor) {
      navigate({ to: `/${building}/${selectedFloor}` });
    }
  };

  // Return loading state **after** all hooks have been declared
  if (loading) {
    return (
      <>
        <div>Hello "/$building"! Loading...</div>
      </>
    );
  }

  return (
    <>
      <div>Hello "/$building"!</div>
      <div>Building: {building}</div>
      <select onChange={(e) => setSelectedFloor(e.target.value)} defaultValue="">
        <option value="" disabled hidden>
          - Select Floor -
        </option>
        {floorNames.map((name, index) => (
          <option key={index+1} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate} disabled={!selectedFloor}>
        Go
      </button>
    </>
  );
}
