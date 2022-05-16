// const minusBtn = document.querySelector('.minus');
// const plusBtn = document.querySelector('.plus');
//
// minusBtn.addEventListener('click', () => {
//     const currentValue = totalProducts.value || 0;
//     if (currentValue) {
//         totalProducts.value = currentValue - 1;
//     }
// })
//
// plusBtn.addEventListener('click', () => {
//     const currentValue = totalProducts.value || 0;
//     totalProducts.value = currentValue + 1;
// })

function plusItem(id) {
    const totalProducts = document.getElementById('totalProduct' + id);
    const currentValue = totalProducts.value || 0;
    totalProducts.value = +currentValue + 1;
}
function minusItem(id) {
    const totalProducts = document.getElementById('totalProduct' + id);
    const currentValue = totalProducts.value || 0;
    console.log(currentValue)
    if (currentValue) {
        totalProducts.value = +currentValue - 1;
    }
}