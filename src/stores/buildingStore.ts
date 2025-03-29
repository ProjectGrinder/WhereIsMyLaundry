import updateLaundry from "@/api/updateLaundry";
import { create } from "zustand";

interface BuildingState {
  status: "ready" | "loading" | "error";
  data?: BuildingData;
  err?: string;
  updateLaundry: (index: number, building: string, floor: string) => Promise<void>;
  getBuldingData: () => Promise<void>;
}

const useBuildingStore = create<BuildingState>()((set) => ({
  status: "ready",
  updateLaundry: async (index: number, building: string, floor: string) => {
    set({ status: "loading" });
    await updateLaundry(index, building, floor);
    set({ status: "ready" });
  },
  getBuldingData: async () => {
    set({ status: "loading" });
    set({ status: "ready" });
  },
}));

export default useBuildingStore;
