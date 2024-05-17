import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CompanyDetailHeader from "@/components/company/company.detail.header";
import CompanyDetailDesc from "@/components/company/company.detail.desc";

const CompanyDetail = () => {
  return (
    <>
      <Box bgcolor={'#F8F8FD'} pt={'40px'} pb={'73px'}>
        <Container maxWidth='xl'>
          <CompanyDetailHeader />
        </Container>
      </Box>

      <Box py={'72px'}>
        <Container maxWidth='xl'>
          <CompanyDetailDesc />
        </Container>
      </Box>
    </>
  )
}

export default CompanyDetail