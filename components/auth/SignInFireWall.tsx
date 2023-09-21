"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Icons } from "@/components/Icons"

import SignInWithGoogle from "./SignInWithGoogle"

export default function SignInFireWall() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      console.log(response)

      if (!response?.error) {
        router.push("/")
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        })
        setError("Sign-in failed. Please try again.")
      }
    } catch (error) {
      console.log(error)
      console.error("Sign-in error:", error)
      setError("Sign-in failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Enter your email below to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form action="" className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)} // Corrected the onChange handler
              id="email"
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e: any) => setPassword(e.target.value)} // Corrected the onChange handler
              id="password"
              type="password"
            />
          </div>

          <Button
            isLoading={isLoading}
            onClick={handleSubmit}
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <SignInWithGoogle />
      </CardFooter>
    </Card>
  )
}
