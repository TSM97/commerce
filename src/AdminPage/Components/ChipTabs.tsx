import Chip from "./Chip";

const tabs = ["Upload article", "Products Management"];

const ChipTabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="md:w-1/2 border-b-2 border-black-250 border-dashed">
      <div className="flex items-center justify-end flex-wrap gap-2">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    </div>
  );
};

export default ChipTabs;
