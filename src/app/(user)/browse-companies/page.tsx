import BrowseHero from "@/components/browseCompany/browse.hero";
import BrowseRecommend from "@/components/browseCompany/browse.recommend";
import type { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Browse Companies',
}

const BrowseCompaniesPage = () => {

  return (
    <>
      <BrowseHero />
      <BrowseRecommend />
    </>
  )
}

export default BrowseCompaniesPage