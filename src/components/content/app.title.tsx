import Typography from "@mui/material/Typography";
import { clashDisplay } from "@/lib/font";

interface IProps {
  subTitle: string,
  mainTitle: string,
}

const AppTitle = (props: IProps) => {

  const { mainTitle, subTitle } = props;

  return (
    <Typography sx={{
      fontFamily: clashDisplay.style,
      fontSize: { xs: '32px', md: '48px' },
      lineHeight: '110%',
      color: '#25324B'
    }}>
      {subTitle} <span style={{ color: '#26A4FF' }}>{mainTitle}</span>
    </Typography>
  )
}

export default AppTitle