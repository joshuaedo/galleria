"use client"

import React, { FC, useState } from "react"
import { signIn } from "next-auth/react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/Icons"

interface SignInWithGoogleProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInWithGoogle: FC<SignInWithGoogleProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      // throw new Error();
      await signIn("google")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem logging in with Google",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={loginWithGoogle}
      isLoading={isLoading}
    >
      {!isLoading && (
        <>
        <span className="hidden md:inline">Sign in with Google</span>
        <Icons.google className="h-4 w-4 md:hidden" />
        </> 
  )}
    
    </Button>
  )
}

export default SignInWithGoogle
