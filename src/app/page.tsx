import Image from "next/image";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="basis-3/5">
        <Timeline />
      </div>
    </div>
  );
}
