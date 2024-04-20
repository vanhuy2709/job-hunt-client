import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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


const BoxJobLatest = () => {

  return (
    <Box py={'24px'} px={'40px'} bgcolor={'white'}>
      <Stack direction={"row"} spacing={3}>
        <Avatar src="/logo/logo-website.svg" />

        <Box>
          <Typography>Social Media Assistant</Typography>
          <Typography>Nomad{bull}Paris, France</Typography>
          <Stack direction={"row"} spacing={2}>
            <Chip label='Full-Time' />
            <Divider orientation="vertical" flexItem />
            <Chip label="Marketing" />
            <Chip label="Design" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default BoxJobLatest