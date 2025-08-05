import React, { useEffect } from 'react';
import { getData } from '../context/DataContext';
import FilterSection from '../FilterSection';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductCard from '../ProductCard';

const Products = () => {
  const { data, fetchData } = getData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10 bg-white py-4 shadow-amber-600 text-red-600 mt-5'>
        {data?.length > 0 ? (
          <div className='flex gap-8'>
            <FilterSection />
           <div className='flex flex-wrap gap-4 justify-center cols-3'>
            {
            data?.map((product,index)=>{
              return <ProductCard key={index} product={product}/>
              
            })
          }
           </div>
           
            <div className='flex-1 h-ful'> {/* Example product section placeholder */}
              <p>Product list will go here...</p>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center h-[400px] '>
            
           <AiOutlineLoading3Quarters  className='w-10 h-10 bg-blue-500 rotate-180'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
