"use client"

import React, { FC, useState } from "react"
import { signIn } from "next-auth/react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/Icons"

interface SignInWithGoogleProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInWithGoogle: FC<SignInWithGoogleProps> = ({
  className,
  ...props
}) => {
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
    <div className={`flex justify-center ${className}`} {...props}>
      <Button
        className="mr-2 h-4 w-4"
        onClick={loginWithGoogle}
        isLoading={isLoading}
      >
        {!isLoading && <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default SignInWithGoogle
