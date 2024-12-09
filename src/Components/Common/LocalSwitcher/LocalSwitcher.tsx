import { motion } from 'framer-motion';
import i18n from '../../../Utils/i18n';
import { useState } from 'react';

import { languages } from '../../../config';
import Earth from '../../../svgs/Earth';
import EnglishFlag from '../../../svgs/EnglishFlag';
import GreekFlag from '../../../svgs/GreekFlag';
import { itemVariants, parentVariant, wrapperVariants } from './variants';
const LocalSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen((pv) => !pv)}
      variants={parentVariant}
      initial={parentVariant.closed}
      animate={open ? 'open' : 'closed'}
      className='relative cursor-pointer flex items-center justify-center'
    >
      <Earth />
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: 'top', translateX: '-50%' }}
        className='flex flex-col gap-2 py-2 px-4 rounded-lg bg-white shadow-xl absolute top-[150%] left-[50%] w-fit overflow-hidden'
      >
        {languages.map((language) => (
          <motion.li
            key={language?.code}
            variants={itemVariants}
            className='flex items-center gap-2 w-full p-2 text-xl font-medium whitespace-nowrap rounded-md text-black-500 hover:bg-svgColor transition-colors cursor-pointer'
            onClick={() => {
              () => setOpen(false);
              i18n.changeLanguage(language?.code);
            }}
          >
            {language?.code == 'en' ? <EnglishFlag /> : <GreekFlag />}
            <span className='relative z-10'>{language?.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default LocalSwitcher;
