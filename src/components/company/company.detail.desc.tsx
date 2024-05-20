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

interface IProps {
  description: string | undefined;
  address: string | undefined;
}
const CompanyDetailDesc = (props: IProps) => {

  const { address, description } = props;

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
              <div dangerouslySetInnerHTML={{ __html: description ? description : '' }}>
              </div>
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
            }}>{address}</Typography>
          </Box>
        </Stack>

      </Stack>
    </>
  )
}

export default CompanyDetailDesc