import Main from "../layout/Main";
import React, { useEffect, useState } from 'react'
import Card from "../../components/card";
import axios from 'axios';
function categories({ data, params }) {  
  const [state, setstate] = useState(
    {
      products: data.filter(el => el.tag === params.categories),
      params
    });

  useEffect(() => {


    setstate({
      products: data.filter(el => el.tag === params.categories),
      params
    })
  }
    , [params.categories]);


  return (
    <Main>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-20 flex justify-center items-center  gap-40'>

          
          <select className="   w-70 p-3 border-2 border-[#00B5CC] rounded-lg text-end font-semibold appearance-none hover:bg-[#00B5CC] focus:border-[#00B5CC] hover:text-white" onChange={(e) => {

            (e.target.value === '1') ?
              setstate({
                products: state.products.sort((a, b) => {
                  return a.price - b.price;
                }),
                params: state.params
              }
              ) : (e.target.value === '2')
                ? setstate({
                  products: state.products.sort((a, b) => {
                    return b.price - a.price;
                  }),
                  params: state.params
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
                params: state.params
              }
              ) : (e.target.value === '2')
                ? setstate({
                  products: state.products.sort((a, b) => {
                    return b.new - a.new;
                  }),
                  params: state.params
                }) : ''
          }} >



            <option  className="w-60  shadow-md shadow-[#575563]" selected disabled>  مرتب سازی بر اساس زمان </option>
            <option value='2' className="w-60  shadow-md shadow-[#575563]"> جدید ترینن</option>
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
    </Main >
  )











}
export default categories









export async function getStaticPaths() {
  const categories = ["foods", "makeup", "stationery", "furniture", "digital-tools"]

  const categoryPaths = categories.map(item => ({
    params: {
      categories: item
    }
  }
  ))


  return {
    paths: categoryPaths,
    fallback: false,
  }
}


export async function getStaticProps({ params }) {

   const res = await axios.get(`http://localhost:4000/products`)
  const data = await res.data
  return {
    props: {
      data,
      params,
    }
  }
}