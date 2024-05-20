import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CompanyDetailHeader from "@/components/company/company.detail.header";
import CompanyDetailDesc from "@/components/company/company.detail.desc";
import { sendRequest } from "@/utils/api";

const CompanyDetail = async ({ params }: { params: { idCompany: string } }) => {
  console.log('check path company: ', params.idCompany);

  // Get Data Company by ID
  const res = await sendRequest<IBackendRes<ICompany>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${params.idCompany}`
  })

  return (
    <>
      <Box bgcolor={'#F8F8FD'} pt={'40px'} pb={'73px'}>
        <Container maxWidth='xl'>
          <CompanyDetailHeader
            logo={res.data?.logo}
            name={res.data?.name}
          />
        </Container>
      </Box>

      <Box py={'72px'}>
        <Container maxWidth='xl'>
          <CompanyDetailDesc
            description={res.data?.description}
            address={res.data?.address}
          />
        </Container>
      </Box>
    </>
  )
}

export default CompanyDetail