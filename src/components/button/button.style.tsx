import Button from "@mui/material/Button";
import { epilogue } from "@/lib/font";

interface IProps {
  children: React.ReactNode;
  outlined?: boolean
}

const ButtonStyle = (props: IProps) => {
  const { children, outlined } = props;

  return (
    <Button sx={{
      backgroundColor: outlined ? 'transparent' : '#4640DE',
      fontFamily: epilogue.style,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '160%',
      color: outlined ? '#4640DE' : '#FFF',
      '&:hover': {
        backgroundColor: outlined ? 'transparent' : '#6e6ae2',
      },
      borderRadius: 0,
      padding: '12px 24px',
      textTransform: 'capitalize',
      // maxWidth: 'fit-content'
    }}>
      {children}
    </Button>
  )
}

export default ButtonStyle