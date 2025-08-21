"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <Card>
        <CardHeader>
          {loading ? (
            <Skeleton className="h-32 w-32 rounded-full" />
          ) : (
            <Avatar className="h-32 w-32">
              <AvatarImage />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          )}
        </CardHeader>
        <CardContent>
          {loading ? (
            <>
              <Skeleton className="h-10 w-2/3 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6 mt-2" />
            </>
          ) : (
            <>
              <h1 className="serif text-4xl font-bold">Placeholder</h1>
              <p className="mono">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus optio vel repellat corrupti laboriosam atque animi. Ipsum dolor odit quae quam? Mollitia, placeat dignissimos. Quia alias molestias ipsam porro nihil?
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
