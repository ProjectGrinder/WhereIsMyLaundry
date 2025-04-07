export {};

declare global {
  export interface FloorData {
    floor: number;
    [laundry: string]: number;
  }

  export interface BuildingData {
    building_id: string;
    building_name: string;
    floors: Array<FloorData>;
  }
  export interface BuildingResponse {
    success: boolean;
    err_msg: string;
    data?: BuildingData;
  }
}
