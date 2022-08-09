import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Main( {children ,select}) {
  return (
    <Fragment >
      <div className='w-full h-full flex flex-col justify-between '>
      <Header select={select} />
      {children}
      <Footer />
      </div>
    </Fragment>
  )
}

export default Main