import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from "./Cards";
import FakeCards from "./FakeCards";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./Layout";
import { PaginationContext } from "../contexts/PaginationContext";

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [charactersPerPage, setCharactersPerPage] = useState(20);

  const [characters, setCharacters] = useState([]);

  const {state,dispatch} = useContext(PaginationContext)

  useEffect(() => {
    handlePagination(state.currentPage*charactersPerPage);
  }, []);

  const handlePagination = (offset) => {
    setLoading(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&apikey=6a85c8d6f249a662ea39e8012ee02359`
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data.results);
        setTotalCharacters(res.data.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  
  return (
    <Layout >

      <div>


      <div className="">
        <AnimatePresence>
          {loading ? <FakeCards /> : <Cards characters={characters} />}
        </AnimatePresence>
      </div>

      <div className="mt-16 mb-28">
        <ReactPaginate
          pageCount={Math.ceil(totalCharacters / charactersPerPage)}
          onPageChange={({ selected }) => {
            handlePagination(selected * charactersPerPage);
            dispatch({type:"CHANGE_CURRENT_PAGE",payload:selected})
          }}
          className={"flex flex-col gap-2 md:flex-row"}
          pageClassName={
            "max-w-[60px] inline-block border-[1px] border-slate-800 px-6 py-1 rounded-md font-semibold text-gray-800 hover:bg-slate-600/90"
          }
          previousClassName={
            "bg-slate-700 px-2 py-1 rounded-md font-semibold text-white hover:bg-slate-600/90 max-w-[90px]"
          }
          nextClassName={
            "bg-slate-700 px-2 py-1 rounded-md font-semibold text-white hover:bg-slate-600/90 max-w-[60px]"
          }
          activeClassName={"bg-slate-600/30"}
          disabledClassName={"hidden"}
        />
      </div>
      </div>
    </Layout>
  );
};

export default Characters;
