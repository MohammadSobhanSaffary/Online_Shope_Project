import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Main( {children}) {
  return (
    <Fragment >
      <div className='w-[100vw] h-[100vh] flex flex-col justify-between '>
      <Header />
      {children}
      <Footer />
      </div>
    </Fragment>
  )
}

export default Main