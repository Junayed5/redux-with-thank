import { updateProduct } from "../../actions/productAction";

const updateProductData = (id, product) => {
    return async(dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`,{
            method: "PUT", 
            body: JSON.stringify(product),
            headers: {
                "Content-type" : "application/json"
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(updateProduct(data));
        }
    }
}

export default updateProductData;