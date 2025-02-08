import MockBuildingData from "@/mocks/building";

export default async function getBuildingData(building: string): Promise<number[]> {
  const building_data = MockBuildingData.find(
    (value) => value.building_name == building,
  );
  if(building_data === undefined)
  {
    return MockBuildingData[0].floors.map(floor => floor.floor);
  }
  return building_data.floors.map(floor => floor.floor);
}
