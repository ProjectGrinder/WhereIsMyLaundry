import MockBuildingData from "@/mocks/building";

export default async function getBuilding(): Promise<string[]> {
  return MockBuildingData.map(building => building.building_name);
}