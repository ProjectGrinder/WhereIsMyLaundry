import getBuildingData from "@/api/getBuildingData";
import updateLaundry from "@/api/updateLaundry";
import { create } from "zustand";

interface BuildingState {
  status: "ready" | "loading" | "error";
  data?: BuildingData[];
  err?: string;
  updateLaundry: (
    index: number,
    building: string,
    floor: string,
    state: number,
  ) => Promise<void>;
  getBuldingData: () => Promise<void>;
}

const useBuildingStore = create<BuildingState>()((set) => ({
  status: "loading",
  updateLaundry: async (
    index: number,
    building: string,
    floor: string,
    state: number,
  ) => {
    set({ status: "loading" });
    await updateLaundry(index, building, floor, state);
    set({ data: await getBuildingData() });
    set({ status: "ready" });
  },
  getBuldingData: async () => {
    set({ status: "loading" });
    set({ data: await getBuildingData() });
    set({ status: "ready" });
  },
}));

export default useBuildingStore;
