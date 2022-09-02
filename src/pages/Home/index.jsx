import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import EmployeeDetails from "../../components/EmployeeDetails";
import { FormSingUp } from "../../components/FormSingUp";
import { api } from "../../services/api";

const columns = [
  {
    field: "name",
    headerName: "Nome",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Telefone",
    width: 150,
  },
  {
    field: "salary",
    headerName: "Salário",
    width: 130,
  },
  {
    field: "created_at",
    headerName: "Data da contratação",
    width: 200,
  },
];

export function Home() {
  const [employees, setEmployees] = useState([]);

  const [openEmployeesDetail, setOpenEmployeesDetail] = useState(false);
  const handleOpenEmployeesDetail = () => setOpenEmployeesDetail(true);
  const handleCloseEmployeesDetail = () => setOpenEmployeesDetail(false);

  const [openSingUp, setOpenSingUp] = useState(false);
  const handleOpenSingUp = () => setOpenSingUp(true);
  const handleCloseSingUp = () => setOpenSingUp(false);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  function handleShowDetails(e) {
    const employee = employees[e.id - 1];
    setSelectedEmployee(employee);
    handleOpenEmployeesDetail();
  }

  useEffect(() => {
    api.get("employees").then((response) => {
      console.log(response.data.employees);
      setEmployees(response.data.employees);
    });
  }, []);

  return (
    <>
      <Header />
      <EmployeeDetails
        employee={selectedEmployee}
        handleClose={handleCloseEmployeesDetail}
        open={openEmployeesDetail}
      />

      <Box sx={{ height: 455, width: "100%", p: 2, cursor: "pointer", display: "flex", flexDirection: 'column'}}>
        <Button 
          variant="contained" 
          endIcon={<AddIcon />} 
          onClick={handleOpenSingUp} 
          sx={{maxWidth: 320, alignSelf: 'flex-end'}}
          >
          Novo funcionário
        </Button>
        <DataGrid
          rows={employees}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          onCellClick={(e) => handleShowDetails(e)}
          sx={{mt: 2,}}
        />

        <FormSingUp handleClose={handleCloseSingUp} open={openSingUp}/>
      </Box>
    </>
  );
}
