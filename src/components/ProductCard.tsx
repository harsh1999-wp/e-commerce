"use client"

import Link from "next/link";
import { ProductsType } from "@/types";
import { ProductList } from "./ProductList";
import { ProductType } from "@/types";



export const ProductCard = () =>{
    return(
        <div className="shadow-lg rounded-lg overflow-hidden">
         <Link
         href={`/product  ${}`}
         ></Link>
        </div>
    );
}