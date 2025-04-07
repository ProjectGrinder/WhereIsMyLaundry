import { useState } from "react";
import SearchDropdown from "./searchDropdown";
import Button from "./button";
import useProgramStateStore from "@/stores/buildingStore";

export default function Navigation() {
  const [building, setBuilding] = useState<string>("");
  const [floor, setFloor] = useState<string>("");

  const { data: buildings } = useProgramStateStore();

  if (!buildings) return <></>;

  const currBuilding = buildings.find(
    (value) => value.building_name === building,
  );
  const currFloor = currBuilding
    ? currBuilding.floors.find((value) => value.floor.toString() === floor)
    : undefined;

  return (
    <div id="navigation">
      <div>"Select a Building!"</div>
      <div>
        <SearchDropdown
          title="-- Select Building --"
          data={buildings.map((building) => building.building_name)}
          onSet={setBuilding}
        ></SearchDropdown>
      </div>
      <div>{currBuilding && "Select a Floor!"}</div>
      <div>
        {currBuilding && (
          <SearchDropdown
            title="-- Select Floor --"
            data={
              currBuilding
                ? currBuilding.floors.map((floor) => floor.floor.toString())
                : []
            }
            onSet={setFloor}
          ></SearchDropdown>
        )}
      </div>
      <div>
        {currFloor && (
          <>
            <Button
              index={1}
              building={building}
              floor={floor}
              state={currFloor["laundry1"]}
            />
            <Button
              index={2}
              building={building}
              floor={floor}
              state={currFloor["laundry2"]}
            />
          </>
        )}
      </div>
    </div>
  );
}

