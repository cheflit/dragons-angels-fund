import Link from "next/link";
import Image from "next/image";
import {NavigationMenuHome} from "@/components/main-page/navigation-menu-home";
import {Button} from "@/components/ui/button";
import {ibmPlexSerif} from "@/app/fonts/fonts";

export default function HeaderNav() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto px-4 flex h-full items-center">
                <div className="md:flex">
                    <Link className="flex items-center space-x-2 pl-4" href="/">
                        <Image src="/assets/dnaf-logo.png"
                               alt="Logo"
                               width={100}
                               height={100}
                        />
                        <span className={`${ibmPlexSerif.className} hidden font-bold md:inline-block text-xl`}>
                            Dragons & <br/>Angels Fund
                        </span>
                    </Link>
                    <div className="hidden md:block mx-10 my-auto">
                        <NavigationMenuHome/>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                            Sign In
                        </Button>
                        <Button size="sm">Get started</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}