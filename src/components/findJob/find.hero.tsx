'use client'
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import LocationOn from "@mui/icons-material/LocationOn";

import AppTextHeading from "../content/app.text.heading";
import AppSubtitle from "../content/app.subtitle";
import { epilogue } from "@/lib/font";
import { useSearchParams } from "next/navigation";
import { ButtonStyle } from "@/styles/ButtonStyle";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface IProps {
  data: ILocation[] | undefined;
}

const FindJobHero = (props: IProps) => {

  const { data: listLocation } = props;

  const router = useRouter();
  const searchParams = useSearchParams();
  // const [listLocation, setListLocation] = useState<Array<ILocation>>([]);

  const [skill, setSkill] = useState<string | null>('');
  const [location, setLocation] = useState<string | null>('');

  // Get data from query string
  useEffect(() => {
    const paramSkill = searchParams.get('skill');
    const paramLocation = searchParams.get('location');

    setSkill(paramSkill === null ? '' : paramSkill);
    setLocation(paramLocation === null ? '' : paramLocation);
  }, [searchParams])

  // Handle Search skill & location
  const handleSearch = () => {

    const objSearch = {} as any;
    
    if (skill && skill.trim()) {
      objSearch.skill = skill.trim();
    }

    if (location) {
      objSearch.location = location;
    }

    const urlParams = new URLSearchParams(objSearch);
    router.push(`/find-job?${urlParams.toString()}`)
  }

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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </Box>

          {/* Input 2 */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              flex: 1,
            }}
          >
            <LocationOn sx={{ mx: { xs: 1, sm: 2 }, my: 0.5 }} />
            <FormControl fullWidth variant="standard">
              <InputLabel>Location</InputLabel>
              <Select
                defaultValue={""}
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {listLocation && 
                listLocation.length > 0 && 
                listLocation.map(item => (
                  <MenuItem key={item._id} 
                    value={item.name}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <ButtonStyle onClick={() => handleSearch()}>
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