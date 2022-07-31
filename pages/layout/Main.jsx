import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Main( {childeren}) {
  return (
    <Fragment >
      <div className='w-[100vw] h-[100vh] flex flex-col justify-between '>
      <Header />
      {childeren}
      <Footer />
      </div>
    </Fragment>
  )
}

export default Main