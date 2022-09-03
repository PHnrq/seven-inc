import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {columns} from '../../utils/columnsDataGridConfig'
import {formatEmployeeInfo} from '../../utils/maskTemplates'

import Header from "../../components/Header";
import EmployeeDetails from "../../components/EmployeeDetails";
import { FormSingUp } from "../../components/FormSingUp";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";


export function Home() {
  const [employees, setEmployees] = useState([]);
  
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [openEmployeesDetail, setOpenEmployeesDetail] = useState(false);
  const handleOpenEmployeesDetail = () => setOpenEmployeesDetail(true);
  const handleCloseEmployeesDetail = () => setOpenEmployeesDetail(false);

  const [openSingUp, setOpenSingUp] = useState(false);
  const handleOpenSingUp = () => setOpenSingUp(true);
  const handleCloseSingUp = () => setOpenSingUp(false);


  function handleShowDetails(e) {
    const employee = employees[e.id - 1];
    setSelectedEmployee(employee);
    handleOpenEmployeesDetail();
  }

  async function handleRequestEmployeesData(){
    const response = await api.get("/employee")
    const data = response.data
    formatEmployeeInfo(data)

    setEmployees(data)
  }

  useEffect(() => {
    handleRequestEmployeesData();
  },[])

  return (
    <>
      <Header />
      <EmployeeDetails
        employee={selectedEmployee}
        handleClose={handleCloseEmployeesDetail}
        open={openEmployeesDetail}
        handleRequestEmployeesData={handleRequestEmployeesData}
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

        <FormSingUp handleClose={handleCloseSingUp} open={openSingUp} handleRequestEmployeesData={handleRequestEmployeesData}/>
      </Box>
    </>
  );
}
