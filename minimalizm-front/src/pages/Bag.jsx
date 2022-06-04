import { useContext } from 'react';
import CartContext from '../context/CartContext';

export const Bag = () => {
    const { cart } = useContext(CartContext);
    console.log('cart', cart);
    return (
        <>
            <h1>Bag</h1>
            {/* {cart.map((item) => (
                <>
                    <p>{item}</p>
                </>
            ))} */}
        </>
    );
};
