import React from 'react'

function Product({data}) {
    return (
        <div>adasd</div>
    )
}


export default Product























export async function getStaticPaths() {
[]
    const productPaths = data.map(item => ({
        params: {
            product: item.id
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