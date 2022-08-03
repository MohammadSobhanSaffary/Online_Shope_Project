import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Main( {children}) {
  return (
    <Fragment >
      <div className='w-full h-full flex flex-col justify-between '>
      <Header />
      {children}
      <Footer />
      </div>
    </Fragment>
  )
}

export default Main