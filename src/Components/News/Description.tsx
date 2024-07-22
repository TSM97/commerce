import LeftPartial from "./Components/LeftPartial";
import RightPartial from "./Components/RightPartial";
import MultipleHive from "../../svgs/MultipleHive";

export default function Description() {
  return (
    <div className="flex relative gap-16 md:flex-row flex-col justify-center items-center md:items-start min-h-[80dvh] my-10">
      <LeftPartial />
      <RightPartial />
      <MultipleHive />
    </div>
  );
}
