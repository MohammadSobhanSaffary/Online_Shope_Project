import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Main( {childeren}) {
  return (
    <>
      <Header />
      {childeren}
      <Footer />
    </>
  )
}

export default Main