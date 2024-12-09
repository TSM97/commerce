import Hive from '../../svgs/Hive';
import HoneyJar from '../../svgs/HoneyJar';
import TreeHive from '../../svgs/TreeHive';
import HoneySpoon from '../../svgs/HoneySpoon';

type Benefit = {
  icon: React.ReactNode;
  text: string;
};

export const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const benefitsList: Benefit[] = [
  {
    icon: <HoneyJar />,
    text: 'product_Jar',
  },
  {
    icon: <Hive />,
    text: 'product_Hive',
  },
  {
    icon: <TreeHive />,
    text: 'product_TreeHive',
  },
  {
    icon: <HoneySpoon />,
    text: 'product_HoneySpoon',
  },
];
