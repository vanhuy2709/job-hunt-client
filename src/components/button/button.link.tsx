import Link from 'next/link'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { epilogue } from '@/lib/font'

interface IProps {
  children: React.ReactNode
}
const ButtonLink = (props: IProps) => {

  const { children } = props;

  return (
    <Link
      href={'/find-job'}
      style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <Typography sx={{
        textDecoration: 'none',
        color: '#4640DE',
        fontFamily: epilogue.style,
        fontWeight: 600,
        lineHeight: '160%'
      }}>
        {children}
      </Typography>
      <ArrowForwardIcon sx={{ color: '#4640DE' }} />
    </Link>
  )
}

export default ButtonLink