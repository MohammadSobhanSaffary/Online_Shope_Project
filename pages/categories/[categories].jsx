import Main from "../layout/Main";
import React, { useEffect, useState } from 'react'
import Card from "../../components/card";

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
          <select className="" onChange={(e) => {

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
          }} >
            <option >  مرتب سازی بر اساس قیمت</option>
            <option value='2'> گران ترین به ارزان ترین</option>
            <option value='1'>ارزان ترین به گران ترین</option>
          </select>



          <select className="" onChange={(e) => {

            (e.target.value === '1') ?
              setstate({
                products: state.products.sort((a, b) => {
                  return a.now - b.now;
                }),
                params: state.params
              }
              ) : (e.target.value === '2')
                ? setstate({
                  products: state.products.sort((a, b) => {
                    return b.now - a.now;
                  }),
                  params: state.params
                }) : ''
          }} >



            <option >  مرتب سازی بر اساس زمان </option>
            <option value='2'> جدید ترین به قدیمی ترین</option>
            <option value='1'>قدیمی ترین به جدید ترین</option>


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

  const res = await fetch(`http://localhost:4000/products`)
  const data = await res.json()
  return {
    props: {
      data,
      params,
    }
  }
}