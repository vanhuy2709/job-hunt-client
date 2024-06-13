import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { clashDisplay } from "@/lib/font";

interface IProps {
  item: ISkill;
}

const BoxCategory = (props: IProps) => {
  const { item } = props;

  return (
    <Box sx={{
      p: { xs: '16px', md: '32px' },
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
      },
      display: { xs: 'flex', sm: 'block' },
      alignItems: { xs: 'center', sm: 'stretch' },
      gap: { xs: '32px', sm: '0' }
    }}>
      <DesignServicesIcon
        className="icon"
        sx={{
          mb: { xs: '0', sm: '32px' },
          width: { xs: '40px', sm: '48px' },
          height: { xs: '40px', sm: '48px' },
          color: '#4640DE'
        }} />

      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography
          sx={{
            fontFamily: clashDisplay.style,
            fontSize: { xs: '20px', sm: '24px' },
            lineHeight: '120%',
            mb: { xs: '0', sm: '12px' }
          }}>
          {item.name}
        </Typography>

        <ArrowForwardIcon />
      </Stack>
    </Box>
  )
}

export default BoxCategory