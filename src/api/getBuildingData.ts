import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getBuildingData(): Promise<BuildingData[]> {
  const data = await getDocs(collection(db, "building"));
  const res: BuildingData[] = [];
  for (const building of data.docs) {
    const floors = (
      await getDocs(collection(db, "building", building.id, "floors"))
    ).docs.map((data) => ({ floor: data.id, ...data.data() }));
    res.push({
      building_id: building.id,
      building_name: building.id,
      floors: floors as any,
    });
  }
  return res;
}
