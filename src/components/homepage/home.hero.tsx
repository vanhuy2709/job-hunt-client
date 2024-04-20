import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { clashDisplay, epilogue } from "@/lib/font";

import Image from "next/image";
import ButtonStyle from "../button/button.style";

const HomeHero = () => {
  return (
    <Box pt={'82px'} pb={'103px'} bgcolor={'#F8F8FD'}>
      <Container maxWidth={'xl'}>
        {/* Hero Title */}
        <Box mb={'23px'}>
          <Typography sx={{
            fontFamily: clashDisplay.style,
            fontSize: { xs: '40px', sm: '50px', md: '65px', lg: '72px' },
            lineHeight: '110%',
            color: '#25324B'
          }}>
            Discover
            <br />
            more than
            <br />
            <span style={{ color: '#26A4FF' }}>5000+ Jobs</span>
          </Typography>
          <Box sx={{
            position: 'relative',
            width: { xs: '250px', sm: '300px', md: '400px', lg: '455px' },
            height: '32px'
          }}>
            <Image
              src={'/icons/line-vector.svg'}
              alt="line-vector"
              fill
              sizes="100%"
            />
          </Box>
        </Box>

        {/* Hero Desc */}
        <Typography sx={{
          fontFamily: epilogue.style,
          fontSize: { xs: '14px', sm: '16px', md: '20px' },
          lineHeight: '160%',
          opacity: 0.7,
          mb: '23px'
        }}>
          Great platform for the job seeker that searching for<br /> new career heights and passionate about startups.
        </Typography>

        <Box
          p={'16px'}
          display={'flex'}
          gap={2}
          mb={'16px'}
          boxShadow={5}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            maxWidth: { md: 'fit-content' }
          }}
        >
          {/* Input Job */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mx: { xs: 1, sm: 2 } }} />
            <TextField label="Job title or keyword" variant="standard"
              sx={{
                width: '100%'
              }} />
          </Box>

          {/* Input Location */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mx: { xs: 1, sm: 2 } }} />
            <TextField label="Location" variant="standard"
              sx={{
                width: '100%'
              }} />
          </Box>

          {/* Submit Search */}
          <ButtonStyle>Search my job</ButtonStyle>
        </Box>

        <Typography sx={{
          opacity: 0.7,
          fontFamily: epilogue.style,
          fontWeight: 500,
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          lineHeight: '160%',
        }}>
          Popular :<br />UI Designer, UX Researcher, Android, Admin
        </Typography>
      </Container>
    </Box >
  )
}

export default HomeHero