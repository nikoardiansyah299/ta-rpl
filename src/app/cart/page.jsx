'use client'

import Footer from "@/components/Footer";
import HeaderCart from "@/components/HeaderCart";
import Navbar from "@/components/Navbar";

const ProfilePage = () => {
    return <>
        <Navbar textColor="text-black"/>
        <div className="flex flex-col w-full justify-center items-center">
            <div className="h-screen flex justify-center items-center">
                <h1 className="">My Bag</h1>
            </div>
            <Footer/>
        </div>;
    </>
}
export default ProfilePage;