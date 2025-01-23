import { Button as KumaButton } from "@kuma-ui/core";
import useProgramStateStore from "@/stores/buildingStore";
type Props = {
  index: number;
};

export default function Button({ index }: Props) {
  const updateLaundry = useProgramStateStore((state) => state.updateLaundry);
  return (
    <KumaButton
      onClick={() => {
        updateLaundry(index);
      }}
    >
      {index}
    </KumaButton>
  );
}
