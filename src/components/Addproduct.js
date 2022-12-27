import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function Addproduct() {
    const { state, dispatch } = useContext(ProductContext)
    // console.log(state)
    const [inputData, setInputData] = useState("")
    const SendProduct = () => {
        dispatch({
            type: "addProduct",
            payload: inputData
        })

    }
    const DeleteProduct = (id) => {
        dispatch({
            type: "deleteProduct",
            payload: id
        })
    }
    return (
        <div className=" mt-10">
            <input onChange={(e) => setInputData(e.target.value)} type="text" placeholder="text..." className="border border-black px-3 py-2 rounded-md text-2xl" />
            <button onClick={SendProduct} className="border border-black px-3 py-1 mt-5 rounded-md hover:bg-blue-500 hover:text-white duration-300">Add Product</button>
            <h1 className="mt-5 text-2xl font-semibold">Maxsulotlar</h1>
            {state.reverse().map(product => (
                <div className="" key={product.id}>
                    <h2>{product.productTitle}</h2>
                    <button className="bg-red-400 px-3 py-2 rounded-md hover:bg-red-500 active:scale-[0.95]" onClick={() => DeleteProduct(product.id)}>delete product</button>
                </div>
            ))}
        </div>
    );
}

export default Addproduct;