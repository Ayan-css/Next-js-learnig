"use client";

import { usePathname } from "next/navigation"


export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]
    return(
        <div>
            <h2>page not found for review {reviewId} of Product {productId}</h2>
            
        </div>
    )
}