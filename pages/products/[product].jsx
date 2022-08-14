import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider2 from '../../components/sldier2';
import box from '../../public/box.png';
import Main from '../layout/Main';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setpurchases } from '../../redux/slices/shopSlice';

function Product({ data, params }) {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.cart.value)
    const [state, setstate] = useState({
        product: data.filter(el => el.id === params.product)[0],
        productId: params.product,
    });

    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");
    }

    const handleShop = (productId) => {
        const product = purchases.filter(el => el.id === productId)[0];
    
        console.log(product)
        if (product!==undefined) {
            dispatch(setpurchases([...purchases.filter(el => el.id != productId), {
                id: productId,
                number: +product.number + 1
            }]))

        }
        else {
            dispatch(setpurchases([...purchases, {
                id: productId,
                number:1 
            }]))
        }
    }











    useEffect(() => {
        setstate(({
            product: data.filter(el => el.id === params.product)[0],
            productId: params.product,
        }))

    }, [params.product]);

    return (
        <Main select={`/categories/${state.product.tag}`}>
            <div className='w-full h-full py-5 '>


                <div className='flex md:flex-row flex-col-reverse col-span-12 items-center px-5 w-full'>


                    <div className='w-full md:w-[70%]  flex flex-col gap-20 items-center justify-around py-5 '>
                        <h1 className='text-3xl font-bold hidden md:block'>{state.product.fullName}</h1>
                        <p className='text-right w-[70%]  break-[5px] text-2xl leading-loose   '>{state.product.informations}</p>
                        <div className='flex flex-col-reverse md:flex-row gap-3  items-center  w-[max-content] md:w-[50%] '>
                            <button className='lg:text-xl text-md bg-[#00B5CC] text-white p-2 lg:p-5 rounded-md self-start flex items-center   gap-3 ' onClick={()=>handleShop(params.product)}>
                                <BsCart3 className='w-8 h-8' />
                                اضافه کردن به سبد خرید
                            </button>
                            {(+state.product.off !== 0) ?
                                <div className='flex flex-row items-center text-xl  gap-3'>
                                    <div className=' flex flex-col items-center justify-between gap-2 h-20 '>
                                        <span className=' rounded-[50%] p-1 w-12 h-12   flex items-center justify-center text-md   bg-[#00B5CC] text-white' > {persianNumber(+state.product.off)} %</span>
                                        <span className='text-[#00B5CC]'>تومان</span >
                                    </div>

                                    <div className='flex  flex-col-reverse items-center justify-between h-20  gap-2 pt-2'>
                                        <span className=' text-2xl sproductf-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(state.product.price) - +(state.product.price) * +(state.product.off) / 100)))} </span>
                                        <span className=' text-md line-through'> {persianNumber(+state.product.price)}</span>
                                    </div>


                                </div>
                                :
                                <div className='flex  gap-3 text-xl '>
                                    <span>
                                        تومان
                                    </span>
                                    <span className=' font-semibold'>
                                        {Number(state.product.price)}
                                    </span>

                                </div>}


                        </div>
                    </div>

                    <div className='w-full md:w-[30%] rounded-sm shadow-sm shadow-[#575563] flex flex-col items-center gap-5 p-5'>
                        <p className='font-semibold  text-2xl text-center'>{state.product.fullName}</p>
                        <Image src={state.product.photo} width={600} height={600} />

                        <div>


                            {(+state.product.off !== 0) ?
                                <div className='hidden md:flex flex-row items-center text-xl  gap-3'>
                                    <div className=' flex flex-col items-center justify-between gap-2 h-20 '>
                                        <span className=' rounded-[50%] p-1 w-12 h-12   flex items-center justify-center text-md   bg-[#00B5CC] text-white' > {persianNumber(+state.product.off)} %</span>
                                        <span className='text-[#00B5CC]'>تومان</span >
                                    </div>

                                    <div className='flex  flex-col-reverse items-center justify-between h-20  gap-2 pt-2'>
                                        <span className=' text-2xl sproductf-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(state.product.price) - +(state.product.price) * +(state.product.off) / 100)))} </span>
                                        <span className=' text-md line-through'> {persianNumber(+state.product.price)}</span>
                                    </div>


                                </div>
                                :
                                <div className='hidden md:flex gap-3 text-xl '>
                                    <span>
                                        تومان
                                    </span>
                                    <span className=' font-semibold'>
                                        {Number(state.product.price)}
                                    </span>

                                </div>}



                        </div>
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




































