import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import JobDetailHeader from "@/components/job/job.detail.header";
import JobDetailDesc from "@/components/job/job.detail.desc";

const JobDescription = () => {

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
        <Container maxWidth='xl' sx={{ py: '72px' }}>
          <JobDetailDesc />
        </Container>
      </Box>
    </>
  )
}

export default JobDescription