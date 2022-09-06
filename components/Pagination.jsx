import ReactPaginate from "react-paginate";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";

function Pagination({ currentPage, getProducts, total }) {


  const handlePageClick = async(data) => {
    currentPage = data.selected + 1;
    await getProducts(currentPage)
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={<IoArrowUndoSharp />}
        nextLabel={<IoArrowRedoSharp />}
        breakLabel={"..."}
        pageCount={Math.ceil(total/5)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName="flex flex-row-reverse mt-24 mb-36"
        pageClassName=
          "border-2  p-3 mr-3 pt-2 bg-[#696774]  rounded-full h-12 w-12 cursor-pointer text-center font-bold text-xl"
        
        pageLinkClassName="text-white"
        previousClassName=
          "border p-3 rounded-full bg-[#696774] h-12 w-12 mr-3 text-center cursor-pointer  rounded-full!"
        
        previousLinkClassName="font-semiBold text-white text-2xl"
        nextClassName=
            "border p-3 rounded-full bg-[#696774]  h-12 w-12 mr-3 text-center cursor-pointer"
        
        nextLinkClassName="font-bold text-white text-2xl"
        activeClassName="bg-[#03b5cc] text-[#fff]"
        breakClassName="border-2 p-3 mr-3 pt-1 rounded-full h-12 w-12 cursor-pointer text-center font-bold text-2xl"
      />
    </div>
  );
}

export default Pagination;
