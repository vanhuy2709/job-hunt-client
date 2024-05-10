import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import AppHeadline from "../content/app.headline"
import { epilogue } from "@/lib/font"
import { Grid } from "@mui/material"
import BoxCompany from "../box/box.company"

const BrowseRecommend = () => {
  return (
    <Box py={'72px'}>
      <Container maxWidth='xl'>
        <AppHeadline text="Recommended Companies" />
        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          color: '#7C8493',
          mb: '32px'
        }}>
          Based on your profile, company preferences, and recent activity
        </Typography>

        {/* List Companies */}
        <Grid container spacing={'32px'}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BoxCompany />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BrowseRecommend;