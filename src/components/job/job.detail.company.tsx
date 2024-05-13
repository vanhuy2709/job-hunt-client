import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AppHeadline from "@/components/content/app.headline";
import ButtonLink from "@/components/button/button.link";
import { Typography } from "@mui/material";
import { epilogue } from "@/lib/font";

const JobDetailCompany = () => {

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      spacing={4}
      py={'72px'}>
      {/* Info */}
      <Box flex={1}>
        <Stack
          direction={'row'}
          spacing={'32px'}
          alignItems={'center'}
          mb={'32px'}
        >
          <Image
            src={'/logo/logo-website.svg'}
            alt="logo-company"
            width={58}
            height={58} />
          <Box>
            <AppHeadline text="Stripe" />
            <ButtonLink>Read more about Stripe</ButtonLink>
          </Box>
        </Stack>

        <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          color: '#515B6F'
        }}>
          Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
        </Typography>
      </Box>

      {/* Image */}
      <Box flex={1}>
        <Image
          src={'/sample/sample-1.jfif'}
          alt="logo-company"
          width={500}
          height={500}
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Stack>
  )
}

export default JobDetailCompany