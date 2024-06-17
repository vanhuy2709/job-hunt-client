'use client'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AppHeadline from "@/components/content/app.headline";
import ButtonLink from "@/components/button/button.link";
import useMediaQuery from '@mui/material/useMediaQuery';

interface IProps {
  company: {
    _id: string,
    name: string,
    logo: string
  } | undefined
}
const JobDetailCompany = (props: IProps) => {
  const { company } = props;
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      spacing={4}
      py={'72px'}
    >

      {/* Info */}
      <Box flex={1}>
        <Stack
          direction={'row'}
          spacing={'32px'}
          alignItems={'center'}
          mb={'32px'}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/company/${company?.logo}`}
            alt="logo-company"
            width={58}
            height={58} />
          <Box>
            <AppHeadline text={company?.name} />
            <ButtonLink path={`/browse-companies/${company?._id}`}>
              Read more about {company?.name}
            </ButtonLink>
          </Box>
        </Stack>
      </Box>

      {/* Image */}
      <Box flex={1} sx={{ width: '100%', position: 'relative', pt: matches ? '500px' : '300px' }}>
        <Image
          src={'/sample/sample-1.jfif'}
          alt="logo-company"
          fill
          sizes="100%"
          style={{ width: '100%', height: '100%', top: 0, left: 0, objectFit: 'cover', }}
        />
      </Box>
    </Stack>
  )
}

export default JobDetailCompany