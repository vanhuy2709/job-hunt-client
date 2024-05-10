import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import AppTextHeading from "@/components/content/app.text.heading";
import AppSubtitle from "@/components/content/app.subtitle";
import ButtonStyle from "@/components/button/button.style";
import { epilogue } from "@/lib/font";

const BrowseHero = () => {

  return (
    <Box bgcolor={'#F8F8FD'} py={'65px'}>
      <Container maxWidth={"xl"}>
        <AppTextHeading subText="Find your" mainText="dream companies" />
        <AppSubtitle text="Find your next career at companies like HubSpot, Nike, and Dropbox" />

        <Box
          bgcolor={'white'}
          p={'24px'}
          boxShadow={2}
          display={'flex'}
          gap={'20px'}
          mb={'16px'}
        >

          {/* Input 1 */}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
            <SearchIcon sx={{ mx: { xs: 1, sm: 2 }, my: 0.5 }} />
            <TextField label="Company name or keyword" variant="standard" fullWidth />
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
            <LocationOnIcon sx={{ mx: { xs: 1, sm: 2 }, my: 0.5 }} />
            <TextField label="Location" variant="standard" fullWidth />
          </Box>

          <ButtonStyle>Search</ButtonStyle>
        </Box>

        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          opacity: 0.7
        }}>
          Popular : Twitter, Microsoft, Apple, Facebook
        </Typography>
      </Container>
    </Box>
  )
}

export default BrowseHero