import { loadSingleProducts } from "../../actions/productAction";

const loadSingleData = (id) => {
    return async(dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`);
        const data = await res.json();

        if (data._id === id) {
            dispatch(loadSingleProducts(data))
        }
    }
}

export default loadSingleData