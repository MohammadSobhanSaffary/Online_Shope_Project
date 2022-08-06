import Image from 'next/image';
import React, { useState } from 'react'

function Product({ data }) {
    const [state, setstate] = useState({
        product:data.filter(el=>el.id===params.productId),
        productId:params.productId,
    });
    return (
        <div className='w-full h-full'>
            <div className='gtid grid-cols-12'>
                <div className='col-span-6 rounded-lg shadow-sm shadow-[#575563]'>
                  <Image src={state.product.photo} width={500} height={500}/>
                </div>
                <div className='col-span-6'></div>
            </div>
        </div>
    )
}


export default Product























export async function getStaticPaths() {
    const res = await fetch(`http://localhost:4000/products`);
    const data = await res.json();
    const productPaths = data.map(item => ({
        params: {
            productId: item.id
        }
    }
    ))


    return {
        paths: productPaths,
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