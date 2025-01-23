import MockBuildingData from "@/mocks/building";

export default async function updateLaundry(
  buttonIndex: number,
): Promise<BuildingResponse> {
  // TODO: UpdateButtonDataOnDatabase
  //...
  const [, building, floor] = document.location.pathname.split("/");
  const floor_index = parseInt(floor) - 1;

  const building_data = MockBuildingData.find(
    (value) => value.building_name == building,
  );

  if (building_data == undefined)
    return {
      success: false,
      err_msg: "Incorrect Parameter: Building is not exist.",
    };

  if (floor_index >= building_data.floors.length || floor_index < 0)
    return {
      success: false,
      err_msg: "Incorrect Parameter: Index out of range.",
    };

  if (building_data.floors[floor_index][`laundry${buttonIndex}`]) {
    return {
      success: false,
      err_msg: "Incorrect Parameter: Laundry machine is not exist.",
    };
  }

  building_data.floors[floor_index][`laundry${buttonIndex}`] =
    (building_data.floors[floor_index][`laundry${buttonIndex}`] + 1) % 2;

  return {
    success: true,
    err_msg: "",
  };
}
