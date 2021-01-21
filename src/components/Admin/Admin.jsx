import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './Admin.css';


function Admin() {

    useEffect(() => {
        fetchOrders();
    }, [])

    const orders = useSelector(store => store.orderHistoryReducer);
    const dispatch = useDispatch();

    const fetchOrders = () => {
        axios.get('/api/order').then((response) => {

            const action = {
                type: 'SET_ORDERS',
                payload: response.data
            }
            dispatch(action);

        }).catch(err => {
            alert('error in GET orders');
            console.error(err)
        })
    }

    console.log('Order History: ', orders);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) =>
                    <tr key={index}>
                        <td>{order.customer_name}</td>
                        <td>{moment(order.time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
} // end Admin

export default Admin;