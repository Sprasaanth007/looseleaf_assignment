import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "userId", headerName: "User ID", type: "number", width: 130 },
  { field: "id", headerName: "ID", type: "number", width: 100 },
  { field: "title", headerName: "Task", width: 350 },
  {
    field: "completed",
    headerName: "Status",
    sortable: false,
    width: 150,
  },
];

function App() {
  //State variable to store the data fetched from the api
  const [rows, setRows] = useState([]);

  //Fetching data frrom json placeholder api and storing the data into our state variable
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setRows(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <h1>Looseleaf Assignment</h1>
      <p>
        Data is being fetched from json placeholder api and is displayed in the
        table. Filtering functionality is also added. Filtering can be accessed
        by hovering over the table labels.
      </p>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default App;
