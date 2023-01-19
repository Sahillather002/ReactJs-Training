import Product from "./Product"
import { products } from "../seed"
export default function ProductList(){
    // local sources
    console.log(products)
    // transformig the products data array into product components array
    const productComponentsArray = products.map((product) =>{
        return(
            <Product
                id = {product.id}
                key = {product.id}
                title= {product.title}
                descr =  {product.description}
                votes = {product.votes}
                ownerImage =  {product.submitterAvatarUrl}
                imageURL =  {product.productImageUrl}
            />
        )
    })
    return(
        <div className="products">
            {productComponentsArray}
        </div>
    )
}