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

  console.log(product);
  return (
    <Layout title={product.name}>
        <div>
    <Link href="/">back to products</Link>
    <div>
      <img src={product.image} alt={product.slug} />

      <div>
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <h2>{product.brand}</h2>
        <p>{product.rating}</p>
        <p>{product.description}</p>
      </div>
    </div>
    </div>
    
    </Layout>
  );
};

export default SingleProduct;


  