import React from "react";
import styles from "./styles.module.css";

//Numero máximo de botões
const max_items = 3;
//numero de botões a esquerda
const max_left = (max_items - 1) / 2;
//limit -> numero de itens por página
//total -> numero total de itens
//offset -> numero de itens que foram pulados
//first -> primeira página que aparece a esquerda

const Pagination = ({ limit, total, offset, setOffset }) => {
  //página atual
  const current = offset ? offset / limit + 1 : 1;

  const pages = Math.ceil(total / limit);
  const first = Math.max(current - max_left, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          &lt;
        </button>
      </li>
      {Array.from({ length: Math.min(max_items, pages) })
    .map((_, index) => index + first)
    .map((page) => (
        <li key={Math.floor(Math.random() * 1000000) + 1}>
            <button className={styles.buttonPage} onClick={() => onPageChange(page)}>
                {page}
            </button>
        </li>
    ))}
      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          &gt;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
