'use client'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { redHatDisplay, epilogue } from "@/lib/font";
import { useRouter } from "next/navigation";
import ButtonStyle from "../button/button.style";

const aboutMenu = ['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'];
const resourceMenu = ['Help Docs', 'Guide', 'Updates', 'Contact Us'];

const AppFooter = () => {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: '#202430', pt: '64px', pb: '44px' }}>

      <Container maxWidth={"xl"}>

        <Box
          display={'flex'}
          justifyContent={"space-between"}
          gap={'5rem'}
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
          <Box display={'flex'} gap={'93px'}>
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

            <Box display={'flex'} gap={'8px'}>
              <TextField variant="outlined" placeholder="Email Address" style={{
                backgroundColor: 'white'
              }} />
              <ButtonStyle>Subcribe</ButtonStyle>
            </Box>
          </Box>

        </Box>
      </Container>

    </Box>
  )
}

export default AppFooter