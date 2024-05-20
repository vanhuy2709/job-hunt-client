import FindJobHero from "@/components/findJob/find.hero";
import FindJobList from "@/components/findJob/find.jobList";
import type { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Find job',
}

const FindJobPage = async () => {

  return (
    <>
      <FindJobHero />
      <FindJobList />
    </>
  )
}

export default FindJobPage