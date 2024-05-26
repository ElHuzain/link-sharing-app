"use client";

import { useSearchParams } from "next/navigation";
import Illustration from "./components/illustration/illustration"
import LinksContainer from "./components/links/linksContainer"
import ProfileContainer from "./components/profile/profileContainer"
import useSubscribeToUserDetails from "@/hooks/useSubscribeToUserDetails";
import { createContext, useState } from "react";
import { User } from "@/state/dataSlice";
import LoadingComponent from "@/components/ui/loadingComponent";

export const UserDetailsContext = createContext<{} | User>({});

const HomePage = () => {

  // Get current tab to render profile/links
  const params = useSearchParams();
  const currentPath = params.get("tab");

  // Create links state
  const [links, setLinks] = useState();

  // Stream user data and updates
  const { userData, loading } = useSubscribeToUserDetails();

  const value = {
    userData,
    links
  };

  // if (loading) return <LoadingComponent />

  return (
    <UserDetailsContext.Provider value={value}>
      <main className="p-4 pt-0 md:p-0 flex gap-4 max-w-content mx-auto">
        <div className="relative w-full flex gap-6 overflow-hidden md:min-h-[834px]">
          <Illustration />

          <div className="w-full relative">
            {
              currentPath === "profile" ? <ProfileContainer /> : <LinksContainer />
            }
          </div>
        </div>
      </main>
    </UserDetailsContext.Provider>
  )
}

export default HomePage