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


// Задание 2
let first = [1, 5, 12, 4, 3]
let second = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let third = [3, 10, 17]

function calculateAverage(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    console.log(average)
}

calculateAverage(first)
calculateAverage(second)
calculateAverage(third)