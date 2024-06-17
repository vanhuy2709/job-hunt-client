'use client'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import FactoryIcon from '@mui/icons-material/Factory';
import useMediaQuery from "@mui/material/useMediaQuery";
import { clashDisplay, epilogue } from "@/lib/font";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  logo: string | undefined;
  name: string | undefined;
}
const CompanyDetailHeader = (props: IProps) => {

  const { logo, name } = props;

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: '40px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          href="/browse-companies"
        >
          Browse Companies
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={{ xs: 'unset', md: 'center' }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${logo}`}
          alt="logo-company"
          width={matches ? 172 : 100}
          height={matches ? 172 : 100}
        />

        <Box>
          <Typography sx={{
            fontFamily: clashDisplay.style,
            color: '#25324B',
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '110%',
            mb: '12px'
          }}>
            {name}
          </Typography>
        </Box>
      </Stack>

    </Box>
  )
}

export default CompanyDetailHeader