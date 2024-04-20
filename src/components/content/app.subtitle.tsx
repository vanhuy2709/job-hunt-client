import Typography from "@mui/material/Typography";
import { epilogue } from "@/lib/font";

interface IProps {
  text: string
}
const AppSubtitle = (props: IProps) => {
  const { text } = props;

  return (
    <Typography sx={{
      color: '#515B6F',
      fontFamily: epilogue.style,
      fontSize: '18px',
      lineHeight: '160%',
      marginBottom: '40px',
      textAlign: 'center'
    }}>
      {text}
    </Typography>
  )
}

export default AppSubtitle