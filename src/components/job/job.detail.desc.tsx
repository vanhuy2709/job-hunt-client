import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import AppHeadline from "@/components/content/app.headline";
import { epilogue } from "@/lib/font";

const JobDetailDesc = () => {

  return (
    <Stack
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={'64px'}
      justifyContent={'space-between'}
      py={'72px'}
    >
      <Stack direction={"column"} spacing={'40px'} flex={2}>
        <Box>
          <AppHeadline text="Description" />
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            mt: '1rem'
          }}>
            Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
          </Typography>
        </Box>

        <Box>
          <AppHeadline text="Responsibilities" />
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            mt: '1rem'
          }}>
            Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
          </Typography>

        </Box>
        <Box>
          <AppHeadline text="Who You Are" />
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            mt: '1rem'
          }}>
            Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
          </Typography>
        </Box>

        <Box>
          <AppHeadline text="Nice-To-Haves" />
          <Typography sx={{
            fontFamily: epilogue.style,
            lineHeight: '160%',
            mt: '1rem'
          }}>
            Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={"column"} spacing={'40px'} flex={1}
      >
        <Stack direction={'column'} spacing={'23px'}>
          <AppHeadline text="About this role" />
          <Stack direction={"row"} justifyContent={'space-between'}>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F'
            }}>
              Apply Before
            </Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              fontWeight: 600,
              color: '#25324B'
            }}>July 31, 2021</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={'space-between'}>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F'
            }}>Job Posted On</Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              fontWeight: 600,
              color: '#25324B'
            }}>July 1, 2021</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={'space-between'}>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F'
            }}>Job Type</Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              fontWeight: 600,
              color: '#25324B'
            }}>Full-Time</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={'space-between'}>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F'
            }}>Salary</Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              fontWeight: 600,
              color: '#25324B'
            }}>$75k-$85k USD</Typography>
          </Stack>
        </Stack>

        <Divider />
        <Box>
          <AppHeadline text="Categories" />
          <Stack direction={'row'} spacing={1} mt={'24px'}>
            <Chip
              label="Marketing"
              sx={{
                color: '#FFB836',
                backgroundColor: '#FDF3EB',
                fontFamily: epilogue.style,
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '160%'
              }} />
            <Chip
              label="Design"
              sx={{
                color: '#56CDAD',
                backgroundColor: '#EFFAF7',
                fontFamily: epilogue.style,
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '160%'
              }} />
          </Stack>
        </Box>

        <Divider />
        <Box>
          <AppHeadline text="Required Skills" />
          <Stack direction={'row'} spacing={1} flexWrap={"wrap"} useFlexGap mt={'15px'}>
            <Chip
              label="Project Management"
              sx={{
                color: '#4640DE',
                backgroundColor: '#F8F8FD',
                fontFamily: epilogue.style,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '160%'
              }} />
            <Chip
              label="Copywriting"
              sx={{
                color: '#4640DE',
                backgroundColor: '#F8F8FD',
                fontFamily: epilogue.style,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '160%'
              }} />
            <Chip
              label="Social Media Marketing"
              sx={{
                color: '#4640DE',
                backgroundColor: '#F8F8FD',
                fontFamily: epilogue.style,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '160%'
              }} />
            <Chip
              label="English"
              sx={{
                color: '#4640DE',
                backgroundColor: '#F8F8FD',
                fontFamily: epilogue.style,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '160%'
              }} />
            <Chip
              label="Copy Editing"
              sx={{
                color: '#4640DE',
                backgroundColor: '#F8F8FD',
                fontFamily: epilogue.style,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '160%'
              }} />
          </Stack>
        </Box>

      </Stack>
    </Stack>
  )
}

export default JobDetailDesc;