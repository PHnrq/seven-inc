import { Grid, Stack, Box } from "@mui/material";
import EmployeeCard from "./EmployeeCard";
import Header from "./Header";

export function Home(){
  return (
    <Box sx={{ width: '100%'}}>
      <Header />
      <Box sx={{ flexGrow: 1, width: '100%',maxWidth: 1200, mx: "auto", py: 6}}>
        <Grid  container spacing={6}>
          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>
          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>
          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>

          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>
          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>
          <Grid item xs={4}>
            <EmployeeCard />
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}