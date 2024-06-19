import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AccountWrapper from "@/components/myAccount/account.wrapper";
import { sendRequest } from "@/utils/api";

const MyAccountPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin')
  }

  // Get data Find CV by User ID
  const listCvUser = await sendRequest<IBackendRes<IResume[]>>({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/resumes/by-user`,
    headers: { Authorization: `Bearer ${session.access_token}` }
  })

  // Get data skill
  const listSkill = await sendRequest<IBackendRes<ISkill[]>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/skills/list`,
    nextOption: { cache: 'no-store' }
  })

  // Get data management interview
  const listManage = await sendRequest<IBackendRes<IModelPaginate<IManage[]>>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/manage`,
    queryParams: {
      current: 1,
      pageSize: 10,
      userId: session.user._id
    },
    nextOption: { cache: 'no-store' }
  })

  return (
    <>
      <AccountWrapper
        session={session}
        listCvUser={listCvUser.data}
        listSkill={listSkill.data}
        // @ts-ignore
        listManage={listManage.data.currentPageResults}
      />
    </>
  )
}

export default MyAccountPage;