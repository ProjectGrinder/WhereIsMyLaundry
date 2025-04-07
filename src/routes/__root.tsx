import { useEffect } from "react";
import "./__root.css";
import { createRootRoute } from "@tanstack/react-router";
import useProgramStateStore from "@/stores/buildingStore";
import Navigation from "@/components/navigation";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { status, getBuldingData } = useProgramStateStore();

  useEffect(() => {
    getBuldingData();
  }, [getBuldingData]);

  return (
    <>
      <div id="topbar">
        <div>ระบบจัดการสถานะเครื่องซักผ้า</div>
        <div>หอพักนิสิตจุฬาฯ</div>
      </div>
      {status === "loading" ? <p>Loading...</p> : <Navigation />}
    </>
  );
}
