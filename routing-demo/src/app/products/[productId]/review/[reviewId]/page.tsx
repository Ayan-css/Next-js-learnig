import { notFound } from "next/navigation";



export default async function ReviewDetail({
    params,
}:{
     params: Promise<{ productId : string; reviewId : string}>;
}){
        const { productId, reviewId} = await params
        if (parseInt(reviewId)> 1000) {
            notFound()
        }

        return(
            <h2>
                review is {reviewId} for product {productId}
            </h2>
        );
}