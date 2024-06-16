import HomeHero from "@/components/homepage/home.hero";
import HomeAdvertise from "@/components/homepage/home.advertise";
import HomeSkill from "@/components/homepage/home.skill";
import HomeFeatured from "@/components/homepage/home.featured";
import HomeLatest from "@/components/homepage/home.latest";
import { sendRequest } from "@/utils/api";
import type { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Job Huntly',
}

const HomePage = async () => {

  // Get Data Skills
  const skills = await sendRequest<IBackendRes<IModelPaginate<ISkill>>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/skills`,
    method: 'GET',
    queryParams: {
      current: 1,
      pageSize: 8
    },
  })

  // Get Data Jobs
  const jobs = await sendRequest<IBackendRes<IModelPaginate<IJob>>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`,
    method: 'GET',
    queryParams: {
      current: 1,
      pageSize: 8
    }
  })

  // Get Data Jobs Latest
  const jobsLatest = await sendRequest<IBackendRes<IModelPaginate<IJob>>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`,
    method: 'GET',
    queryParams: {
      current: 1,
      pageSize: 8,
      sort: '-updatedAt'
    }
  })

  // Get Data Location
  const location = await sendRequest<IBackendRes<ILocation[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/locations/list`,
    method: 'GET',
  })

  return (
    <>
      <HomeHero data={location?.data} />
      <HomeAdvertise />
      <HomeSkill data={skills.data?.result} />
      <HomeFeatured data={jobs.data?.result} />
      <HomeLatest data={jobsLatest.data?.result} />
    </>
  )
}

export default HomePage;