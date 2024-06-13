'use client'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import AppTextHeading from "../content/app.text.heading";
import AppSubtitle from "../content/app.subtitle";
import { epilogue } from "@/lib/font";
import { useSearchParams } from "next/navigation";
import { ButtonStyle } from "@/styles/ButtonStyle";
import { useEffect, useState } from "react";

const FindJobHero = () => {
  // const matches = useMediaQuery('(min-width:600px)');
  const searchParams = useSearchParams();
  const [skill, setSkill] = useState<string | null>('');

  useEffect(() => {
    const skill = searchParams.get('skill');

    setSkill(searchParams.get('skill') === null ? '' : skill);
  }, [])

  return (
    <Box bgcolor={'#F8F8FD'} py={'65px'}>
      <Container maxWidth={"xl"}>
        <AppTextHeading subText="Find your" mainText="dream job" />
        <AppSubtitle text="Find your next career at companies like HubSpot, Nike, and Dropbox" />

        <Box
          bgcolor={'white'}
          p={'24px'}
          boxShadow={2}
          display={'flex'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={'20px'}
          mb={'16px'}
        >

          {/* Input 1 */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              flex: 1,
            }}
          >
            <SearchIcon sx={{ mx: { xs: 1, sm: 2 }, my: 0.5 }} />
            <TextField
              label="Enter keyword skills"
              variant="standard"
              fullWidth
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </Box>

          <ButtonStyle onClick={() => console.log('Hello world')}>
            Search
          </ButtonStyle>
        </Box>

        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          opacity: 0.7
        }}>
          Popular : UI Designer, UX Researcher, Android, Admin
        </Typography>
      </Container>
    </Box>
  )
}

export default FindJobHero;