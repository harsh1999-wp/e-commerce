import { Search } from "lucide-react"; 

export const Searchbar = () =>{
    return (
        <div className="hidden sm:flex items-center gap-1 rounded-md ring-1 ring-gray-100 px-2 py-1 shadow-md">
            <Search className="w-5 h-10 text-gray-500"/>
            <input id ="search" placeholder="Search..." className="text-sm  outline-0"/>
        </div>
    );
}