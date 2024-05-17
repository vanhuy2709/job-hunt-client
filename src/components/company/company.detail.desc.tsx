import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppHeadline from "../content/app.headline";
import { epilogue } from "@/lib/font";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

const CompanyDetailDesc = () => {

  return (
    <>
      <Stack direction={'row'} spacing={8}>
        <Stack direction={'column'} spacing={3} flex={1.7}>
          <Box>
            <AppHeadline text="Company Profile" />
            <Typography sx={{
              fontFamily: epilogue.style,
              color: '#515B6F',
              lineHeight: '160%',
              mt: '16px'
            }}>
              Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
            </Typography>
          </Box>

          <Box>
            <AppHeadline text="Contact" />
            <Stack direction={'row'} flexWrap={'wrap'} spacing={2} mt={'16px'}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid #4640DE',
                padding: '8px',
                cursor: 'pointer'
              }}>
                <TwitterIcon sx={{ color: '#4640DE' }} />
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 500,
                  lineHeight: '160%',
                  color: '#4640DE'
                }}>twitter.com/stripe</Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid #4640DE',
                padding: '8px',
                cursor: 'pointer'
              }}>
                <FacebookIcon sx={{ color: '#4640DE' }} />
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 500,
                  lineHeight: '160%',
                  color: '#4640DE'
                }}>facebook.com/StripeHQ</Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid #4640DE',
                padding: '8px',
                cursor: 'pointer'
              }}>
                <LinkedInIcon sx={{ color: '#4640DE' }} />
                <Typography sx={{
                  fontFamily: epilogue.style,
                  fontWeight: 500,
                  lineHeight: '160%',
                  color: '#4640DE'
                }}>linkedin.com/company/stripe</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack direction={'column'} spacing={5} flex={1}>
          <Box>
            <AppHeadline text="Office Location" />
            <Typography sx={{
              fontFamily: epilogue.style,
              color: '#515B6F',
              lineHeight: '160%',
              mt: '16px'
            }}>Stripe offices spread across 20 countries</Typography>
          </Box>
        </Stack>

      </Stack>
    </>
  )
}

export default CompanyDetailDesc