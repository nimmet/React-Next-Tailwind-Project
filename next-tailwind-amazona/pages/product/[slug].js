import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Layout } from "../../components/Layout";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";

const ProductScreen = (props) => {
  const {product} = props;
  const {state, dispatch} = useContext(Store)
  const router = useRouter()
  
 

  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((item)=>item.slug === product.slug)

    const quantity = existItem ? existItem.quantity+1 : 1
    const {data} = await axios.get(`/api/products/${product._id}`)

    if(quantity > data.countInStock){
      return toast.error("Sorry, Product is out of stock")
      
    }
    dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity}})

    router.push('/cart')
  }

  return (
    <Layout title={product.name}>
      <div className=" py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>

        <div>
          <ul>
            <li  className=" text-lg">{product.name}</li>

            <li>Category: {product.category}</li>

            <li>Brand: {product.brand}</li>

            <li>
              {product.rating} of {product.numReviews} reviews
            </li>

            <li>Description: {product.description}</li>
          </ul>
        </div>

        <div className="card p-5 h-min">
          <div className=" flex justify-between mb-2">
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className=" flex justify-between mb-2 ">
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
          </div>

          <button className="primary-button w-full"
           onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context){
  const {params} = context
  const {slug} = params 
  await db.connect()
  const product = await Product.findOne({slug}).lean()
  await db.disconnect()

  return {
    props: {
      product: product ? db.convertDocToObj(product): null,
    }
  }

}

export default ProductScreen;
