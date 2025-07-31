import { useSelector } from "react-redux";
import { DataTable } from "hrnet-datatable-styled-components";
import { getData } from "../../store";
import { IEmployee } from "../../types";
import { useEffect, useState } from "react";
import styles from "./Employees.module.css";

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

  // Create styled components using CSS classes
  const DataTableStyle = ({ children, ...props }: any) => (
    <div className={styles.dataTableStyle} {...props}>{children}</div>
  );
  
  const ToolsBar = ({ children, ...props }: any) => (
    <div className={styles.toolsBar} {...props}>{children}</div>
  );
  
  const TableContainer = ({ children, ...props }: any) => (
    <div className={styles.tableContainer} {...props}>{children}</div>
  );
  
  const Table = ({ children, ...props }: any) => (
    <table className={styles.table} {...props}>{children}</table>
  );
  
  const Thead = ({ children, ...props }: any) => (
    <thead className={styles.thead} {...props}>{children}</thead>
  );
  
  const Tbody = ({ children, ...props }: any) => (
    <tbody className={styles.tbody} {...props}>{children}</tbody>
  );
  
  const TableRow = ({ children, ...props }: any) => (
    <tr className={styles.tableRow} {...props}>{children}</tr>
  );
  
  const Entries = ({ children, ...props }: any) => (
    <div className={styles.entries} {...props}>{children}</div>
  );
  
  const EntriesFooter = ({ children, ...props }: any) => (
    <div className={styles.entriesFooter} {...props}>{children}</div>
  );
  
  const BtnPrevNext = ({ children, ...props }: any) => (
    <button className={styles.btnPrevNext} {...props}>{children}</button>
  );
  
  const BtnPage = ({ children, ...props }: any) => (
    <button className={styles.btnPage} {...props}>{children}</button>
  );

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