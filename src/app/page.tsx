import { Categories} from "@/components/Categories"
import { ProductList } from "@/components/ProductList"
import Image from "next/image"
import { Suspense } from "react"

const Homepage = async ({searchParams} :{searchParams :Promise<{category:string}>}) => {

  const category = (await searchParams).category
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src ="/featured.png" alt="Featured Product" fill/>
      </div>
<<<<<<< HEAD
      <ProductList category={category} params="Homepage"/>
=======
      <Suspense>
      <Categotries/>
      </Suspense>
      <ProductList/>
>>>>>>> 76fea197f8de1052fa25c73670d17ecac00fce81
    </div>
  )
}

export default Homepage