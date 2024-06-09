import AuthSignIn from "@/components/auth/auth.signin";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// either Static metadata
export const metadata: Metadata = {
  title: "Login to JobHuntly",
}

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    // redirect to homepage
    redirect('/');
  }

  return (
    <>
      <AuthSignIn />
    </>
  )
}

export default SignInPage;