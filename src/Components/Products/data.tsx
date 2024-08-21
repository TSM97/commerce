import Hive from '../../svgs/Hive';
import HoneyJar from '../../svgs/HoneyJar';
import TreeHive from '../../svgs/TreeHive';
import HoneySpoon from '../../svgs/HoneySpoon';
import Product from '../../assets/HoneyProduct1.webp';
import Product2 from '../../assets/HoneyProduct2.webp';

type Benefit = {
  icon: React.ReactNode;
  text: string;
};

export const products = [
  {
    img: Product,
    subtitle: '450gr',
    title: 'Athenian Bees - Μέλι πορτοκαλιάς',
    lastPrice: '8,65€',
    firstPrice: '10,65€',
  },
  {
    img: Product2,
    subtitle: '450gr',
    title: 'Athenian Bees - Μέλι από θυμάρι',
    lastPrice: '11,50€',
  },
];
export const includesOneProduct = products.length === 1;

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
