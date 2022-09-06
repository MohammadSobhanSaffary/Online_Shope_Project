import axios from "axios";
import { useEffect, useState } from "react";
// import EditInventory from '../../Components/Inventory/EditInventory'
// import SaveEdit from "../../Components/Inventory/SaveEdit";
import Pagination from "../../Components/Pagination";


function Inventory() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal]= useState('');
  const URL = "http://localhost:4000/";

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
}

  useEffect(() => {
   getProducts();
  }, []);

  const getProducts =  async(currentPage) => {
    await axios
      .get(`${URL}products?_page=${currentPage}&_limit=5`)
      .then((res) => {
        setProducts(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log("error:" + err));
  };


  return (
    <div className="mt-64 flex flex-col justify-center items-center rtl">
      <div className="flex w-[80%] justify-between">
      <p className=" font-extrabold text-3xl border-b-4">مدیریت موجودی و قیمت ها</p>
      {/* <SaveEdit /> */}
       </div>
      <table className="border-2 mt-20 w-[80%] text-start">
        <tbody>
        <tr className="  h-10">
          <th className="text-start">کالا</th>
          <th className="text-start"> قیمت (تومان) </th>
          <th className="text-start">موجودی</th>
        </tr>

        {products.map((el) => {
          return (
            <tr key={el.id} className="  odd:bg-[#7bdeeb]">
              <td> {el.fullName} </td>
              {/* <EditInventory price={persianNumber(+(el.price))} stock={persianNumber(+(el.stock))} /> */}
              
            </tr>
          );
        })}
        </tbody>
      </table>

     <Pagination currentPage={currentPage} total={total} getProducts={getProducts}/>
    </div>
  );
}

export default Inventory;
