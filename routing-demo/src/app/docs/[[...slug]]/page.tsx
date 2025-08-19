export default async function Docs({
    params,
}:{
    params : Promise<{ slug: string[]}>
}){
    const { slug } = await params
    if (slug?.length === 2){
        return(
            <h2>
                viewing docs for feature {slug[0]} in concept {slug[1]}
            </h2>
        )
    } else if (slug?.length === 1){
        return <h2>viewing docs for feature {slug[0]}</h2>

        
    }
    return <h2>Wellcome to Docs</h2>
}