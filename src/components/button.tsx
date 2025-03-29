import { Button as KumaButton } from "@kuma-ui/core";
import useProgramStateStore from "@/stores/buildingStore";
type Props = {
  index: number;
  building: string;
  floor: string;
};

export default function Button({ index, building, floor }: Props) {
  const updateLaundry = useProgramStateStore((state) => state.updateLaundry);
  return (
    <KumaButton
      onClick={() => {
        updateLaundry(index, building, floor);
      }}
    >
      {index}
    </KumaButton>
  );
}
