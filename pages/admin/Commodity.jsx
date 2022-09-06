import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setCategory,
//   setProduct,
//   setSubCategory,
// } from "../../redux/productSlice";

import AddCommodity from "../../components/AddCommodity";
import DeleteCommodity from "../../components/DeleteCommodity";
// import EditCommodity from "../../Components/Commodity/EditCommodity";
import Pagination from "../../Components/Pagination";

function Commodity() {
  const [products, setProducts] = useState([]);
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.productItem);
//   const category = useSelector((state) => state.product.categoryItem);
//   const subCategory = useSelector((state) => state.product.subCategoryItem);
  // const [subCategory, setSubCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal]= useState('');
  const URL = "http://localhost:4000/";

  useEffect(() => {
    getProducts();
  }, []);

  

  const getProducts = async (currentPage) => {
    await axios
      .get(`${URL}products?_page=${currentPage}&_limit=5`)
      .then((res) => {
        setProducts(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log("error:" + err));



      

    // axios
    //   .get(`${URL}category`)
    //   .then((res) => {
    //     dispatch(setCategory(res.data));
    //   })
    //   .catch((err) => console.log("error:" + err));

    // axios
    //   .get(`${URL}subcategory`)
    //   .then((res) => {
    //     dispatch(setSubCategory(res.data));
    //   })
    //   .catch((err) => console.log("error:" + err));
  };


  return (
    <div className="mt-64 flex flex-col justify-center items-center rtl">
      <div className="flex w-[80%] justify-between">
        <p className=" font-extrabold text-3xl border-b-4 ">
          مدیریت کالا ها
        </p>
        {/* <button className="border-2 font-bold p-3 rounded-2xl border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white ">
          افزودن کالا
        </button> */}
        <AddCommodity /> 
      </div>
      <table className="border-2  mt-20 w-[80%] text-start">
        <tbody>
          <tr className="  h-10">
            <th className="text-center"> تصویر </th>
            <th className="text-center"> نام کالا </th>
            <th className="text-center"> دسته بندی </th>
            <th className="text-center"> ویرایش </th>
            <th className="text-center"> حذف </th>
          </tr>

          {products.map((el) => {
            return (
              <tr key={el.id} className=" ">
                <td className="flex items-center justify-center text-center">
                  <img
                    src={el.photo}
                    className="w-8 h-8 rounded-full items-center flex"
                  /> 
                </td>
                <td> {el.fullName} </td>
                <td> {el.categori} / {el.parent} </td>
                  
                <td className="text-center">
                 
                  {/* <EditCommodity id={el.id} /> */}
                </td>
                <td className="text-center">
                  
                  <DeleteCommodity id={el.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination currentPage={currentPage} total={total} getProducts={getProducts} />
    </div>
  );
}

export default Commodity;
