import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

function CheckOrder({ id }) {
  const URL = "http://localhost:4000/";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const check = () => {
    axios
      .get(`${URL}orders?id=${id}`)
      .then((res) => {
        setSelectedProduct(res.data);
      })
      .catch((err) => console.log(err));
    setModalIsOpen(true);
  };

  const deliverOrder = async() => {
 
    axios
      .patch(`${URL}orders/${id}`,{delivered : "true",createdAt: new Date().getTime()})
      .then((response) => {check()})
      .catch((err) => alert(err.message));
  };

  

  return (
    <div className="rtl">
      <button onClick={check} className="border ">
        بررسی سفارش
      </button>
      <Modal isOpen={modalIsOpen} className='rtl'>
        {selectedProduct.map((el) => {
          return (
            <>
              <div>{` نام: ${el.username} ${el.lastname}`}</div>
              <div> {` آدرس: ${el.address}`} </div>
              <div> {` شماره تلفن: ${el.phone}`} </div>
              <div>{` زمان سفارش: ${new Date(el.expectAt).toLocaleString(
                "fa-IR",
                option
              )}`}</div>
              <table>
                <tr>
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                </tr>
                {el.products.map((item) => {
                  return (
                    <tr>
                      <td> {item.fullName} </td>
                      <td> {item.price} </td>
                      <td> {item.count} </td>
                    </tr>
                  );
                })}
              </table>
              {el.delivered === "true" ? (
                <div>{` زمان تحویل:  ${new Date(el.createdAt).toLocaleString(
                  "fa-IR",
                  option
                )}`}</div>
              ) : (
                <button onClick={deliverOrder}> تحویل سفارش </button>
              )}
            </>
          );
        })}
        <button onClick={() =>{
            setModalIsOpen(false)
            setSelectedProduct([])
        } }>  بستن </button>
      </Modal>
    </div>
  );
}

export default CheckOrder;
