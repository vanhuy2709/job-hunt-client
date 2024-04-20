import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
        <Box>
          <BoxJobLatest />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeLatest