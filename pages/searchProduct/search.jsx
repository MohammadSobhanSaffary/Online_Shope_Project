import Main from "../layout/Main";
import React, { useEffect, useState } from 'react'
import Card from "../../components/card";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
function search({ data }) {

  const searchValue = useSelector(state => state.search.value);
  console.log(searchValue)
  const [state, setstate] = useState({
    products: []
  });

  useEffect(() => {
    setstate(
      {
        products: (searchValue.length !== 0) ? data.filter(el => (el.fullName.includes(searchValue))) : [],
      }
    )

  }, [searchValue]);


  if (state.products.length !== 0) {
    return (
      <Main select='/'>
        <div className='w-full h-full flex flex-col items-center' >
          <div className='md:w-[50%] w-full h-20 flex md:justify-between justify-center gap-3 md:gap-0 items-center '>


            <select className="   w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end font-semibold appearance-none hover:bg-[#00B5CC] focus:border-[#00B5CC] hover:text-white" onChange={(e) => {

              (e.target.value === '1') ?
                setstate({
                  products: state.products.sort((a, b) => {
                    return a.price - b.price;
                  }),

                }
                ) : (e.target.value === '2')
                  ? setstate({
                    products: state.products.sort((a, b) => {
                      return b.price - a.price;
                    }),

                  }) : ''
            }}  >
              <option className="   w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end    hover:bg-[#00B5CC]" disabled selected >  مرتب سازی بر اساس قیمت</option>
              <option value='2' className="   w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end outline-none  focus:border-[#00B5CC] hover:bg-[#00B5CC] hover:text-white"> گران ترین   </option>
              <option value='1' className='w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end  hover:bg-[#00B5CC]  '>ارزان ترین   </option>
            </select>





            <select className=" w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end font-semibold appearance-none hover:bg-[#00B5CC] hover:text-white" onChange={(e) => {

              (e.target.value === '1') ?
                setstate({
                  products: state.products.sort((a, b) => {
                    return a.new - b.new;
                  }),

                }
                ) : (e.target.value === '2')
                  ? setstate({
                    products: state.products.sort((a, b) => {
                      return b.new - a.new;
                    }),

                  }) : ''
            }} >



              <option className="w-60  shadow-md shadow-[#575563]" selected disabled>  مرتب سازی بر اساس زمان </option>
              <option value='2' className="w-60  shadow-md shadow-[#575563]">جدید ترین</option>
              <option value='1' className="w-60 shadow-md shadow-[#575563]">قدیمی ترین</option>


            </select>
          </div>






          <div className='grid grid-cols-12 '>
            {
              state.products.map(
                el => (
                  <div className="col-span-12 sm:col-span-6 md:col-span-4 2xl:col-span-3  mx-10">
                    <Card product={el} />
                  </div>
                )
              )
            }
          </div>
        </div>
      </Main >)
  }
  else {
    return (
      <Main select='/' >
        <p className="text-2xl text-red-500 text-center py-[11%] ">!متاسفانه محصول مورد نظر شما یافت نشد</p>
      </Main>
      )
  }




}

export default search

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:4000/products`)
  const data = await res.data
  return {
    props: {
      data,

    }
  }
}






















