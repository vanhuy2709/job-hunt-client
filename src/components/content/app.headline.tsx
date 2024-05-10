import { clashDisplay } from "@/lib/font";
import Typography from "@mui/material/Typography"

interface IProps {
  text: string;
}

const AppHeadline = (props: IProps) => {

  const { text } = props;

  return (
    <Typography
      fontSize={32}
      fontWeight={600}
      lineHeight={"120%"}
      sx={{ fontFamily: clashDisplay.style }}
    >
      {text}
    </Typography>
  )
}

export default AppHeadline