

import Slider2 from "../components/sldier2";
import Slider1 from "../components/Slider1";
import Main from "./layout/Main";
import box from '../public/box.png';
import Image from "next/image";


export default function Home({ data }) {
  return (

    <Main>


      <div className="" >
        <Slider1 />
      </div>



      <div className="  grid grid-cols-12   ">

        <div className="col-span-11 ">
          <Slider2 data={data} />
        </div>

        <div className="col-span-1">
          <div className='flex flex-col justify-between p-3 rounded-r-md bg-gray-500'>
            <Image src={box} />
            <span>برترین ها</span>

          </div>
        </div>
        
      </div>


    </Main>

  )
}



export async function getStaticProps() {

  const res = await fetch(`http://localhost:4000/products`)
  const data = await res.json()
  return {
    props: {
      data,
    }
  }
}