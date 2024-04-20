'use client'
import { redHatDisplay, epilogue } from "@/lib/font";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonStyle from "../button/button.style";

// Import MUI Lib
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const aboutMenu = ['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'];
const resourceMenu = ['Help Docs', 'Guide', 'Updates', 'Contact Us'];
const socialMenu = [
  {
    id: 1,
    icon: <FacebookIcon sx={{ color: 'white' }} />,
  },
  {
    id: 2,
    icon: <InstagramIcon sx={{ color: 'white' }} />,
  },
  {
    id: 3,
    icon: <LinkedInIcon sx={{ color: 'white' }} />,
  },
  {
    id: 4,
    icon: <TwitterIcon sx={{ color: 'white' }} />,
  },
]

const AppFooter = () => {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: '#202430', pt: '64px', pb: '44px' }}>

      <Container maxWidth={"xl"}>
        <Box
          display={'flex'}
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
          justifyContent={"space-between"}
          gap={{ xs: '1.5rem', md: '5rem' }}
        >
          {/* Left */}
          <Box>
            <Box display={'flex'} alignContent={'center'} gap={'8px'} mb={'32px'}>
              <Image src={'/logo/logo-website.svg'} alt="" width={32} height={32} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: redHatDisplay.style,
                  fontSize: '24px',
                  lineHeight: '36px',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  letterSpacing: '-0.24px',
                  cursor: 'pointer'
                }}
                onClick={() => router.push('/')}
              >
                JobHuntly
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: epilogue.style,
                lineHeight: '160%',
                color: '#D6DDEB'
              }}
            >
              Great platform for the job seeker that<br />passionate about startups. Find your dream job<br /> easier.
            </Typography>
          </Box>

          {/* Middle */}
          <Box
            display={'flex'}
            sx={{
              flexDirection: 'row'
            }}
            gap={'93px'}
          >
            <Box>

              <Typography sx={{
                fontFamily: epilogue.style,
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '160%',
                color: '#D6DDEB',
                mb: '18px'
              }}>
                About
              </Typography>

              <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                {aboutMenu.map(menu => (
                  <Typography sx={{
                    fontFamily: epilogue.style,
                    lineHeight: '160%',
                    color: '#D6DDEB'
                  }} key={menu}>{menu}</Typography>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography sx={{
                fontFamily: epilogue.style,
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '160%',
                color: '#D6DDEB',
                mb: '18px'
              }}>
                Resources
              </Typography>

              <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                {resourceMenu.map(menu => (
                  <Typography sx={{
                    fontFamily: epilogue.style,
                    lineHeight: '160%',
                    color: '#D6DDEB'
                  }} key={menu}>{menu}</Typography>
                ))}
              </Box>

            </Box>
          </Box>

          {/* Right */}
          <Box>
            <Typography sx={{
              fontFamily: epilogue.style,
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '160%',
              color: '#D6DDEB',
              mb: '18px'
            }}>
              Get job notifications
            </Typography>

            <Typography sx={{
              fontFamily: epilogue.style,
              lineHeight: '160%',
              color: '#D6DDEB',
              mb: '40px'
            }}>
              The latest job news, articles, sent to your inbox weekly.
            </Typography>

            <Box
              display={'flex'}
              gap={'8px'}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <TextField variant="outlined" placeholder="Email Address" style={{
                backgroundColor: 'white'
              }} />
              <ButtonStyle>Subcribe</ButtonStyle>
            </Box>
          </Box>

        </Box>

        <Divider sx={{ mt: '80px', mb: '42px' }} color="#363944" />

        <Box
          display={'flex'}
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={5}
        >
          <Typography
            sx={{
              fontFamily: epilogue.style,
              fontWeight: 500,
              lineHeight: '160%',
              color: '#8F9197',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >2021 @ JobHuntly. All rights reserved.</Typography>

          <Box
            display={'flex'}
            alignItems={'center'}
            gap={4}
          >
            {socialMenu.map(menu => (
              <IconButton key={menu.id} sx={{ bgcolor: '#363944' }}>
                {menu.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>

    </Box>
  )
}

export default AppFooter