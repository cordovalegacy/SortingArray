
const array = [1, 4, 5, 9, 8, 4, 3, 2]

const sortArray = (arr) => {
    let isSwapping = true
    let temp = 0
    console.log(arr)
    while (isSwapping) {
        isSwapping = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                temp = 0
                isSwapping = true
            }
        }
    }
    console.log(arr)
}

sortArray(array)
