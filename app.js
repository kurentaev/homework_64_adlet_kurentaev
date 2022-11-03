// Задание 1
const products = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']

function productReview(products) {
    for (let product of products) {
        if (product === 'молоко') {
            console.log('хорошо')
        } else {
            console.log('плохо')
        }
    }
}

productReview(products)