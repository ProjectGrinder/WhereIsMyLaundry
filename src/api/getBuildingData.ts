import MockBuildingData from "@/mocks/building";

export default async function getBuildingData(): Promise<BuildingData> {
  return MockBuildingData[0];
}
