import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import JobDetailHeader from "@/components/job/job.detail.header";
import JobDetailDesc from "@/components/job/job.detail.desc";
import JobDetailCompany from "@/components/job/job.detail.company";
import HomeLatest from "@/components/homepage/home.latest";

const JobDetail = () => {

  return (
    <>
      <Box
        bgcolor={'#F8F8FD'}
        py={'40px'}
      >
        <Container maxWidth='xl'>
          <JobDetailHeader />
        </Container>
      </Box>

      <Box>
        <Container maxWidth='xl'>
          <JobDetailDesc />
          <Divider />
          <JobDetailCompany />
        </Container>
        <HomeLatest />
      </Box>
    </>
  )
}

export default JobDetail