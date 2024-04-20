import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxJobFeatured from "../box/box.job.featured";

const HomeFeatured = () => {
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
          <ButtonLink>Show all jobs</ButtonLink>
        </Box>

        {/* List jobs featured */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxJobFeatured />
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

export default HomeFeatured