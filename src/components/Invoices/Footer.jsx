import React from "react";
import { Container, Form } from "react-bootstrap";
import TablePagination from "./TablePagination";

const Footer = ({ pages, pageIndex, setPageIndex, setPageCount }) => {
  return (
    <Container className="d-flex flex-column flex-lg-row row">
      <div className="mx-auto position-lg-absolute bottom-0 start-0 end-0 col-12">
        <TablePagination
          count={pages.length}
          active={pageIndex + 1}
          setPageIndex={setPageIndex}
        />
      </div>

      <Form.Group
        className="text-center col-12 col-lg-3 d-lg-flex row-count-container"
        controlId="table-row-count"
      >
        <Form.Label>Rows per page:</Form.Label>
        <Form.Select
          aria-label="table-row-count row-count-select"
          onChange={setPageCount}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Form.Select>
      </Form.Group>
    </Container>
  );
};

export default Footer;
