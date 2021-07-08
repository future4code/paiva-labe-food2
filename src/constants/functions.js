export const fixPrice = (value) => {
    const num = value.toFixed(2).replace('.', ',')
    return num
}
