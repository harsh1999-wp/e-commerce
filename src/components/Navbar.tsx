import Image from "next/image";
import Link from "next/link";
import { Searchbar } from "./Searchbar";
import {Bell, Home, LucideHome, ShoppingCart

} from "lucide-react";

export const Navbar = ()=>{
    return(
        <nav className="full flex item-center justify-between border-b border-grap-200 pb-4">
            {/*Left*/}
            <Link href="/">
            <Image src = "/logo.png" 
            alt="Trendy" 
            width={36} 
            height={36} 
            className="w-6 h-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider "> Trendy</p>
            </Link>
            {/*Right*/}
            <div className="flex item-center gap-6">
                <Searchbar/>
                <Link href="/">
                <Home className="w-4 h-4 text-grey-600"/>
                </Link>
                <Bell  className="w-4 h-4 text-grey-600" />
                <ShoppingCart  className="w-4 h-4 text-grey-600"/>
                <Link href="/Login">
                Sign In 
                </Link>
            </div>
            
        </nav>
    );
}