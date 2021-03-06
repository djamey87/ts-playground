const hasValidProp = (object: any) => {
    return object?.top?.middle?.bottom?.value !== undefined;
}

const example = {
    top: {
        middle: {
        }
    }
}

console.log(hasValidProp(example));