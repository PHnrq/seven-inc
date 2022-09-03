import { useState } from "react";

import { api } from "../../services/api";
import {validationSchema} from '../../utils/validationSchema';

import { useFormik } from "formik";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export function FormSingUp({ handleClose, open, handleRequestEmployeesData, employee, handleCloseDetails}) {
  const [birthDate, setBirthDate] = useState(null);
  const [createAt, setCreateAt] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: employee? employee.name : '',
      document: employee ? employee.document :"",
      email: employee? employee.email: "",
      phone: employee? employee.phone:"",
      birth_date: employee? employee.birth_date : "",
      salary: employee? employee.salary : "",
      created_at: employee? employee.created_at : ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        if(employee){
          api.put(`employee/${employee.id}`, values);

          handleRequestEmployeesData()
          handleClose()
          handleCloseDetails()
        }else{
          api.post("employee", values);
          handleRequestEmployeesData()
          handleClose()
        }
        values.name= ""
        values.document= ""
        values.email= ""
        values.phone= ""
        setBirthDate(null)
        values.salary= ""
        setCreateAt(null)
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ backgroundColor: "white", py: 3, px: 2, borderRadius: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: 370,
              }}
            >
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                required
                fullWidth
                id="document"
                name="document"
                label="CPF"
                value={formik.values.document}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.document)}
                helperText={formik.touched.email && formik.errors.document}
              />

              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                required
                fullWidth
                id="phone"
                name="phone"
                label="Telefone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />

              <DatePicker
                required
                inputFormat="DD/MM/YYYY"
                label="Data de nascimento"
                value={formik.values.birth_date = birthDate}
                onChange={(newValue) => {
                  setBirthDate(newValue);
                }}
                // error={formik.touched.birth_date && Boolean(formik.errors.birth_date)}
                // helperText={formik.touched.birth_date && formik.errors.birth_date}
                renderInput={(params) => <TextField {...params} />}
              />

              <TextField
                required
                fullWidth
                id="salary"
                name="salary"
                label="Salário"
                value={formik.values.salary}
                onChange={formik.handleChange}
                error={formik.touched.salary && Boolean(formik.errors.salary)}
                helperText={formik.touched.salary && formik.errors.salary}
              />

              <DatePicker
                required
                inputFormat="DD/MM/YYYY"
                label="Data da contratação"
                value={formik.values.created_at = createAt}
                onChange={(newValue) => {
                  setCreateAt(newValue);
                }}
                // error={formik.touched.created_at && Boolean(formik.errors.created_at)}
                // helperText={formik.touched.created_at && formik.errors.created_at}
                renderInput={(params) => <TextField {...params} />}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </LocalizationProvider>
      </Box>
    </Modal>
  );
}
