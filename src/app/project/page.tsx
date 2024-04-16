"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CloseProjectIcon, ProjectDetailHeader } from "./components";
import projects from "@/data/projects";
import { useDeviceSize } from "@/hooks";
import { ProjectDetail } from "@/components/mobile";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();

  const { isMobile } = useDeviceSize();

  const company = searchParams.get("company");

  const index = searchParams.get("index");

  const getProject = () => {
    if (company) {
      return projects.find((project) => project.company === company);
    }

    return undefined;
  };

  const project = getProject();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClosePress = () => {
    setIsOpen(false);
  };

  if (!project) {
    return null;
  }

  const renderContent = () => {
    if (isMobile) {
      return <ProjectDetail project={project} index={index} />;
    }

    return (
      <>
        <ProjectDetailHeader project={project} index={index} isOpen={isOpen} />
        <CloseProjectIcon
          index={index}
          isOpen={isOpen}
          onClose={handleClosePress}
        />
      </>
    );
  };

  return (
    <main
      style={{
        background: project.companyColor,
      }}
    >
      {renderContent()}
    </main>
  );
};

export default function Page() {
  return (
    <div>
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
}
