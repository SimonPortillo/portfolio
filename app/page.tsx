import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <Avatar className="h-32 w-32">
            <AvatarImage src="./avatar.jpg" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-bold">Simon Portillo</h1>
      <p className="roboto-mono mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus optio vel repellat corrupti laboriosam atque animi. Ipsum dolor odit quae quam? Mollitia, placeat dignissimos. Quia alias molestias ipsam porro nihil?</p>
        </CardContent>
      </Card>
      
      
    </main>
  );
}
