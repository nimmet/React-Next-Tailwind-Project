import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../components/Layout";
import data from "../../utils/data";

const SingleProduct = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name}>
      <Link href="/" className="mx-4 font-[500]">back to products</Link>
      <div className="mx-4 my-4">
        <div className=" flex flex-col gap-5 justify-between md:flex-row min-w-full ">
          <img src={product.image} alt={product.slug} 
            className=" md:w-[48%]"
          />

          <div className=" md:w-[24%] font-[500]">
            <h1>{product.name}</h1>
            <h2>Category: {product.category}</h2>
            <h2>Brand: {product.brand}</h2>
            <p>
              {product.rating} of {product.numReviews} reviews
            </p>
            <p>Description: {product.description}</p>
          </div>

          <div className=" md:w-[24%] flex flex-col rounded-md shadow-md border p-5 h-min font-[500]">
            <div className=" flex justify-between items-center ">
              <h2>Price</h2>
              <h2>${product.price}</h2>
            </div>
            <div className=" flex justify-between items-center ">
              <h2>Status</h2>
              <h2>{product.countInStock ? "In stock" : "Not in stock"}</h2>
            </div>
           

            <button className="primary-button my-4">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
