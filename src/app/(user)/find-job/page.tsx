import FindJobHero from "@/components/findJob/find.hero";
import FindJobList from "@/components/findJob/find.jobList";
import { sendRequest } from "@/utils/api";
import type { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Find job',
}

const FindJobPage = async () => {

  // Get data location
  const res = await sendRequest<IBackendRes<ILocation[]>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/locations/list`
  })

  return (
    <>
      <FindJobHero data={res?.data}  />
      <FindJobList />
    </>
  )
}

export default FindJobPage