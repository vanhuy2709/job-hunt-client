import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AppHeadline from "@/components/content/app.headline";
import ButtonLink from "@/components/button/button.link";

interface IProps {
  company: {
    _id: string,
    name: string,
    logo: string
  } | undefined
}
const JobDetailCompany = (props: IProps) => {
  const { company } = props;

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

        {/* <Typography sx={{
          fontFamily: epilogue.style,
          lineHeight: '160%',
          color: '#515B6F'
        }}>
          Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
        </Typography> */}
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