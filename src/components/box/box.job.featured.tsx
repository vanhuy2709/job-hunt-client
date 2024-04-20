import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { epilogue } from "@/lib/font";

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

const BoxJobFeatured = () => {

  return (
    <Box sx={{
      p: '24px',
      border: 1,
      cursor: 'pointer',
      borderColor: '#D6DDEB',
    }}>

      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={'1rem'}
      >
        <Avatar src="/logo/logo-website.svg" />
        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          color: '#4640DE',
          border: 1,
          px: '12px',
          py: '4px'
        }}>
          Full Time
        </Typography>
      </Box>

      <Box mb={'1rem'}>
        <Typography sx={{
          fontFamily: epilogue.style,
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '160%'
        }}>
          Email Marketing
        </Typography>

        <Typography>Revolut{bull}Madrid, Spain</Typography>
      </Box>

      <Typography sx={{
        fontFamily: epilogue.style,
        lineHeight: '160%',
        mb: '1rem',
        color: '#7C8493'
      }}>
        Revolut is looking for Email Marketing to help team ma ...
      </Typography>

      <Stack direction={'row'} spacing={1}>
        <Chip
          label='Marketing' sx={{
            color: '#FFB836',
            backgroundColor: '#FDF3EB',
            fontFamily: epilogue.style,
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '160%'
          }} />
        <Chip
          label='Design' sx={{
            color: '#56CDAD',
            backgroundColor: '#EFFAF7',
            fontFamily: epilogue.style,
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '160%'
          }} />
      </Stack>
    </Box>
  )
}

export default BoxJobFeatured