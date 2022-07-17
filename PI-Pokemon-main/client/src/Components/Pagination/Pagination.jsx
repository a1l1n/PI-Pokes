import React, { useState, useEffect } from 'react';

export default function Pagination({page, setPage, totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++){
      pageNumbers.push(i);
    } 
  
  const nextPage = () =>{
    setCurrentPage(parseInt(currentPage) + 1);
    setPage(parseInt(page) + 1);
  };

  const previousPage = () =>{
    setCurrentPage(parseInt(currentPage) - 1);
    setPage(parseInt(page) - 1)
  };
  
  const handlePages = (e) =>{
    setCurrentPage(parseInt(e.target.value));
    setPage(parseInt(e.target.value));
  };    

  return (
    <div>
      <button disabled={page === 1 || page < 1} onClick={previousPage}>
        <span>Prev</span>
      </button>

       {pageNumbers &&
        pageNumbers?.map(n => (
            <button value={n} onClick={e => handlePages(e)} key={n}>
                {n}
            </button>
        )) 
      }
 
      <button disabled={page === 4 || page > 4} onClick={nextPage}>
        <span>Next</span>
      </button>

    </div>
  )
}

/* 
[ ] Paginado para ir buscando y mostrando los siguientes pokemons, 
12 pokemons por pagina.
*/