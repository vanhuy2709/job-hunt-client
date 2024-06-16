import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import JobDetailHeader from "@/components/job/job.detail.header";
import JobDetailDesc from "@/components/job/job.detail.desc";
import JobDetailCompany from "@/components/job/job.detail.company";
import HomeLatest from "@/components/homepage/home.latest";
import { sendRequest } from "@/utils/api";
import { Metadata, ResolvingMetadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: { idJob: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const temp = params?.idJob?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const jobId = temp1[temp1.length - 1]

  // fetch data
  const res = await sendRequest<IBackendRes<IJob>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/${jobId}`
  })

  return {
    title: res.data?.name,
    description: res.data?.description,
  }
}

const JobDetail = async ({ params }: { params: { idJob: string } }) => {
  const temp = params?.idJob?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const jobId = temp1[temp1.length - 1]

  // Get Data Job by ID
  const res = await sendRequest<IBackendRes<IJob>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/${jobId}`,
  })

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