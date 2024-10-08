import LeftPartial from "./Components/LeftPartial";
import RightPartial from "./Components/RightPartial";
import MultipleHive from "../../svgs/MultipleHive";

export default function News() {
  return (
    <div
      id="News"
      className="flex relative gap-16 xl:flex-row flex-col justify-center items-center xl:items-start xl:h-[780px] my-10"
    >
      <LeftPartial />
      <RightPartial />
      <MultipleHive />
    </div>
  );
}
