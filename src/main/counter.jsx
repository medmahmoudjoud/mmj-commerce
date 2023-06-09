import { useCart } from "../context/cart";

function Counter() {
    const { quantity, addItem, removeItem } = useCart()

    return (
        <div className='counter-wrapper'>
            <button onClick={removeItem}><svg className='minus operation' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></button>
            <h1 className='display-count'>{quantity}</h1>
            <button onClick={addItem}><svg className='plus operation' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg></button>
        </div>
    )
}

export default Counter;