function CustomerForm() {
    
    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <form>
                <input type='text' placeholder='Name' /><br/>
                <input type='text' placeholder='Street Address' /><br/>
                <input type='text' placeholder='City' /><br/>
                <input type='text' placeholder='Zip' /><br/>
                <input type='radio' id="pickup" value="pickup" name="option"/>
                <label for="pickup">Pickup</label><br/>
                <input type='radio' id="delivery" value="delivery" name="option"/>
                <label for="delivery">Delivery</label>
            </form>
        </>
    )
} // end CustomerForm

export default CustomerForm