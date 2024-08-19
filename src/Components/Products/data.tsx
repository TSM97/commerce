import Hive from '../../svgs/Hive';
import HoneyJar from '../../svgs/HoneyJar';
import TreeHive from '../../svgs/TreeHive';
import HoneySpoon from '../../svgs/HoneySpoon';
import Product from '../../assets/HoneyProduct1.webp';

type Benefit = {
  icon: React.ReactNode;
  text: string;
};

export const imgs = [Product, Product];
export const includesOneProduct = imgs.length === 1;

export const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const benefitsList: Benefit[] = [
  {
    icon: <HoneyJar />,
    text: 'Contains a variety of nutrients',
  },
  {
    icon: <Hive />,
    text: 'Improve health and immune support',
  },
  {
    icon: <TreeHive />,
    text: 'Promotes burn and wound healing',
  },
  {
    icon: <HoneySpoon />,
    text: 'Better for blood sugar levels',
  },
];
