import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "./home/page";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(process.memoryUsage());

  return (
    <>
      <Navbar serverSession={session} />
      <HomePage/>
      <Footer/>
    </>
  );
}
