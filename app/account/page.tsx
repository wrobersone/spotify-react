import Header from "@/components/Header"
import React from 'react'
import AccountContent from "./components/AccountContent"

const Account = () => {
  return (
    <div className="bg-neutral-900 h-full w-full overflow-hidden rounded-lg overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="font-semibold text-3xl text-white">Account Settings</h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  )
}

export default Account
