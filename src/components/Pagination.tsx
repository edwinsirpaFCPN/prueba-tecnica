import React from "react";

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ page, setPage }) => {
  return (
    <div className="pagina-content">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span>{`Pagina ${page}`}</span>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
};

export default Pagination;
