import React ,{createContext,useContext,useEffect,useState} from 'react';
import { toast } from 'react-hot-toast';

const Context =createContext();

//<State></State> //ek trh ka child

export const StateContext=({children})=>{
//states idhr put kro

const [showCart, setShowCart] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [totalQuantities, setTotalQuantities] = useState(0);
const [qty, setQty] = useState(1);
const [index, setIndex] = useState(0);


let foundProduct;
let ind;

const onAdd=(product,quantity)=>{
    const checkProductInCart=cartItems.find((item)=>item._id===product._id);

    setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+quantity*product.price);
    if(checkProductInCart){

        const updatedCartItems=cartItems.map((cartProduct)=>{
            if(cartProduct._id===product._id)return{
                ...cartItems,
                quantity:product.quantity+quantity
            }
        })

        setCartItems(updatedCartItems);
        
    } else{
        product.quantity=quantity;

        setCartItems([...cartItems,{...product}]);
    }
    toast.success(`${qty} ${product.name} added to the cart!`);
}
const incQty=()=>{
    setQty((prevQty)=>prevQty+1);
}
const decQty=()=>{
    setQty((prevQty)=>{
    if(prevQty-1<1) return 1;
    return prevQty-1;
});
}
const onRemove = (product) => {
  foundProduct = cartItems.find((item) => item._id === product._id);
  const newCartItems = cartItems.filter((item) => item._id !== product._id);

  setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
  setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
  setCartItems(newCartItems);
}

const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    ind = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }


return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        setIndex,
        index,
        cartItems,
        totalPrice,
        totalQuantities,
        onRemove,
        toggleCartItemQuanitity,
        qty,
        incQty,
        decQty,
        onAdd
      }}>
       {children}
    </Context.Provider>
)
}
export const useStateContext=()=>useContext(Context);