import { TOGGLE_BRAND } from "../actionTypes/actionTypes"

export const toggleBrand = (brand) => {
    return {
        type: TOGGLE_BRAND,
        payload: brand
    }
}