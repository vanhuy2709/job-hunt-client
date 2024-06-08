import { epilogue } from '@/lib/font'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ButtonStyle } from '@/styles/ButtonStyle';
import Link from 'next/link';

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      mx: '8px',
      transform: 'scale(0.8)',
      color: '#CBCED4'
    }}>•</Box>
);

interface IProps {
  job: IJob;
}
const BoxJob = (props: IProps) => {

  const { job } = props;

  return (
    <Link href={`/find-job/${job.name}-${job._id}.html`} style={{ textDecoration: 'none' }}>
      <Box
        py={{ xs: '16px', md: '24px' }}
        px={{ xs: '16px', md: '40px' }}
        bgcolor={'white'}
        border={'1px solid #D6DDEB'}
        sx={{ cursor: 'pointer' }}
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'unset', sm: 'center' }}
        gap={2}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${job.company.logo}`}
            sx={{
              width: { xs: '48px', md: '64px' },
              height: { xs: '48px', md: '64px' }
            }} />

          <Box>
            <Typography sx={{
              fontFamily: epilogue.style,
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '120%',
              mb: 1,
              color: '#25324B'
            }}>
              {job.name}
            </Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F',
              mb: 1
            }}>
              {job.company.name}{bull}{job.location}
            </Typography>
            <Stack direction={"row"} spacing={1} useFlexGap flexWrap={'wrap'}>
              <Chip label='Full-Time' sx={{
                color: '#56CDAD',
                backgroundColor: '#EFFAF7',
                fontFamily: epilogue.style,
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '160%',
              }} />

              <Divider orientation="vertical" flexItem />
              {job.skills.map((skill, index) => {
                return (
                  <Chip key={skill} label={skill} sx={{
                    color: index % 2 === 0 ? '#FFB836' : '#4640DE',
                    backgroundColor: 'transparent',
                    fontFamily: epilogue.style,
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '160%',
                    border: 1
                  }} />
                )
              })}
            </Stack>
          </Box>
        </Stack>

        {/* <Box> */}
        <ButtonStyle>Apply</ButtonStyle>
        {/* </Box> */}
      </Box>
    </Link>
  )
}

export default BoxJob