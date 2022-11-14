import React from 'react'
import {useGlobalFilter, useTable} from "react-table"
import AccountFilter from '../InvestmentAccountList/AccountFilter'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";



const AccountInfoTable = ({columns, data}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } =  useTable({columns,data}, useGlobalFilter)
  setGlobalFilter
  return (
    <>
    <TableContainer component={Paper}>
    <AccountFilter onSubmit={setGlobalFilter}/>
    <Table {...getTableProps()}>
        <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </TableContainer>
    </>
  )
}

export default AccountInfoTable


