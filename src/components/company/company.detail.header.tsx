'use client'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import FactoryIcon from '@mui/icons-material/Factory';
import { clashDisplay, epilogue } from "@/lib/font";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

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
          <Link href={'https://stripe.com'} style={{ textDecoration: 'none' }}>
            <Typography sx={{
              fontFamily: epilogue.style,
              fontWeight: 600,
              lineHeight: '160%',
              mb: '24px'
            }}>
              https://stripe.com
            </Typography>
          </Link>

          <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={5} alignItems={{ xs: 'unset', md: 'center' }}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <WhatshotIcon sx={{ fontSize: '50px', backgroundColor: 'white', padding: '10px', borderRadius: '100%', color: '#26A4FF' }} />
              <Box>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#515B6F'
                }}>Founded</Typography>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 600,
                  lineHeight: '160%',
                  color: '#25324B'
                }}>July 31, 2011</Typography>
              </Box>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <GroupIcon sx={{ fontSize: '50px', backgroundColor: 'white', padding: '10px', borderRadius: '100%', color: '#26A4FF' }} />
              <Box>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#515B6F'
                }}>Employees</Typography>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 600,
                  lineHeight: '160%',
                  color: '#25324B'
                }}>4000+</Typography>
              </Box>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <PlaceIcon sx={{ fontSize: '50px', backgroundColor: 'white', padding: '10px', borderRadius: '100%', color: '#26A4FF' }} />
              <Box>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#515B6F'
                }}>Location</Typography>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 600,
                  lineHeight: '160%',
                  color: '#25324B'
                }}>20 countries</Typography>
              </Box>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FactoryIcon sx={{ fontSize: '50px', backgroundColor: 'white', padding: '10px', borderRadius: '100%', color: '#26A4FF' }} />
              <Box>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  lineHeight: '160%',
                  color: '#515B6F'
                }}>Industry</Typography>
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 600,
                  lineHeight: '160%',
                  color: '#25324B'
                }}>Payment Gateway</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}

export default CompanyDetailHeader