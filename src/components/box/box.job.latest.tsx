import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { epilogue } from "@/lib/font";
import Link from "next/link";

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
  item: IJob;
}
const BoxJobLatest = (props: IProps) => {
  const { item } = props;

  return (
    <Link href={`/find-job/${item._id}`} style={{ textDecoration: 'none' }}>
      <Box
        py={{ xs: '16px', md: '24px' }}
        px={{ xs: '16px', md: '40px' }}
        bgcolor={'white'}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${item.company.logo}`}
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
              {item.name}
            </Typography>
            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#515B6F',
              mb: 1
            }}>
              {item.company.name}{bull}{item.location}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Chip label='Full-Time' sx={{
                color: '#56CDAD',
                backgroundColor: '#EFFAF7',
                fontFamily: epilogue.style,
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '160%',
              }} />

              <Divider orientation="vertical" flexItem />

              {item.skills.map((skill, index) => {
                if (index < 2) {
                  return (
                    <Chip key={skill} label={skill} sx={{
                      color: '#FFB836',
                      backgroundColor: 'transparent',
                      fontFamily: epilogue.style,
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '160%',
                      border: 1
                    }} />)
                }
              })}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Link>
  )
}

export default BoxJobLatest