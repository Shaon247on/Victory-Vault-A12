import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import ButtonFilled from "../../Components/Button/ButtonFilled";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const CheckOutForm = ({contest}) => {
    const {ContestName, ContestPrize, ContestFee, tag, ContestDescription, Author, AttemptedCount, ContestWinner, Deadline, Image, _id} = contest
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth()
    const axios = useAxiosSecure()
    const totalPrice = ContestFee
    useEffect(() => {
        if (totalPrice > 0) {
            axios.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axios, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log("payment Error:",error)
            setError(error.message)
        }
        else{
            console.log("Payment Method", paymentMethod)            
            setError('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <ButtonFilled type="submit" disabled={!stripe || !clientSecret} style='mt-5' text="Pay"></ButtonFilled>
            <p className="text-red-600 font-medium mt-4">{error}</p>
        </form>
    )

};

export default CheckOutForm;