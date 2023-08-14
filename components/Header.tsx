"use client";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const authModal = useAuthModal();
    const player = usePlayer();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // TODO: reset any playing songs
        player.reset();
        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Logged Out!");
        }
    };

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-teal-800 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
            <button onClick={() => router.back()} className="flex items-center bg-black rounded-full justify-center hover:opacity-75 transition">
                <RxCaretLeft className="text-white" size={35} />
            </button>
            <button className="flex items-center bg-black rounded-full justify-center hover:opacity-75 transition" onClick={() => router.forward()}>
                <RxCaretRight className="text-white" size={35} />
            </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                <HiHome className="text-black" size={20} />
            </button>
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                <BiSearch className="text-black" size={20} />
            </button>
        </div>
        {/* Authentication */}
        <div className="flex justify-between items-center gap-x-4">
            {user ? (
                <div className="flex gap-x-4 items-center">
                    <Button onClick={handleLogout} className="bg-white px-6 py-2">Logout</Button>
                    <Button className="bg-white" onClick={() => router.push("/account")}>
                        <FaUserAlt />
                    </Button>
                </div>
            ) : (
                <>
                    <div>
                        <Button className="bg-transparent text-neutral-300 font-medium" onClick={authModal.onOpen}>
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-white px-6 py-2" onClick={authModal.onOpen}>
                            Login In
                        </Button>
                    </div>
                </>
            )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header
