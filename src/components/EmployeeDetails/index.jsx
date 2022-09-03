import * as React from 'react';
import { api } from '../../services/api'; 

import { FormSingUp } from '../FormSingUp';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EmployeeDetails({employee, handleClose, open, handleRequestEmployeesData}) {
  const [openSingUp, setOpenSingUp] = React.useState(false);
  const handleOpenSingUp = () => setOpenSingUp(true);
  const handleCloseSingUp = () => setOpenSingUp(false);

  const handleDelete = (id) => {
    api.delete(`/employee/${id}`)
    handleRequestEmployeesData();
    handleClose();
  }

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <Card sx={{ width: 320 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" children>
            {employee.name}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            CPF
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.document}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            Email
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.email}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            Telefone
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.phone}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            Data de nascimento
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.birth_date}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            Salário
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.salary}
          </Typography>

          <Typography variant="body2" mt={2} color="text.secondary">
            Data da contratação
          </Typography>
          <Typography variant="body1" color="text.primary">
            {employee.created_at}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleOpenSingUp()}>Editar</Button>
          <Button size="small" onClick={() => handleDelete(employee.id)}>Excluir</Button>
        </CardActions>
        
        <FormSingUp handleClose={handleCloseSingUp} open={openSingUp} employee={employee} handleRequestEmployeesData={handleRequestEmployeesData} handleCloseDetails={handleClose}/>
      </Card>
  </Modal>
  );
}