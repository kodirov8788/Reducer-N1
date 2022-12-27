import { createContext, useReducer } from "react";

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {

    const initialValue = [
        {
            id: 1,
            productTitle: "Olma"
        },
        {
            id: 2,
            productTitle: "Anor"
        }
    ]


    const reducer = (state, action) => {
        switch (action.type) {
            case "addProduct":
                return [...state, {
                    id: (state.length + 1),
                    productTitle: action.payload
                }]

            case "deleteProduct":
                return state.filter(product => product.id !== action.payload)
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue)

    return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
}


