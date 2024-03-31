import { FloatingMouse, InitialName } from "@/components";
import "./main.css"; //personal main.css that I created

export default function Home() {
  return (
    <main className="flex justify-center">
      <InitialName />
      <FloatingMouse />
    </main>
  );
}
