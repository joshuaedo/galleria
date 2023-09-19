"use client"

import React, { FC, useState } from "react"
import { signIn } from "next-auth/react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/Icons"

const SignInWithGoogle = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

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
    <Button onClick={loginWithGoogle} isLoading={isLoading}>
      {!isLoading && <Icons.google className="mr-2 h-4 w-4" />}
      Google
    </Button>
  )
}

export default SignInWithGoogle
