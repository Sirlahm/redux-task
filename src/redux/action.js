export const addItem = (item,id) => ({
    type :  'ADD_ITEM',
    payload: {id: id ||  Math.random() * 100, ...item}
})

export const toggle = () => ({type: "TOGGLE"})
export const editMode = (item) => ({type: "EDIT_MODE", payload: item})
export const deleteItem = (item) => ({type: "DELETE_ITEM", payload: item})