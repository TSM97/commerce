import LeftPartial from "./Components/LeftPartial";
import RightPartial from "./Components/RightPartial";

export default function Description() {
  return (
    <div className="flex gap-16 sm:flex-row flex-col justify-center items-center sm:items-start min-h-[80dvh] my-10">
      <LeftPartial />
      <RightPartial />
    </div>
  );
}
