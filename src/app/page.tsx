"use client";

import { DevDescription, Projects } from "@/components";
import { ProjectsList } from "@/components/mobile";
import { useDeviceSize } from "@/hooks";
import { Suspense } from "react";

export default function Page() {
  const { isMobile } = useDeviceSize();

  const renderContent = () => {
    if (isMobile) {
      return <ProjectsList />;
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
