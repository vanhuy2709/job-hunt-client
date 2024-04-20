import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxCategory from "../box/box.category";

const HomeCategory = () => {

  return (
    <Box pt={'72px'}>
      <Container maxWidth={"xl"}>

        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          mb={'48px'}
        >
          <AppTitle subTitle="Explore by" mainTitle="category" />
          <ButtonLink>Show all jobs</ButtonLink>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCategory />
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

export default HomeCategory