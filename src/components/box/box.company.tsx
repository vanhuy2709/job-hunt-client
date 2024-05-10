import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { clashDisplay, epilogue } from "@/lib/font";

const BoxCompany = () => {

  return (

    <Box
      sx={{
        border: '1px solid #D6DDEB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: '24px',
        cursor: 'pointer'
      }}
    >
      <Image
        src={'/logo/logo-website.svg'}
        alt='logo-website'
        width={88}
        height={88}
        style={{ marginBottom: "30px" }}
      />
      <Typography sx={{
        fontFamily: clashDisplay.style,
        textAlign: 'center',
        color: '#25324B',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '120%',
        mb: '1rem'
      }}>
        Pentagram
      </Typography>
      <Box sx={{
        fontFamily: epilogue.style,
        lineHeight: '160%',
        padding: '4px 12px',
        color: '#4640DE',
        backgroundColor: '#F8F8FD',
        textAlign: 'center'
      }}>
        3 Jobs
      </Box>
    </Box>
  )
}

export default BoxCompany