import Signout from "@/components/Signout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authOptions } from "@/lib/auth";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AlignVerticalJustifyStart} from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {}

async function Navbar({}: Props) {
      const session = await getServerSession(authOptions);
      const user = session?.user;
      if (!user) {
        redirect("/api/auth/signin");
      }
  return (
    <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Todo App
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* option to creatre new todo app */}
          <Link href="/new" className="mr-4">
            <Button >Create New</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
              >
                  <Avatar>

                  <AvatarImage
                    src={user?.image || ""}
                    alt={user?.name || "User"}
                    />
                  <AvatarFallback>
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                    </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-4" align="end" forceMount>
              <DropdownMenuItem asChild>
                <Signout />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </nav>  )
}

export default Navbar