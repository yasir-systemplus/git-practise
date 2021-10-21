import React, { useState } from "react";
import Table from "./Table";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import Row from "./Row";
import * as data from "../shared/posts";
import Pagination from "./Pagination";

export default function Posts() {
  const [posts] = useState(data.posts);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <>
      <Table>
        <Row>
          <TableHeading>Title</TableHeading>
          <TableHeading>Description</TableHeading>
        </Row>
        {posts.map((p) => {
          return (
            <Row>
              <TableData>{p.title}</TableData>
              <TableData>{p.body}</TableData>
            </Row>
          );
        })}
      </Table>
      <Pagination
        currentPage={currentPage}
        items={posts.length}
        onPageChange={(page) => console.log(page)}
        pageSize={pageSize}
      />
    </>
  );
}
