import  { useEffect } from 'react';
import { getData } from './context/DataContext';

const Category = () => {
  const { data, fetchData } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = [...new Set(newVal)];
    return newVal;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categoryOnlyData = getUniqueCategory(data, 'category');

  return (
    <div className="bg-[#101829]">
        <div className='max-w-7xl mx-auto flex gap-4 items-center  py-7 px-4 justify-around'>
            {categoryOnlyData?.map((item, index) => {
                return (
                    <div className='flex items-center justify-center gap-2' key={index}>
                        <p className='uppercase text-white bg-gradient-to-r from bg-red-500 to-purple-500 px-3 py-1 rounded-md cursor-pointer'>{item}</p>
                    </div>
                )
            })}
        </div>
     
    </div>
  );
};

export default Category;
