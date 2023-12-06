import React, { useContext } from "react";
import { Alldata } from "../Context/Context";
import paginationstyle from "./Pagination.module.css";

function Pagination() {
  const { pagenumbers, setcurrentPage } = useContext(Alldata);

  const paginate = (pagenumbers) => {
    setcurrentPage(pagenumbers);
  };

  return (
    <nav className={paginationstyle.nav}>
      <ul className="pagination">
        {pagenumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                style={{ color: "black" }}
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
