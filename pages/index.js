

import Slider2 from "../components/sldier2";
import Slider1 from "../components/Slider1";
import Main from "./layout/Main";
import box from '../public/box.png';
import Image from "next/image";
import axios from 'axios';


export default function Home({ data }) {

  return (

    <Main select='/'>


      <div  >
        <Slider1 />
      </div>



      <div className="  grid grid-cols-12   ">
      <div className="col-span-1 mt-16 mr-1- ">
          <div className='flex flex-col justify-center gap-10 items-center p-3 rounded-l-md bg-gray-500  h-[28rem]'>
            <Image src={box} />
            <span className="text-white text-2xl pb-5">برترین ها</span>

          </div>
        </div>

        <div className="col-span-10 ">
          <Slider2 data={data}  name={'best'}/>
        </div>

        <div className="col-span-1 mt-16 ml-1 ">
          <div className='flex flex-col justify-center gap-10 items-center p-3 rounded-r-md bg-gray-500  h-[28rem]'>
            <Image src={box} />
            <span className="text-white text-2xl pb-5">برترین ها</span>

          </div>
        </div>
      </div>
      
      <div className="  grid grid-cols-12   ">
      <div className="col-span-1 mt-16 mr-1- ">
          <div className='flex flex-col justify-center gap-10 items-center p-3 rounded-l-md bg-gray-500  h-[28rem]'>
            <Image src={box} />
            <span className="text-white text-2xl pb-5">جدیدترین ها</span>

          </div>
        </div>

        <div className="col-span-10 ">
          <Slider2 data={data}  name={'new'}/>
        </div>

        <div className="col-span-1 mt-16 ml-1 ">
          <div className='flex flex-col justify-center gap-10 items-center p-2 rounded-r-md bg-gray-500  h-[28rem]'>
            <Image src={box} />
            <span className="text-white text-2xl pb-5">جدیدترین ها</span>

          </div>
        </div>
      </div>


    


    </Main>

  )
}



export async function getStaticProps() {
  const res = await axios.get(`http://localhost:4000/products`)
    const data=await res.data;
  // const data = await res.json()
  return {
    props: {
      data,
    }
  }
}