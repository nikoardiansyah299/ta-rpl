'use client'
import { useSession } from "next-auth/react";


const ProfilePage = () => {

    const { data: session } = useSession();


    return <div className="flex h-dvh w-full justify-center items-center">
        <h1 className="">Profile Page </h1>
            {session?.user ? (
            <p>Welcome, {session.user.username}</p>
        ) : (
            <p>Please login</p>
        )}
    </div>;
}
export default ProfilePage;