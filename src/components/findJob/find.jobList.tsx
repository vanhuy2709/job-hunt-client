'use client';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { epilogue } from "@/lib/font";
import useMediaQuery from '@mui/material/useMediaQuery';
import FilterListIcon from '@mui/icons-material/FilterList';

import FilterTypeEmployment from "../filter/filter.type.employment";
import FilterCategory from "../filter/filter.category";
import FilterLevel from "../filter/filter.level";
import FilterSalary from "../filter/filter.salary";
import AppHeadline from "../content/app.headline";
import BoxJob from "../box/box.job";

const FindJobList = () => {

  const matches = useMediaQuery('(min-width:900px)');

  return (
    <Container maxWidth='xl'>
      <Box py={'72px'}>

        {/* Grid Template */}
        <Grid container spacing={'40px'}>
          {matches ?
            (<Grid item md={2}
              sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
            >
              <FilterTypeEmployment />
              <FilterCategory />
              <FilterLevel />
              <FilterSalary />
            </Grid>)
            :
            (<Grid item xs={12}>
              <Button
                startIcon={<FilterListIcon />}
                color="inherit"
                variant="outlined"
                sx={{ width: '100%', py: '1rem' }}>
                More Filter
              </Button>
            </Grid>)}

          <Grid item md={10} xs={12}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'32px'}>
              <Box>
                <AppHeadline text="All Jobs" />
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#7C8493'
                }}>
                  Showing 73 results
                </Typography>
              </Box>

              <Box>
                <Typography>Sort by: </Typography>
              </Box>
            </Box>

            {/* List Jobs */}
            <Box display={'flex'} gap={'16px'} flexDirection={'column'}>
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
              <BoxJob />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default FindJobList