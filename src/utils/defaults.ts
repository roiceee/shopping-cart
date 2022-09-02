const defaultItemObject : ItemObject = {
    id: "",
    name: "",
    src: "",
    stars: 0,
    price: 0,
}

const defaultCartItemObject : CartItemObject = {
    item: defaultItemObject,
    quantity: 0,
}

const defaultCartObject : CartObject = {
    items: []
}

export {defaultItemObject, defaultCartItemObject, defaultCartObject}