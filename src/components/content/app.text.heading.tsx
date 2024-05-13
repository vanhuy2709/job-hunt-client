import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { clashDisplay } from "@/lib/font";
import Image from "next/image";

interface IProps {
  mainText: string,
  subText: string
}

const AppTextHeading = (props: IProps) => {

  const { mainText, subText } = props;

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      alignItems={{ xs: 'center', sm: 'center', md: 'baseline' }}
      gap={2}
      mb={'24px'}
    >
      <Typography variant="h2" sx={{
        fontFamily: clashDisplay.style,
        fontSize: '48px',
        lineHeight: '110%',
        color: '#25324B'
      }}
      >
        {subText}{' '}
      </Typography>

      <Box textAlign={'center'}>
        <Typography variant="h2" sx={{
          fontFamily: clashDisplay.style,
          fontSize: '48px',
          lineHeight: '110%',
          color: '#26A4FF',
        }}>
          {mainText}
        </Typography>
        <Image
          src={'/icons/line-vector.svg'}
          alt="line-vector"
          width={241}
          height={14}
        />
      </Box>
    </Box>
  )
}

export default AppTextHeading