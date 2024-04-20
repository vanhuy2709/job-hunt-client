import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { clashDisplay } from "@/lib/font";

const BoxCategory = () => {
  return (
    <Box sx={{
      p: '32px',
      border: 1,
      cursor: 'pointer',
      borderColor: '#D6DDEB',
      transition: 'all 0.3s ease',
      "&:hover": {
        backgroundColor: '#4640DE',
        color: 'white'
      },
      "&:hover .icon": {
        color: 'white'
      }
    }}>
      <DesignServicesIcon
        className="icon"
        sx={{
          mb: '32px',
          width: '48px',
          height: '48px',
          color: '#4640DE'
        }} />

      <Typography
        sx={{
          fontFamily: clashDisplay.style,
          fontSize: '24px',
          lineHeight: '120%',
          mb: '12px'
        }}>
        Design
      </Typography>

      <Box display={'flex'} alignItems={'center'} gap={2}>
        <Typography>235 jobs available</Typography>
        <ArrowForwardIcon />
      </Box>
    </Box>
  )
}

export default BoxCategory