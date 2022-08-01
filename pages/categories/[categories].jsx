import React from 'react'

function categories({data}) {
console.log(data)
  return (
    <div>salam</div>
  )
}
export default categories









export async function getStaticPaths() {
  const categories = ["1", "2", "4", "5", "6"]
  
  const categoryPaths = categories.map(item => {
    return {
      params: {
        categories: item
      }
    }
  })

  console.log(categoryPaths)
    return {
      paths:categoryPaths,
      fallback: false,
    }
  }
  

export async function getStaticProps({params}) {
  console.log(params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.categories}`)
  const data = await res.json()
    return{
      props:{
        data,
      }
    }
  }