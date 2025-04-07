import { Button as KumaButton } from "@kuma-ui/core";
import useProgramStateStore from "@/stores/buildingStore";
type Props = {
  index: number;
  building: string;
  floor: string;
  state: number;
};

export default function Button({ index, building, floor, state }: Props) {
  const { updateLaundry } = useProgramStateStore();
  return (
    <KumaButton
      onClick={() => {
        updateLaundry(index, building, floor, state);
      }}
      backgroundColor={state === 0 ? "orange" : "green"}
    >
      {index}
    </KumaButton>
  );
}
