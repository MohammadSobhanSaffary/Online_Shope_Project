import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider2 from '../../components/sldier2';
import box from '../../public/box.png';
import Main from '../layout/Main';
import { BsCart3 } from 'react-icons/bs';

function Product({ data, params }) {
    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");
    }


    const [state, setstate] = useState({
        product: data.filter(el => el.id === params.product)[0],
        productId: params.product,
    });


    useEffect(() => {
        setstate(({
            product: data.filter(el => el.id === params.product)[0],
            productId: params.product,
        }))

    }, [params.product]);

    return (
        <Main>
            <div className='w-full h-full py-5 '>


                <div className='grid grid-cols-12   '>
                    <div className='col-span-12 md:col-span-8 flex flex-col gap-20 items-center py-5 '>
                        <h1 className='text-3xl font-bold'>{state.product.fullName}</h1>
                        <p className='text-right w-[70%]  break-[5px] text-2xl leading-loose   '>{state.product.informations}</p>
                        <div className='flex justify-between items-center w-[50%] '>
                            <button className='text-xl bg-[#00B5CC] text-white p-5 rounded-md self-start flex items-center   gap-3 '>
                                <BsCart3 />
                                اضافه کردن به سبد خرید
                            </button>
                            {(Number(state.product.off) !== 0) ?
                                <div className='flex flex-col items-center '>
                                    <div className=' w-[200px] flex gap-4 items-center justify-between  '>
                                        <span className=' rounded-[50%]  w-12 h-12  text-md  flex justify-center items-center   bg-[#00B5CC] text-white' > {persianNumber(+state.product.off)} %</span>
                                        <span className=' text-2xl line-through'> {persianNumber(+state.product.price)}</span>
                                    </div>

                                    <div className='flex  flex-row-reverse items-center justify-between sproductf-start gap-5 w-[200px]'> <span className='text-right text-3xl sproductf-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(state.product.price) - Number(state.product.price) * Number(state.product.off) / 100)))} </span>  <span className='text-[#00B5CC] text-xl'>تومان</span >
                                    </div>


                                </div>
                                :
                                <div className='flex  gap-5  '>
                                    <span>
                                        تومان
                                    </span>
                                    <span>
                                        {Number(state.product.price)}
                                    </span>

                                </div>}
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-4 rounded-sm shadow-sm shadow-[#575563] flex flex-col items-center gap-5 py-5'>
                        <p className='font-semibold  text-2xl text-center'>{state.product.fullName}</p>
                        <Image src={state.product.photo} width={600} height={600} />

                        <div>


                            {(Number(state.product.off) !== 0) ?
                                <div className='flex flex-col items-center text-xl '>
                                    <div className=' felx gap-3 '>
                                        <span className=' rounded-[50%] p-2 w-12 h-12  text-md    bg-[#00B5CC] text-white' > {persianNumber(+state.product.off)} %</span>
                                        <span className=' text-md line-through'> {persianNumber(+state.product.price)}</span>
                                    </div>

                                    <div className='flex  flex-row-reverse  gap-5'> <span className='text-right text-2xl sproductf-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(state.product.price) - Number(state.product.price) * Number(state.product.off) / 100)))} </span>  <span className='text-[#00B5CC]'>تومان</span >
                                    </div>


                                </div>
                                :
                                <div className='flex  gap-5  '>
                                    <span>
                                        تومان
                                    </span>
                                    <span>
                                        {Number(state.product.price)}
                                    </span>

                                </div>}



                        </div>
                    </div>
                </div>

                <div className="  grid grid-cols-12   ">
                    <div className="col-span-1 mt-16 mr-1- ">
                        <div className='flex flex-col justify-center gap-10 items-center p-2 rounded-l-md bg-gray-500  h-[28rem]'>
                            <Image src={box} />
                            <span className="text-white text-xl  pb-5"> محصولات مشابه</span>

                        </div>
                    </div>

                    <div className="col-span-10 ">
                        <Slider2 data={data.filter(el => (el.parent === state.product.parent) && (el.id !== state.product.id))} />
                    </div>

                    <div className="col-span-1 mt-16 ml-1 ">
                        <div className='flex flex-col justify-center gap-10 items-center p-1 rounded-r-md bg-gray-500  h-[28rem]'>
                            <Image src={box} />
                            <span className="text-white text-xl text-center pb-5"> محصولات مشابه</span>

                        </div>
                    </div>
                </div>

            </div>
        </Main >
    )
}



export default Product
export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:4000/products`);
    const data = await res.data;
    const productPaths = data.map(item => ({
        params: {
            product: `${item.id}`
        }
    }
    ))


    return {
        paths: productPaths,
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




































