import { useState } from "react";
import SearchDropdown from "./searchDropdown";
import Button from "./button";

type Props = {
    buildings: BuildingData[]
}

export default function Navigation({buildings}: Props) {
    const [building, setBuilding] = useState<string>('');
    const [floor, setFloor] = useState<string>('');

    const currBuilding = buildings.find((value) => value.building_name === building);
    const currFloor = currBuilding ? currBuilding.floors.find((value) => value.floor.toString() === floor) : undefined;

    return (
        <div id="navigation">
            <div>
                "Select a Building!"
            </div>
            <div>
                <SearchDropdown 
                    title="-- Select Building --" 
                    data={buildings.map((building) => building.building_name)} 
                    onSet={setBuilding}
                ></SearchDropdown>
            </div>
            <div>
                {currBuilding && "Select a Floor!"}
            </div>
            <div>
                {currBuilding && <SearchDropdown 
                    title="-- Select Floor --" 
                    data={currBuilding ? currBuilding.floors.map((floor) => floor.floor.toString()): []}  
                    onSet={setFloor}
                ></SearchDropdown>}
            </div>
            <div>
                {currFloor && 
                <>
                    <Button index={1} building={building} floor={floor}/>
                    <Button index={2} building={building} floor={floor}/>
                </>
                }
            </div>
        </div>
    )
}