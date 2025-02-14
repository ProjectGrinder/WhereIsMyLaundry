import { useState } from "react";
import SearchDropdown from "./searchDropdown";

type Props = {
    buildings: BuildingData[]
}

export default function Navigation({buildings}: Props) {
    const [building, selectedBuilding] = useState<string>('');
    const [floor, selectedFloor] = useState<string>('');

    const currBuilding = buildings.find((value) => value.building_name == building);

    function handleNavigate(){

    }

    return (
        <>
            <SearchDropdown 
                title="-- Select Building --" 
                data={buildings.map((building) => building.building_name)} 
                onSet={selectedBuilding}
            ></SearchDropdown>
            <SearchDropdown 
                title="-- Select Floor --" 
                data={currBuilding ? currBuilding.floors.map((floor) => floor.floor.toString()): []}  
                onSet={selectedFloor}
            ></SearchDropdown>
            <button onClick={handleNavigate} disabled={!selectedBuilding}>
                Go
            </button>
        </>
    )
}