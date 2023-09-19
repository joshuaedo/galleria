"use client"

import { FC } from "react"
import { User } from "next-auth"
import { signOut } from "next-auth/react"
import UserAvatar from './UserAvatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu"

interface UserAuthNavProps {
  gUser: Pick<User, "name" | "image">
}

const UserAuthNav: FC<UserAuthNavProps> = ({ gUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-5 w-5"
          user={{
            name: gUser?.name || null,
            image: gUser?.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }}
          className="cursor-pointer"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAuthNav
