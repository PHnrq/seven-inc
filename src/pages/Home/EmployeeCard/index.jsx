import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EmployeeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedro Silveira Almeida
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1.4}>
            Email
          </Typography>
          <Typography variant="body1" color="text.primary">
            pedro@email.com
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1.4}>
            Telefone
          </Typography>
          <Typography variant="body1" color="text.primary">
            11 98765-4321
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1.4}>
            Salário
          </Typography>
          <Typography variant="body1" color="text.primary">
            R$ 2.000,00
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1.4}>
            Data da contratação
          </Typography>
          <Typography variant="body1" color="text.primary">
            01/01/2011
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
