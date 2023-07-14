"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./pagination.module.css";

interface PaginationProps {
  items: number;
  pageSize?: number;
  currentPage?: number;
}

export function Pagination({ items }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<Number>(1);

  const router = useRouter();

  const pageSize = 5;
  const pagesCount = Math.ceil((items / pageSize) * 2);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  const pages = Array.from({ length: pagesCount }, (_, item) => item + 1);

  return (
    <ul className="flex gap-2 mt-5">
      {pages.map((page, index) => (
        <li
          key={index}
          className={`${styles.paginationList} ${
            currentPage === index + 1 ? styles.button__active : ""
          }`}
        >
          <button
            className={styles.pagination__button}
            onClick={() => onPageChange(index + 1)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}
