import { TYPES } from "./types"


export const AddNewProduct = (product) => (dispatch) => {
  dispatch({
    type: TYPES.ADD_NEW_PRODUCT,
    product
  })
}

export const Delete = (id) => (dispatch) => {
  dispatch({
    type: TYPES.DELETE_PRODUCT,
    id
  })
}