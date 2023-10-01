

const array = [4, 5, 16, 7, 8, 19, 11]
const array2 = [11, 19, 8, 7, 16, 5, 4]

const sortArray = (arr) => {
    console.log("before: ", arr)
    let temp = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            temp = arr[i-1]
            arr[i-1] = arr[i]
            arr[i] = temp
            temp = 0
        }
    }
    console.log("after: ", arr)
}

// sortArray(array)
sortArray(array2)