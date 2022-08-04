import React from 'react'

function categories({data}) {
console.log(data)
  return (
    <div>salam</div>
  )
}
export default categories









export async function getStaticPaths() {
  const categories = ["foods ", "health ","stationery ", "furniture",  "difital-tools"]
  
  const categoryPaths = categories.map(item => {
    return {
      params: {
        categories: item
      }
    }
  })

  
    return {
      paths:categoryPaths,
      fallback: false,
    }
  }
  

export async function getStaticProps({params}) {

    const res = await fetch(`http://localhost:4000/products`)
  const data = await res.json()
    return{
      props:{
        data,
      }
    }
  }