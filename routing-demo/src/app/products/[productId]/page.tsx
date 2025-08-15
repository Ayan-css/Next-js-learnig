import { promises } from "dns";

export default async function ProductDetail({params}:{params: Promise<{ productId:string}>;}){
    const productId = (await params).productId
        return <h1>Details about Product {productId}</h1>
}

// Dynamix Routing is used to manage N of rout without manually routing their Path
