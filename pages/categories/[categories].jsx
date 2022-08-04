import Main from "../layout/Main";
import React, { useEffect, useState } from 'react'
import Card from "../../components/card";

function categories({ data, params }) {
  const [state, setstate] = useState(
    {
      products: data.filter(el=>el.tag===params.categories),
      params
    });

   useEffect(() => {
    
  
        setstate(  {
          products: data.filter(el=>el.tag===params.categories),
          params
        })
     }
   , [params.categories]);


  return (
    <Main>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-20 flex justify-center items-center  gap-40'>
          <select className="" >
            <option id='1'>مرتب سازی بر اساس</option>
            <option id='2'> گران ترین به ارزان ترین</option>
            <option id='3'>ارزان ترین به گران ترین</option>
            <option id='4'>جدید ترین  به قدیمی ترین</option>
          </select>

        </div>
        <div className='grid grid-cols-12 '>
          {
             state.products.map(
            el => (
              <div className="col-span-6 md:col-span-3  mx-10">
                <Card product={el} />




              </div>







            )
          )
          }
        </div>
      </div>
    </Main>
  )
}
export default categories









export async function getStaticPaths() {
  const categories = ["foods", "health", "stationery", "furniture", "digital-tools"]

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

  const res = await fetch(`http://localhost:4000/products`)
  const data = await res.json()
  return {
    props: {
      data,
      params,
    }
  }
}