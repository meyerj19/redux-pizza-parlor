import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function CustomerForm() {

    //useStates for input fields
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    //setting up history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // package states as object to dispatch to reducer
        const objectToSend = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: type 
        }

        console.log('Sending to reducer:', objectToSend);
        dispatch({ type: 'SET_CUSTOMER_INFO', payload: objectToSend })

        // history.push('/checkout');
    } // end handleFormSubmit

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <form onSubmit={handleFormSubmit}>
                <input 
                    required 
                    type='text' 
                    placeholder='Name' 
                    onChange={(event) => setName(event.target.value)}
                /><br />
                <input 
                    required 
                    type='text' 
                    placeholder='Street Address' 
                    onChange={(event) => setAddress(event.target.value)}
                /><br />
                <input 
                    required 
                    type='text' 
                    placeholder='City' 
                    onChange={(event) => setCity(event.target.value)}
                /><br />
                <input 
                    required 
                    type='text' 
                    placeholder='Zip' 
                    onChange={(event) => setZip(event.target.value)}
                /><br />
                <input 
                    required 
                    type='radio' 
                    id="pickup" 
                    value="pickup" 
                    name="option" 
                    onChange={(event) => setType(event.target.value)}
                />
                <label for="pickup">Pickup</label><br />
                <input 
                    required 
                    type='radio' 
                    id="delivery" 
                    value="delivery" 
                    name="option" 
                    onChange={(event) => setType(event.target.value)}
                />
                <label for="delivery">Delivery</label><br />
                <button type="submit">NEXT</button>
            </form>
        </>
    )
} // end CustomerForm

export default CustomerForm;