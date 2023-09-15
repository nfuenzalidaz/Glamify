import React from "react";
import styles from "./Pagination.module.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.pageCntnr}>
      {currentPage !== 1 && (
        <Link
          to="#"
          className={styles.Link}
          onClick={() => onPageChange(currentPage - 1)}
          title="Página anterior"
        >
          <ArrowLeftIcon />
        </Link>
      )}
      <span className={styles.pageIndicator}>
        {currentPage} de {totalPages}
      </span>
      {currentPage !== totalPages && (
        <Link
          to="#"
          className={styles.button}
          onClick={() => onPageChange(currentPage + 1)}
          title="Página siguiente"
        >
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
