import { AnimatePresence, motion } from 'framer-motion';
import { deleteLastArticle } from '../utils/deleteLastDoc';
import { useState } from 'react';

import deleteProductFromFirestore from '../utils/deleteProductFromFirestore';

export default function AdminModal({
  selectedProductId,
  imgUrl,
  modalType = 'deleteArticle',
  isOpen,
  setIsOpen,
}: {
  selectedProductId?: string;
  imgUrl?: string;
  modalType?: 'deleteArticle' | 'deleteProduct';
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer'
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className='bg-gradient-to-br from-primary-250 to-primary-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden'
          >
            <div className='relative z-10'>
              <motion.div
                animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                className='bg-white w-16 h-16 mb-2 rounded-full text-5xl text-red-500 font-extrabold grid place-items-center mx-auto'
              >
                !
              </motion.div>
              <h3 className='text-2xl font-bold text-center mb-2'>
                {`Are you sure you want to delete ${
                  modalType === 'deleteArticle'
                    ? 'the last Article'
                    : modalType === 'deleteProduct'
                    ? 'this product'
                    : null
                }?`}
              </h3>
              <div className='flex gap-2'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='bg-transparent hover:bg-primary-250 transition-colors text-white font-semibold w-full py-2 rounded'
                >
                  No
                </button>
                <button
                  onClick={async () => {
                    setIsLoading(true);
                    modalType === 'deleteArticle'
                      ? await deleteLastArticle()
                      : modalType === 'deleteProduct' &&
                        selectedProductId &&
                        imgUrl
                      ? await deleteProductFromFirestore(
                          selectedProductId,
                          imgUrl
                        )
                      : null;
                    setIsLoading(false);
                    setIsOpen(false);
                  }}
                  className='bg-red-500 hover:opacity-90 transition-opacity font-semibold w-full py-2 rounded'
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
