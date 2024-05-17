'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxJobLatest from "../box/box.job.latest";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  data: IJob[] | undefined;
}
const HomeLatest = (props: IProps) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { data } = props;

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
          {matches ? (<ButtonLink>Show all jobs</ButtonLink>) : (<></>)}
        </Box>

        {/* List job latest */}
        <Grid container rowSpacing={2} columnSpacing={4} mb={{ xs: '24px', md: '0' }}>
          {data && data.length > 0 && data.map(item => (
            <Grid item xs={12} md={6} key={item._id}>
              <BoxJobLatest item={item} />
            </Grid>
          ))}
        </Grid>

        {matches ? (<></>) : (<ButtonLink>Show all jobs</ButtonLink>)}

      </Container>
    </Box>
  )
}

export default HomeLatest