import { useSelector } from 'react-redux';

export default function Subtotal() {

    const orderReducer = useSelector(store => store.orderReducer)

    const calculateTotal = (pizzaArray) => {
        let sum = 0;
        pizzaArray.map((pizza) => {
            sum += Number(pizza.price)
        })
        return sum;
    }


    return (
        <>
            <p>Subtotal: {calculateTotal(orderReducer)}</p>
        </>
    )
}
