import { Search } from "lucide-react"; 

export const Searchbar = () =>{
    return (
        <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-8 py-1 shadow-md">
            <Search className="w-5 h-4 text-gray-500"/>
            <input id ="search" placeholder="Search..." className="text-sm  outline-0"/>
        </div>
    );
}