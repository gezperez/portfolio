import { Projects } from "@/components";
import { Suspense } from "react";

const Component = () => {
  return <Projects />;
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
