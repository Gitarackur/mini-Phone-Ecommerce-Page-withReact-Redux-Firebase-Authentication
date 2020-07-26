
const initState={
    Cart: []
}






export const CartReducer= (state= initState, action)=>{

    

    switch(action.type) {
        case "ADD-TO-CART":

            // let Cartt = state.Cart;
            // let CartItemIndex =  Cartt.findIndex(item => item.id === action.product.id);

            // if(CartItemIndex < 0){
            //     Cartt.push({...action.product, Quantity: 1});
            // }else{
            //     Cartt[CartItemIndex].Quantity+=1;
            // }

            // return {
            //     ...state,
            //     Cart: Cartt
            // };

            return state

          break;

        case "ADD-TO-CART-ERROR":
            console.log("create project error", action.err);
            return state;
              
        default:
          return state;
      }

    
}

export default CartReducer;