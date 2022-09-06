import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Card({ product }) {
    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");
    }



    return (
        <div className='h-[26rem] my-20 cursor-pointer '>
            <Link href={`/products/${product.id}`}>
                <div className='w-full h-full flex flex-col items-center gap-5 justify-between shadow-lg px-5 py-4 shadow-[#575563]  rounded-lg '>
                    <Image src={product.photo} width={250} height={250} />
                    <span className='text-right'>{product.fullName}</span>
                    <div className='flex flex-col gap-4 self-start'>
                        <div className='flex  flex-row self-start gap-5'>
                            <span>تومان</span>
                            <span className={(Number(product.off) !== 0) ? 'text-right text-lg self-end font-bold line-through' : 'text-right text-lg self-end font-bold '}>{persianNumber((Number(product.price)))} </span>
                        </div>
                        {(Number(product.off) !== 0) ? <div className='flex  flex-row-reverse sproductf-start gap-5'> <span className='text-right text-lg sproductf-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(product.price) - Number(product.price) * Number(product.off) / 100)))} </span>  <span className='text-[#00B5CC]'>تومان</span ></div> : ''}

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card