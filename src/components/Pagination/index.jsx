import styles from "./styles.module.css";
import PropTypes from 'prop-types'

const max_items = 3;
const max_left = (max_items - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
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
          className={styles.navButtonSub}
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
        </button>
      </li>
      {Array.from({ length: Math.min(max_items, pages) })
        .map((_, index) => index + first)
        .filter(page => page <= pages)
        .map((page) => (
          <li key={page}>
            <button
              className={`${styles.buttonPage} ${page === current ? styles.currentPage : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          className={styles.navButtonAdd}
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

Pagination.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  offset: PropTypes.number,
  setOffset: PropTypes.func
}