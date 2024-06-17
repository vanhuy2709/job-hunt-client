'use client';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import AppHeadline from "@/components/content/app.headline";
import { epilogue } from "@/lib/font";
import { formatNumberWithCommas } from "@/utils/formatNumberWithCommas";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  job: IJob | undefined;
}
const JobDetailDesc = (props: IProps) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { job } = props;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={'64px'}
      justifyContent={'space-between'}
      py={'72px'}
      px={matches ? 0 : 2}
    >
      <Stack direction={"column"} spacing={'40px'} flex={2}>
        <Box sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
        }}>
          <div dangerouslySetInnerHTML={{ __html: job?.description ?? '' }}>
          </div>
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
            }}>{job?.endDate.slice(0, 10)}</Typography>
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
            }}>{job?.startDate.slice(0, 10)}</Typography>
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
            }}>{formatNumberWithCommas(job?.salary)} VND</Typography>
          </Stack>
        </Stack>

        <Divider />

        <Box>
          <AppHeadline text="Required Skills" />
          <Stack direction={'row'} spacing={1} flexWrap={"wrap"} useFlexGap mt={'15px'}>
            {job?.skills.map(skill => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  color: '#4640DE',
                  backgroundColor: '#F8F8FD',
                  fontFamily: epilogue.style,
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '160%'
                }} />
            ))}
          </Stack>
        </Box>

      </Stack>
    </Stack>
  )
}

export default JobDetailDesc;