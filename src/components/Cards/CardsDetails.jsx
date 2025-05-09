import { useParams, Navigate } from 'react-router-dom'
import useGetData from '../../hooks/GetHooks'
import React, { useState } from 'react'
import { GoHeart } from 'react-icons/go'

function CardsDetails() {
  const { id } = useParams()
  const url = import.meta.env.VITE_API_URL
  const [quantity, setQuantity] = useState(1)

  const { data, loading, error } = useGetData(`${url}/products/${id}`)

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className='flex items-center justify-center h-screen px-4'>
        <div className='bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg shadow-md w-full max-w-md text-center'>
          <h2 className='text-xl font-semibold mb-2'>Xatolik!</h2>
          <p>{error ? error.message : 'Mahsulot topilmadi.'}</p>
          <Navigate to="/404" replace />
        </div>
      </div>
    )
  }

  return (
    <section className='max-w-[1200px] mx-auto my-12 px-4'>
      <div className='flex max-[900px]:flex-col gap-10'>
        <div className='flex rounded-md shadow-md justify-center'>
          <img
            src={data?.thumbnail}
            alt='Main Product'
            className='w-[573px] h-auto bg-contain'
          />
        </div>
        <div className='w-full lg:w-1/2 space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            {data?.title}
          </h1>
          <div className='flex items-center gap-3'>
            <p className='text-xl sm:text-2xl text-green-600 font-semibold'>
              ${data?.price}
            </p>
            <p className='text-sm text-gray-400 line-through'>
              ${(
                data?.price / (1 - data?.discountPercentage / 100)
              ).toFixed(2)}
            </p>
            <p className='text-sm text-red-500 font-medium'>
              -{data?.discountPercentage}% OFF
            </p>
          </div>

          <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
            <p>⭐ {data?.rating}</p>
            <p>Stock: {data?.stock}</p>
            <p>Status: {data?.availabilityStatus}</p>
          </div>

          <p className='text-gray-700 leading-relaxed'>{data?.description}</p>

          <div className='text-sm text-gray-600 space-y-1'>
            <p>
              Dimensions: {data?.dimensions?.width}cm ×{' '}
              {data?.dimensions?.height}cm × {data?.dimensions?.depth}cm
            </p>
            <p>Weight: {data?.weight}g</p>
          </div>

          <div className='flex max-[1120px]:flex-col max-[900px]:flex-row max-[530px]:flex-col justify-between max-[470px]:justify-center gap-4 mt-6'>
            <div className='flex items-center overflow-hidden w-max'>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className='px-4 cursor-pointer rounded-full py-2 bg-green-600 hover:bg-green-500 transition text-[#fff] text-[18px] font-medium'
              >
                –
              </button>
              <span className='px-6 font-bold py-2 text-base bg-white text-gray-800'>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className='px-4 cursor-pointer rounded-full py-2 bg-green-600 hover:bg-green-500 transition text-[#fff] text-[18px] font-medium'
              >
                +
              </button>
            </div>

            <div className='flex flex-wrap gap-3'>
              <button className='bg-green-600 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-green-700 transition text-sm sm:text-base'>
                BUY NOW
              </button>
              <button className='border border-green-600 cursor-pointer text-green-600 px-5 py-2 rounded-md hover:bg-green-50 transition text-sm sm:text-base'>
                ADD TO CART
              </button>
              <button className='border border-green-600 cursor-pointer text-green-600 px-5 py-2 rounded-md hover:bg-green-50 transition text-sm sm:text-base'>
                <GoHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 bg-gray-50 p-5 rounded-xl shadow-sm max-[470px]:flex max-[470px]:justify-center max-[470px]:items-center max-[470px]:flex-col'>
        <h2 className='text-lg font-semibold text-gray-800 mb-4'>
          Mahsulot tafsilotlari
        </h2>
        <div className='grid max-[470px]:grid-cols-1 max-[470px]:text-center grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-700'>
          <p>
            <span className='font-medium'>SKU:</span> {data?.sku}
          </p>
          <p>
            <span className='font-medium'>Barcode:</span> {data?.meta?.barcode}
          </p>
          <p>
            <span className='font-medium'>Brand:</span> {data?.brand}
          </p>
          <p>
            <span className='font-medium'>Category:</span> {data?.category}
          </p>
          <p>
            <span className='font-medium'>Tags:</span> {data?.tags?.join(', ')}
          </p>
          <p>
            <span className='font-medium'>Min. Order Qty:</span>{' '}
            {data?.minimumOrderQuantity}
          </p>
          <p>
            <span className='font-medium'>Shipping:</span>{' '}
            {data?.shippingInformation}
          </p>
          <p>
            <span className='font-medium'>Return Policy:</span>{' '}
            {data?.returnPolicy}
          </p>
          <p>
            <span className='font-medium'>Warranty:</span>{' '}
            {data?.warrantyInformation}
          </p>
        </div>

        {data?.meta?.qrCode && (
          <div className='mt-6 flex items-center justify-center sm:justify-start'>
            <div className='text-center'>
              <img
                src={data.meta.qrCode}
                alt='QR Code'
                className='w-24 h-24 object-contain mx-auto'
              />
              <p className='text-xs text-gray-500 mt-1'>QR kodni skanerlang</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CardsDetails
