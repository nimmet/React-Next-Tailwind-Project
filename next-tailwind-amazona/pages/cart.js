import Image from "next/image";
import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { Store } from "../utils/Store";
import { TiDeleteOutline } from "react-icons/ti";

const cart = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  let total = 0

  const deleteItemHandler =(slug)=> {
    cart.cartItems.filter((item)=> item.slug !== slug)
  }
  

  return (
    <Layout title="Shopping Cart">
      <div >
        <h1 className=" text-lg font-[600]">Shopping Cart</h1>

       
          <div className=" grid grid-cols-1 md:grid-cols-4 justify-center gap-10">
          <div className=" md:col-span-3">
            <div className=" border-b border-b-gray-200" >
              <ul className="grid grid-cols-4 justify-start items-center py-4 text-lg font-bold">
                <li className="">Item</li>
                <li>Quantity</li>
                <li>Price</li>
                <li>Action</li>
              </ul>
            </div>

            <div>
              {cart.cartItems.map((item, index) => {
                total += item.price * item.quantity
                return (
                  <div key={index} className="grid grid-cols-4 justify-start items-center gap-2 border-b border-b-gray-200 py-4">
                  <div className=" justify-start items-center gap-2 flex">
                    <div className=" w-10 h-10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={25}
                        height={25}
                        layout="responsive"
                      />
                    </div>
                    <h1 className=" ">{item.name}</h1>
                    </div>
                    <h1>{item.quantity}</h1>
                    <h1>${item.price}</h1>
                    <h1>
                      <TiDeleteOutline className=" cursor-pointer" size={30}
                       onClick= {()=> deleteItemHandler(item.slug)}/>
                    </h1>
                  </div>
                );
              })}
            </div>
</div>
            <div className="card h-min">
              <div className="mx-5 flex justify-between items-center mt-3 text-lg font-bold">
                <h1 className=" ">Subtotal ({cart.cartItems.length}): </h1>
                <h1>${total}</h1>
              </div>
              <div className="p-5">

              <button className="primary-button w-full">Check Out</button>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default cart;
