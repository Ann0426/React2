export const initialState = {
    userProfile:[{userName:"",firstName:"",
    lastName: "",
    email:"",
    gender:"",
    age:"",address:""
    ,city : "",state:"",zip:"",phone:"",card_no : "",cvv:"",
    balance:10000,}],

    user: null,
    basket:[],
};

// Selector
// export const getbalance = (basket,userProfile) => userProfile[0].balance -
// basket.reduce( ((amount, item) => item.amountinUSD + amount),0);

const reducer = (state, action) => {
  
 
    switch (action.type) {
        case "ADD_TO_BASKET":
            const balance = parseInt(state.userProfile[0].balance) - action.item.amountinUSD

            delete(state.userProfile.balance)
            state.userProfile[0].balance = balance
            
            return {
                ...state,
                basket: [...state.basket, action.item],
                userProfile:[...state.userProfile]
            };
        case 'save_Profile':
            return {
                ...state,
                userProfile: [action.userProfile],
                
            }
        case "Remove_From_BASKET":
            const balance1 = parseInt(state.userProfile[0].balance) + parseInt(action.item.amountinUSD)

            delete(state.userProfile.balance)
            state.userProfile[0].balance = balance1
            
            return {
                ...state,
                basket: [...state.basket, action.item],
                userProfile:[...state.userProfile]
            };
        // case "REMOVE_FROM_BASKET":
        //     const index = state.basket.findIndex(
        //         (basketItem) => basketItem.name === action.name
        //     );
        //     let newBasket = [...state.basket];

        //     if (index >= 0) {
        //         newBasket.splice(index, 1);

        //     } else {
        //         console.warn(
        //             `Cant remove product (id: ${action.name}) as its not in basket!`
        //         )
        //     }

        //     return {
        //         ...state,
        //         basket: newBasket
        //     }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;