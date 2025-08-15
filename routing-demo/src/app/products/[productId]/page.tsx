import { promises } from "dns";

export default async function ProductDetail({params}:{params: Promise<{ productId:string}>;}){
    const productId = (await params).productId
        return <h1>Details about Product {productId}</h1>
}