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
  const location = await sendRequest<IBackendRes<ILocation[]>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/locations/list`
  })

  // Get data job level
  const level = await sendRequest<IBackendRes<ILevel[]>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/levels/list`
  })

  // Get data work type
  const workType = await sendRequest<IBackendRes<IWorkType[]>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/worktypes/list`
  })

  return (
    <>
      <FindJobHero data={location?.data} />
      <FindJobList
        listLevel={level?.data}
        listWorkType={workType?.data}
      />
    </>
  )
}

export default FindJobPage