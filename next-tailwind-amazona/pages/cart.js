import Image from "next/image";
import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { Store } from "../utils/Store";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  let total = 0;

  return <Layout title="Shopping Cart">
    <h1 className="mb-4 text-xl">Shopping Cart</h1>
    {
        cartItems.length === 0 ? <div>
            Cart is empty. <Link href="/">Go Shopping</Link>
        </div> : (
            <div className="grid md:grid-cols-4 md:gap-5">

                <div className=" overflow-x-auto md:col-span-3">
                    <table className="min-w-full">
                        <thead className="border-b">
                            <tr>
                                <th className="px-5 text-left">Item</th>
                                <th className="p-5 text-right">Quantity</th>
                                <th className="p-5 text-right">Price</th>
                                <th className="p-5 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            {
                                cartItems.map((item)=> (
                                    <tr key={item.slug} className="border-b">
                                        <td>
                                        <Link href={`/product/${item.slug}`}
                                        className="flex items-center w-10 h-10 gap-1">
                                        <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        layout="responsive"
                      />
                      <h1>{item.name}</h1>
                       
                            </Link> 
                                        </td>

                                        <td className="p-5 text-right">
                                            {item.quantity}
                                        </td>
                                        <td className="p-5 text-right">${item.price}</td>
                                        <td className="p-5 text-center">
                                            <TiDeleteOutline size={30} className=" cursor-pointer hover:fill-red-500"/>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
  </Layout>;
};

export default Cart;
