const addToCartFunc = (pre, cur) => {
    const productExist = pre.productName.find(
        (items) => items.id === cur.payload.id
    );
    return {
        ...pre,
        counter: pre.counter + 1,
        totalAmount: pre.totalAmount + cur.payload.price,
        productName: !productExist
            ? [
                  ...pre.productName,
                  {
                      id: cur.payload.id,
                      quant: 1,
                      price: cur.payload.price,
                      name: cur.payload.name
                  }
              ]
            : pre.productName.map((items) =>
                  items.id === cur.payload.id
                      ? { ...items, quant: items.quant + 1 }
                      : items
              )
    };
};

const removeFormCartFunc = (pre, cur) => {
    return {
        ...pre,
        counter: pre.counter - 1,
        totalAmount: pre.totalAmount - cur.payload.price,
        productName:
            cur.payload.quant > 1
                ? pre.productName.map((items) =>
                      items.id === cur.payload.id
                          ? {
                                ...items,
                                id: cur.payload.id,
                                quant: items.quant - 1
                            }
                          : items
                  )
                : pre.productName.filter((items) => items.id !== cur.payload.id)
    };
};

export const ReducerFunc = (pre, cur) => {
    switch (cur.type) {
        case "ADD_TO_CART":
            return addToCartFunc(pre, cur);
        case "REMOVE_FROM_CART":
            return removeFormCartFunc(pre, cur);

        default:
            return pre;
    }
};
