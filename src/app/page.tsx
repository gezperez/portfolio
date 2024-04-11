import { DevDescription, Projects } from "@/components";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Suspense>
        <DevDescription />
      </Suspense>
      <Projects />
    </main>
  );
}
