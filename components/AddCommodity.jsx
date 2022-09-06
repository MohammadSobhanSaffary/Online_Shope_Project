import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
// import { useSelector } from "react-redux";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";

function AddCommodity() {
  const URL = "http://localhost:4000/";
  //   const category = useSelector((state) => state.product.categoryItem);
  //   const parent = useSelector((state) => state.product.subCategoryItem);
  const [formData, setFormData] = useState({
    fullName: "",
    price: "",
    categori: "",
    parent: "",
    informations: "",
    photo: "",
    availeblity: "",
    off: "",
  });
  // function getUnique(array) {
  //   let uniqueArray = [];


  //   for (let i = 0; i < array.length; i++) {
  //     if (uniqueArray.indexOf(array[i]) === -1) {
  //       uniqueArray.push(array[i]);
  //     }
  //   }
  //   return uniqueArray;
  // }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [categori, setCategori] = useState([]);
  // products.map(el=>
  // {
  //   const temp=[];
  //   temp.push(el.categori);
  //   setCategori(getUnique(temp))
  // })
  

  useEffect(() => {
    getProducts()
  }, [])









  const getProducts = async () => {
    await axios
      .get(`${URL}products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("error:" + err));
  }


  const handlePhoto = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0].name }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4000/products`, formData)
    // setModalIsOpen(false);
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="rtl">
      <button
        onClick={() => openModal()}
        className="border-2 font-bold p-3 rounded-2xl "
      >
        افزودن کالا
      </button>
      <Modal isOpen={modalIsOpen}>
        <form className="flex flex-col rtl">
          <input type="file" multiple onChange={handlePhoto} />
          نام
          <input
            type="text"
            name="name"
            onChange={handleFormData}
            className="border"
          />
          قیمت
          <input
            type="text"
            name="price"
            onChange={handleFormData}
            className="border"
          />
          موجودی
          <input
            type="text"
            name="availeblity"
            onChange={handleFormData}
            className="border"
          />
          تخفیف
          <input
            type="text"
            name="off"
            onChange={handleFormData}
            className="border"
          />
          دسته بندی
          <select
            name="categori"
            onChange={handleFormData}
            className="border"
          >
            {categori.map((el) => {
              return (<option value={el}> {el} </option>
              )
            })}



          </select>
          {/* <select
               name ="parent"
          onChange={handleFormData}

          className="border "
          >
          {products.map((el) => {
            return (
              <option value={el.parent}> {el.parent} </option>
            )
          })}
        </select> */}
          توضیحات
          {/* <CKEditor
            editor={ClassicEditor}
            data={formData.informations}
            onChange={(event, editor) => {
              const data = editor.getData()
              setFsrmData((prev) => ({ ...prev, informations: data }));
            }}

          /> */}
          <button onClick={handleSubmit}>submit</button>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </form>
      </Modal>
    </div >
  );
}

export default AddCommodity;
