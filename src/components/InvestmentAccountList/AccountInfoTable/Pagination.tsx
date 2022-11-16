import React from "react";
interface Props {
  pageOptions: number[];
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
  previousPage: () => void;
  nextPage: () => void;
  state: { pageIndex: number; pageSize:number };
}

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  state: { pageIndex, pageSize },
}: Props) => {
  const pageButtons = [...Array(10)].map((num, idx) => {
    const page = Math.floor(pageIndex / 10) * 10 + idx + 1;
    return (
      <li
        key={page}
        style={{
          fontWeight: page === pageIndex + 1 ? "bolder" : "",
          display: `${page <= pageOptions.length ? "inline-block" : "none"}`,
        }}
        onClick={() => {
          gotoPage(page - 1);
        }}
      >
        {page}
      </li>
    );
  });
  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </button>{" "}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </button>{" "}
      {pageButtons}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </button>{" "}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
    </div>
  );
};

export default Pagination;
