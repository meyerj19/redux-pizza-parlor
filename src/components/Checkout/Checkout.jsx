import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Subtotal from '../Subtotal/Subtotal'

export default function Checkout() {
    const history = useHistory()
    const orderReducer = useSelector(store => store.orderReducer)
    const customerReducer = useSelector(store => store.customerReducer)

    const calculateTotal = (pizzaArray) => {
        let sum = 0;
        pizzaArray.map((pizza) => {
            sum += Number(pizza.price)
        })
        return sum;
    }

    const handleClick = (customer, order) => {
        console.log('clicked')
        const newOrder = {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            type: customer.type,
            total: calculateTotal(order),
            pizzas: '',
        }
        console.log(newOrder)
        axios({
            method: 'POST',
            url: '/api/order',
            data: newOrder
        }).then((response)=>{
            console.log(response)
            history.push('/')
        }).catch((error)=>{
            console.log(error);
            alert('error posting data')
        })
    }

    return (
        <>
            <Subtotal />
            <header>
                <h1>Prime Pizza</h1>
                <h3>Checkout</h3>
            </header>
            <div className="customer_information">
                <ul>
                    <li key={customerReducer.customer_name}>{customerReducer.customer_name}</li>
                    <li key={customerReducer.street_address}>{customerReducer.street_address}</li>
                    <li key={customerReducer.zip}>{customerReducer.city}, {customerReducer.zip}</li>
                </ul>
            </div>
            <div className="order_type">
                <h3>{customerReducer.type}</h3>
            </div>
            <div className="order_information">
                <table>
                    <thead>
                        <tr key={customerReducer.zip}>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderReducer.map(order => {
                            return (
                                <tr key={order.total}>
                                    <td>{order.pizzas}</td>
                                    <td>{order.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={() => handleClick(customerReducer, orderReducer)}>CHECKOUT</button>
            </div>
        </>
    )
}
