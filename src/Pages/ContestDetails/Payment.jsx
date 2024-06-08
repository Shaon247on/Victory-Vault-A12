import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import Title from "../../Components/Title/Title";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = ({contest}) => {
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="bg-white h-[80%] w-[95%] rounded-lg p-7 text-start">
                    <Title subTitle='Make Your Payment'>

                    </Title>

                    {/* payment related code */}

                    <div className="mx-5">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm contest={contest}></CheckOutForm>
                        </Elements>
                    </div>



                    {/* close button of the modal  */}
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;