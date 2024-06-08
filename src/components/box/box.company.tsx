import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { clashDisplay, epilogue } from "@/lib/font";
import Link from "next/link";
import { convertSlugUrl } from "@/utils/api";

interface IProps {
  data: ICompany;
}
const BoxCompany = (props: IProps) => {
  const { data } = props;

  return (
    <Link href={`/browse-companies/${convertSlugUrl(data.name)}-${data._id}.html`} style={{ textDecoration: 'unset' }}>
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
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${data.logo}`}
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
          {data.name}
        </Typography>
        {/* <Box sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          padding: '4px 12px',
          color: '#4640DE',
          backgroundColor: '#F8F8FD',
          textAlign: 'center'
        }}>
          3 Jobs
        </Box> */}
      </Box>
    </Link>
  )
}

export default BoxCompany