import { useFetch } from '@/hooks/useFetch';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    useEffect(()=>{
      scrollTo(0,0)
    }, [id])
  
    const {data,error, loading} = useFetch(`/products/${id}`)
    
  return (
    <div className="container mx-auto max-w-3xl py-10 px-5 bg-white border border-gray-200 rounded-2xl shadow-sm mt-10 flex flex-col md:flex-row gap-8 items-center">
    <img className="w-52 rounded-lg object-contain bg-gray-50 p-2" src={data?.image} alt={data?.title} />
    <div className="flex flex-col gap-3 text-gray-800">
    <h1 className="text-2xl font-semibold">{data?.title}</h1>
    <p className="text-xl text-green-500 font-bold">${data?.price}</p>
    <p className="text-sm text-yellow-500"> ★ {data?.rating?.rate} <span className="text-gray-500">({data?.rating?.count} reviews)</span></p>
    <p className="text-sm text-gray-600 leading-snug">{data?.description}</p>
  </div>
</div>
  )
}

export default React.memo(ProductDetail)