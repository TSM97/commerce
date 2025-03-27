import uploadDataToFirestore from '../Utils/uploadDataToFireStore';
import { useDropzone } from 'react-dropzone';
import { useEffect, useRef, useState } from 'react';
import useImageUpload from '../hooks/useImageUpload';
import ModifyDropdown from './Components/ModifyDropdown';
import { useProductsStore } from '../stores/useProductsStore';
import productType from '../types/productType';
import updateProductInFirestore from '../Utils/updateProductInFirestore';
import PrevArrowDelete from '../svgs/PrevArrowDelete';
import useResetFormFields from './hooks/useResetFormFields';

export default function ProductManagementForm() {
  const Quantity = useRef<HTMLInputElement>(null);
  const Description = useRef<HTMLInputElement>(null);
  const DescriptionEL = useRef<HTMLInputElement>(null);
  const Price = useRef<HTMLInputElement>(null);
  const PrevPrice = useRef<HTMLInputElement>(null);
  const order = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [inStock, setInStock] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<productType | null>(
    null
  );
  const { uploadImage, loading, error } = useImageUpload();
  const { products } = useProductsStore();
  const { resetFormFields } = useResetFormFields(
    { Quantity, Description, DescriptionEL, Price, PrevPrice, order },
    setSelectedImage,
    setInStock
  );

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setSelectedImage(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
  });

  // Populate form fields when a product is selected for Modification
  useEffect(() => {
    resetFormFields();
    if (selectedProduct) {
      if (Quantity.current)
        Quantity.current.value = selectedProduct.Quantity || '';
      if (Description.current)
        Description.current.value = selectedProduct.Description || '';
      if (DescriptionEL.current)
        DescriptionEL.current.value = selectedProduct.DescriptionEL || '';
      if (Price.current)
        Price.current.value = selectedProduct.Price.toString() || '';
      if (PrevPrice.current && selectedProduct.PrevPrice)
        PrevPrice.current.value = selectedProduct.PrevPrice.toString() || '';
      if (order.current && !order.current.value)
        order.current.value = selectedProduct.order.toString() || '';
      setInStock(() => selectedProduct?.inStock);
      // Optionally load the product image if needed
    }
  }, [selectedProduct]);

  // upload new product or modify existing one
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //check if image id dropped on product submit
    if (!selectedImage && !selectedProduct) {
      alert('Please select an image.');
      return;
    }
    try {
      //Set values from refs
      const productData = {
        Quantity: Quantity.current?.value || '',
        Description: Description.current?.value || '',
        DescriptionEL: DescriptionEL.current?.value || '',
        Price: parseFloat(Price.current?.value || '0'), // Convert to a number,
        PrevPrice: PrevPrice.current?.value
          ? parseFloat(PrevPrice.current.value)
          : null,
        order: parseInt(order.current?.value || '0'),
        inStock,
      };
      //selectedProduct-true means that user trying to modify an existing product
      if (selectedProduct) {
        const imageUrl = selectedImage
          ? await uploadImage(selectedImage, 90)
          : selectedProduct?.imageUrl;

        //find the product with the same order
        const existingOrderProduct = products?.find(
          (prod) =>
            prod?.order === productData?.order && prod.id !== selectedProduct.id
        );
        //reverse the orders that want to exchange
        if (existingOrderProduct) {
          await updateProductInFirestore({
            collectionName: 'products',
            documentId: existingOrderProduct?.id,
            imageUrl: existingOrderProduct?.imageUrl,
            product: { ...existingOrderProduct, order: selectedProduct.order },
          });
        }
        await updateProductInFirestore({
          collectionName: 'products',
          imageUrl,
          documentId: selectedProduct.id,
          product: productData,
        });
      } else {
        //Save article data with image URL to Firestore
        //!Stop if product with same Order exists
        if (products?.some((prod) => prod?.order === productData?.order)) {
          alert('There is an Product at the same Order');
          resetFormFields();
          setSelectedProduct(null);
          return;
        }
        const imageUrl = await uploadImage(selectedImage!, 90);
        await uploadDataToFirestore({
          collectionName: 'products',
          imageUrl,
          fields: productData,
        });
      }

      // Reset form fields and image state
      resetFormFields();
      window.location.reload();
      alert(`Data ${selectedProduct ? 'modified' : 'uploaded'} successfully!`);
      setSelectedProduct(null);
    } catch (uploadError) {
      console.error('Data uploading article: ', uploadError);
      alert('Data uploading data. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className='flex flex-col lg:grid gap-6 md:grid-cols-3 mb-3'>
          <div>
            <label
              htmlFor='Description'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Description
            </label>
            <input
              ref={Description}
              type='text'
              id='Description'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder='Athenian-Bees - Μέλι από θυμάρι'
              required
            />
          </div>
          <div>
            <label
              htmlFor='DescriptionEL'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Ελληνική Περιγραφή
            </label>
            <input
              ref={DescriptionEL}
              type='text'
              id='DescriptionEL'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder='Athenian-Bees - Μέλι από θυμάρι'
              required
            />
          </div>
          <div>
            <label
              htmlFor='Quantity'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Quantity
            </label>
            <input
              ref={Quantity}
              type='text'
              id='Quantity'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder='500GR'
              required
            />
          </div>
          <div>
            <label
              htmlFor='Price'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Price
            </label>
            <input
              ref={Price}
              type='number'
              min='0'
              step='0.01'
              id='Price'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder='8,65'
              required
            />
          </div>
          <div>
            <label
              htmlFor='PrevPrice'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Price Before Discount
              <span className='text-blue-700'> *Optional</span>
            </label>
            <input
              ref={PrevPrice}
              type='number'
              min='0'
              step='0.01'
              id='PrevPrice'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder='10,65'
            />
          </div>
          <div>
            <label
              htmlFor='order'
              className='block mb-2 text-lg font-medium text-white-900'
            >
              Order
            </label>
            <input
              ref={order}
              type='number'
              id='order'
              className='bg-white-50 border border-white-300 text-white-900 text-lg rounded-lg block w-full  p-2.5 white'
              placeholder={
                selectedProduct
                  ? `${selectedProduct?.order}`
                  : `${products?.length + 1}`
              }
              required
            />
          </div>
          {/* Img drag n' drop */}
          <section className='w-fit'>
            <div className='bg-white-default border border-white-300 text-black-250 text-lg rounded-lg block w-full  p-2.5 white'>
              <input {...getInputProps()} />
              {selectedImage ? (
                <div className='flex items-center gap-4'>
                  <p>{selectedImage.name}</p>
                  <button
                    type='button'
                    onClick={() => setSelectedImage(null)}
                    className='text-red-500 hover:text-red-700'
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <p {...getRootProps({ className: 'dropzone cursor-pointer' })}>
                  Drag 'n' drop an image here, or click to select one
                </p>
              )}
            </div>
          </section>
        </div>
        <div className='w-fit bg-white-default border border-white-300 text-black-250 text-lg rounded-lg block p-2.5 white mb-6'>
          <label>
            <input
              type='checkbox'
              className='accent-honey'
              checked={inStock}
              onChange={() => setInStock(!inStock)} // Handle the change event
            />
            <span className='pl-2'>{`Product ${
              inStock ? 'is in stock' : 'is out of stock'
            }`}</span>
          </label>
        </div>
        <div className='lg:flex gap-4 pb-12 justify-between'>
          <div className='flex gap-3 pb-3'>
            <div className='flex gap-3'>
              <button
                type='submit'
                className=' bg-primary hover:bg-primary-500 font-medium rounded-lg text-lg h-fit sm:w-auto px-5 py-2.5 text-center'
              >
                {selectedProduct ? 'Modify' : 'Submit'}
              </button>
              {selectedProduct ? (
                <div
                  onClick={() => {
                    setSelectedProduct(null);
                    resetFormFields();
                  }}
                  className='px-3 cursor-pointer  border-2 border-red-600 text-red-600 flex items-center font-bold  rounded-full h-10'
                >
                  <PrevArrowDelete className='h-full' />
                  <span> Stop Modify!</span>
                </div>
              ) : null}
            </div>
            {loading && (
              <div
                className='w-6 h-6 rounded-full animate-spin
            border-2 border-dashed border-primary-500 border-t-transparent'
              />
            )}
          </div>
          <ModifyDropdown products={products} onSelect={setSelectedProduct} />
        </div>
        <div> {error && <p>{error}</p>}</div>
      </form>
    </>
  );
}
