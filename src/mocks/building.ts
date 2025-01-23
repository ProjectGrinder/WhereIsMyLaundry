export enum LaundryStatus {
  BUSY = 0,
  READY = 1,
}
const MockBuildingData: Array<BuildingData> = [
  {
    building_id: 1,
    building_name: "chuanchom",
    floors: [
      {
        floor: 1,
        laundry1: LaundryStatus.READY,
        laundry2: LaundryStatus.READY,
      },
      {
        floor: 2,
        laundry1: LaundryStatus.READY,
        laundry2: LaundryStatus.READY,
      },
      {
        floor: 3,
        laundry1: LaundryStatus.READY,
        laundry2: LaundryStatus.READY,
      },
      {
        floor: 4,
        laundry1: LaundryStatus.READY,
        laundry2: LaundryStatus.READY,
      },
    ],
  },
];

export default MockBuildingData;
