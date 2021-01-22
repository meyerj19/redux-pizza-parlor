import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Menu() {

    const [isOrdered, setIsOrdered] = useState(true);


    const history = useHistory();
    const dispatch = useDispatch();
    //const selector = useSelector();

    const cart = [];


    //add items to cart
    const handleClick = (pizza) => {
        console.log('clicked', pizza);
        cart.push(pizza);
        console.log('cart', cart);

    }
//sending the cart information to redux
    const handleNext = () => {
        dispatch({type: 'GET_CART', payload: cart})
        history.push('/checkout');
    }
    
//calling the fetchPizza function
    useEffect(() => {
        fetchPizza();
    }, [])
//getting the pizza information from the database
    const fetchPizza = () => {
        axios.get('/api/pizza').then((response) => {
            const action = {
                type: 'GET_PIZZA',
                payload: response.data
            }
            dispatch(action);
        }).catch(err => {
            alert('error in GET pizza');
            console.error(err)
        })

    }
    //getting pizza from redux
    const pizzas = useSelector(store => store.getPizza);

    const orderSum = 0;

    console.log('pizza', pizzas);
    //setting up DOM    
    return (
        <section>
            <h1>Prime Pizza</h1>
            <p>Total: {orderSum}</p>
            <h4>Step 1: Select Your Pizza</h4>


            <ul>
                {pizzas.map((pizza, index) =>
                    <li key={index}>
                        <button onClick={() => handleClick(pizza)}>Add</button>
                        {pizza.name}, <img src={pizza.image_path}></img>/>, {pizza.description}, {pizza.price}</li>
                )}
            </ul>
            <button onClick={() => handleNext()}>Next</button>
        </section>

    );


}
export default Menu;