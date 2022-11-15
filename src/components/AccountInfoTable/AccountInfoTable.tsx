import React from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
  UsePaginationInstanceProps,
} from "react-table";
import AccountFilter from "./AccountFilter";
import AccountSearch from "./AccountSearch";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { matchSorterFn } from "../InvestmentAccountList/utils/filtering";
import Pagination from "./Pagination";
import PageButtons from "./PageButtons";

const AccountInfoTable = ({ columns, data }) => {
  // filtering 기능 구현.
  // pagination 구현
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <>
      <AccountSearch onSubmit={setGlobalFilter} />
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          state={{ pageIndex: pageIndex, pageSize: pageSize }}/>
      </TableContainer>
    </>
  );
};

export default AccountInfoTable;
