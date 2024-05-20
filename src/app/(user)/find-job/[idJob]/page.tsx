import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import JobDetailHeader from "@/components/job/job.detail.header";
import JobDetailDesc from "@/components/job/job.detail.desc";
import JobDetailCompany from "@/components/job/job.detail.company";
import HomeLatest from "@/components/homepage/home.latest";
import { sendRequest } from "@/utils/api";

const JobDetail = async ({ params }: { params: { idJob: string } }) => {

  // Get Data Job by ID
  const res = await sendRequest<IBackendRes<IJob>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/${params.idJob}`
  })

  if (res.data) {
    console.log(res.data.description);
  }

  return (
    <>
      <Box bgcolor={'#F8F8FD'} py={'40px'}>
        <Container maxWidth='xl'>
          <JobDetailHeader job={res.data} />
        </Container>
      </Box>

      <Box>
        <Container maxWidth='xl'>
          <JobDetailDesc job={res.data} />
          <Divider />
          <JobDetailCompany company={res.data?.company} />
        </Container>
        <HomeLatest />
      </Box>
    </>
  )
}

export default JobDetail