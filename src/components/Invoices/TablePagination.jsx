import React from "react";

import { Pagination } from "react-bootstrap";

const TablePagination = ({ count, active, setPageIndex }) => {
  let items = [];
  for (let i = 1; i <= count; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        data-index={i - 1}
        onClick={(e) => {
          const index = Number(e.target.dataset.index);
          setPageIndex(index);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-center align-content-center">
        <Pagination className="mb-0 flex-wrap d-flex justify-content-center">
          {items}
        </Pagination>
      </div>
    </>
  );
};

export default TablePagination;
