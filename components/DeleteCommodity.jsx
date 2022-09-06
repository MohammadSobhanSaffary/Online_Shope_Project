import axios from "axios";
import Modal from "react-modal";
import {BsTrashFill} from 'react-icons/bs'
import {useState} from 'react';
// import { setProduct } from "../../redux/productSlice";
// import { useDispatch, useSelector } from "react-redux";

function DeleteCommodity({id}) {
    const URL = "http://localhost:4000/";
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    // const products = useSelector((state) => state.product.productItem);
    // const dispatch = useDispatch();

    const openModal=()=>{
        setModalIsOpen(true)
    }

    const deleteProduct = ()=>{
        axios.delete(`${URL}products/${id}`)
        .then(console.log('deleted'))
        setModalIsOpen(false)
        axios.get(`${URL}products?_limit=5`)
        .then((res)=>setProducts(res.data))
    }

    return ( <div className='rtl '>
    <button onClick={openModal} className=' text-center'> <BsTrashFill /> </button>
    <Modal isOpen={modalIsOpen} className='w-[400px] h-[300px] rtl top-[50%] left-[40%] absolute '>
        <div> آیا می خواهید این کالا را حذف کنید؟ </div>
        <button onClick={deleteProduct}> بله </button>
        <button onClick={()=> setModalIsOpen(false)}> خیر </button>
    </Modal>

    </div>);
}

export default DeleteCommodity;