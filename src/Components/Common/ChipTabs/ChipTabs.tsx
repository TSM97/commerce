import Chip from "./Chip";

const ChipTabs = ({
  selected,
  setSelected,
  tabs,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  tabs: string[];
}) => {
  return (
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
  );
};

export default ChipTabs;
