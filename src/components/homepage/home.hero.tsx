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
            fontSize: '72px',
            lineHeight: '110%',
            color: '#25324B'
          }}>
            Discover
            <br />
            more than
            <br />
            <span style={{ color: '#26A4FF' }}>5000+ Jobs</span>
          </Typography>
          <Image src={'/icons/line-vector.svg'} alt="" width={455} height={32} />
        </Box>

        {/* Hero Desc */}
        <Typography sx={{
          fontFamily: epilogue.style,
          fontSize: '20px',
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
          maxWidth={'fit-content'}
          boxShadow={5}
        >

          {/* Input Job */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ mx: 2 }} />
            <TextField label="Job title or keyword" variant="standard" />
          </Box>

          {/* Input Location */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ mx: 2 }} />
            <TextField label="Location" variant="standard" />
          </Box>

          {/* Submit Search */}
          <ButtonStyle>Search my job</ButtonStyle>
        </Box>

        <Typography sx={{
          opacity: 0.7,
          fontFamily: epilogue.style,
          fontWeight: 500,
          lineHeight: '160%',
        }}>
          Popular : UI Designer, UX Researcher, Android, Admin
        </Typography>
      </Container>
    </Box >
  )
}

export default HomeHero