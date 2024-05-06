'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FilterTypeEmployment from "../filter/filter.type.employment";

const FindJobList = () => {

  return (
    <Container maxWidth='xl'>
      <Box py={'72px'}>

        {/* Grid Template */}
        <Grid container spacing={2}>
          <Grid item md={2}>
            <FilterTypeEmployment />
          </Grid>

          <Grid item md={10}>
            List jobs
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default FindJobList