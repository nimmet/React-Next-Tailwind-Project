import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../components/Layout";
import data from "../../utils/data";

const ProductScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
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

          <button className="primary-button w-full">Add to cart</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
