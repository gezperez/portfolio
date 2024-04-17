"use client";

import { DevDescription, Projects } from "@/components";
import { ProjectsList } from "@/components/mobile";
import { useDeviceSize } from "@/hooks";
import { Suspense } from "react";

export default function Page() {
  const { isMobile } = useDeviceSize();

  const renderContent = () => {
    if (isMobile) {
      return (
        <Suspense>
          <ProjectsList />
        </Suspense>
      );
    }

    return (
      <Suspense>
        <DevDescription />
      </Suspense>
    );
  };

  return <main>{renderContent()}</main>;
}
