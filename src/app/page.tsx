"use client";

import { DevDescription, Projects } from "@/components";
import { useDeviceSize } from "@/hooks";
import { Suspense } from "react";

export default function Page() {
  const { isMobile } = useDeviceSize();

  console.log("aca", isMobile);

  const renderContent = () => {
    if (isMobile) {
      return null;
    }

    return (
      <>
        <Suspense>
          <DevDescription />
        </Suspense>
        <Projects />
      </>
    );
  };

  return <main>{renderContent()}</main>;
}
