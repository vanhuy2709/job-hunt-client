import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CompanyDetailHeader from "@/components/company/company.detail.header";
import CompanyDetailDesc from "@/components/company/company.detail.desc";
import { sendRequest } from "@/utils/api";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { idCompany: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const temp = params?.idCompany?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const companyId = temp1[temp1.length - 1]

  // fetch data
  const res = await sendRequest<IBackendRes<ICompany>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${companyId}`,
    nextOption: { cache: 'no-store' }
  })

  return {
    title: res.data?.name,
    description: res.data?.description
  }
}

const CompanyDetail = async ({ params }: { params: { idCompany: string } }) => {

  const temp = params?.idCompany?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const companyId = temp1[temp1.length - 1]

  // Get Data Company by ID
  const res = await sendRequest<IBackendRes<ICompany>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/companies/${companyId}`,
    nextOption: { cache: 'no-store' }
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