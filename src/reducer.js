
export const initialState = {
    basket: [
            {
                    id:"2", 
                    title:"Amazon Echo Plus 2",
                    price:133000,
                    rating:5,
                    image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/T/174379_1618588888.jpg"

                    
            },
            {
                    id:2, 
                    title:"Amazon Echo Plus 2",
                    price:133000,
                    rating:5,
                    image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/T/174379_1618588888.jpg"
            }
        ],
    user: null,
};

//selector
export const getBassketTotal= (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action); 
  switch (action.type) {
     case 'ADD_TO_BASKET':
         return {
             ...state,
             basket: [...state.basket, action.item]
            }; 
        case 'REMOVE_FROM_BASKET':

        //cloned a basket
            let newBasket = [...state.basket];
        
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            
            if (index >= 0){
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `cant remove product {id: ${action.id}} as its not found`
                )
            }
                return {
                    ...state, 
                    basket: newBasket,
                };
     default:
         return state;
 }
}

export default reducer;