import AuthRegister from "@/components/auth/auth.register";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "Register to JobHuntly",
}

const RegisterPage = () => {

  return (
    <>
      <AuthRegister />
    </>
  )
}

export default RegisterPage