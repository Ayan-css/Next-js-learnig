export default async function ReviewDetail({
    params,
}:{
     params: Promise<{ productId : string; reviewId : string}>;
}){
        const { productId, reviewId} = await params
        
        return(
            <h2>
                review is {reviewId} for product {productId}
            </h2>
        );
}