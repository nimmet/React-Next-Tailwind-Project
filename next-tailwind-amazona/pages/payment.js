import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import { Layout } from "../components/Layout";

const Payment = () => {
    const router = useRouter()
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2} />

      <form className=" flex flex-col max-w-screen-md mx-auto gap-5">
        <h1 className=" text-lg font-bold">Payment Methond</h1>

       

        <div>
          <input type="radio" name="PayPal" id="Paypal" checked/> PayPal
        </div>

        <div>
            <input type="radio" name="Stripe" id="Stripe" /> Stripe
        </div>

        <div>
            <input type="radio" name="CashOnDelivery" id="CashOnDelivery" /> CashOnDelivery
        </div>



        <div className=" flex justify-between">
            <button className="primary-button-gray "
            onClick={()=> router.push('/shipping')}>Back</button>
            <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
};

export default Payment;
