'use client'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxJobFeatured from "../box/box.job.featured";
import useMediaQuery from '@mui/material/useMediaQuery';

interface IProps {
  data: IJob[] | undefined;
}
const HomeFeatured = (props: IProps) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { data } = props;

  return (
    <Box my={'72px'}>
      <Container maxWidth={"xl"}>

        {/* Title */}
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          mb={'48px'}
        >
          <AppTitle subTitle="Featured" mainTitle="jobs" />
          {matches ? (<ButtonLink path="/find-job">Show all jobs</ButtonLink>) : (<></>)}
        </Box>

        {/* List jobs featured */}
        <Grid container spacing={2} mb={{ xs: '24px', md: '0' }}>
          {data && data.length > 0 && data.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <BoxJobFeatured item={item} />
            </Grid>
          ))}
        </Grid>

        {matches ? (<></>) : (<ButtonLink path="/find-job">Show all jobs</ButtonLink>)}

      </Container>
    </Box>
  )
}

export default HomeFeatured