import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function updateLaundry(
  buttonIndex: number,
  building: string,
  floor: string,
  state: number,
): Promise<BuildingResponse> {
  const key = `laundry${buttonIndex}`;
  const docRef = doc(db, "building", building, "floors", floor);

  try {
    await updateDoc(docRef, {
      [key]: state === 0 ? 1 : 0,
    });
    return {
      success: true,
      err_msg: "",
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      err_msg: "cannot update state",
    };
  }
}
