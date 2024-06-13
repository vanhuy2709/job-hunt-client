'use client'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppTitle from "../content/app.title";
import ButtonLink from "../button/button.link";
import BoxCategory from "../box/box.category";
import useMediaQuery from '@mui/material/useMediaQuery';

interface IProps {
  data: ISkill[] | undefined;
}

const HomeSkill = (props: IProps) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { data } = props;

  return (
    <Box pt={'72px'}>
      <Container maxWidth={"xl"}>

        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'flex-end'}
          mb={'48px'}
        >
          <AppTitle subTitle="Explore by" mainTitle="skill" />
          {matches ? (<ButtonLink path="/find-job">Show all jobs</ButtonLink>) : (<></>)}
        </Box>

        <Grid
          container
          spacing={{ xs: '16px', md: '32px' }}
          mb={{ xs: '24px', md: '0' }}
        >
          {data && data?.length > 0 && data?.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <BoxCategory item={item} />
            </Grid>
          ))}
        </Grid>

        {matches ? (<></>) : (<ButtonLink path="/find-job">Show all jobs</ButtonLink>)}

      </Container>
    </Box>
  )
}

export default HomeSkill