"use client";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { DataTable } from "datatable-hrnet-nathan-hallouin";
import { getData } from "@/app/store/selector";
import { IEmployee } from "../../types";
import { useEffect, useState } from "react";

export default function Employees() {
  const dataEmployees = useSelector(getData);

  const customColumnOrder = [
    "firstName",
    "lastName",
    "startDate",
    "department",
    "dateOfBirth",
    "street",
    "city",
    "state",
    "zipCode",
  ];

  const customColumnTitle = [
    "First Name",
    "Last Name",
    "Start Date",
    "Department",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DataTable<IEmployee>
        data={dataEmployees.data}
        title="Current Employees"
        columnOrder={customColumnOrder}
        columnTitle={customColumnTitle}
        styleDataTable={DataTableStyle}
        styleToolsBar={ToolsBar}
        styleTableContainer={TableContainer}
        styleTable={Table}
        styleThead={Thead}
        styleTbody={Tbody}
        styleTr={TableRow}
        entries={true}
        styleEntries={Entries}
        styleEntriesFooter={EntriesFooter}
        stylePrevNext={BtnPrevNext}
        stylePage={BtnPage}
        sort={true}
        searchBar={true}
      />
    </>
  );
}

const DataTableStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ToolsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;

const TableContainer = styled.div`
  overflow: scroll;
  border-radius: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  min-width: 700px;
  border-radius: 15px;
`;

const Thead = styled.thead`
  font-size: 14px;
  background-color: orange;
`;

const Tbody = styled.tbody`
  font-size: 12px;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }

  &:nth-child(even) {
    background-color: #fbfbfb;
  }

  &:hover {
    background-color: #dfdfdf;
  }
`;

const Entries = styled.div`
  display: flex;
  gap: 8px;
`;

const EntriesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;

  & div {
    display: flex;
    gap: 8px;

    & p {
      font-style: italic;
      color: #dfdfdf;
    }
  }
`;

const BtnPrevNext = styled.button`
  cursor: pointer;
  border: none;
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnPage = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  border: 1.5px solid #12002b;
  border-radius: 6px;
`;
