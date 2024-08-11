import Image from "next/image";
import Hero from "./components/hero";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-0 relative">
      <Hero></Hero>
      
      <div className="bg-black h-[100vh] relative w-full flex justify-center text-white">
        <h1 className="text-5xl pt-12">Under Construction.</h1>
        {/* Content for the black div */}
        {/* <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=""></NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col px-20">
                <NavigationMenuLink>One</NavigationMenuLink>
                <NavigationMenuLink>Two</NavigationMenuLink>
                <NavigationMenuLink>Three</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

      </div>
    </main>
  );
}
