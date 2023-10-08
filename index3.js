
const array = [1, 3, 2, 4, 5, 6, 50, 25, 100, 101, 99]

const sortArrays = (arr) => {
    let doneSorting = false
    console.log(arr)
    while(!doneSorting){
        let temp = 0
        doneSorting = true
        for(let i = 0; i < arr.length; i++){
            if(arr[i + 1] < arr[i]){
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                temp = 0
                doneSorting = false
            }
        }
    }
    console.log(arr)
}

sortArrays(array)