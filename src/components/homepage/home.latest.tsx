import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxJobLatest from "../box/box.job.latest";

const HomeLatest = () => {
  return (
    <Box pt={'72px'} pb={'60px'} bgcolor={'#F8F8FD'}>
      <Container maxWidth={"xl"}>

        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          mb={'48px'}
        >
          <AppTitle subTitle="Latest" mainTitle="jobs open" />
          <ButtonLink>Show all jobs</ButtonLink>
        </Box>

        {/* List job latest */}
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
          <Grid item xs={12} md={6}>
            <BoxJobLatest />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeLatest