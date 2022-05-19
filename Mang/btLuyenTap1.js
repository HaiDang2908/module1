
function Bai1 () {

    let arr = [ 0,3,7,-1,14,20,30,1,2,22]
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10){
            arr2.push(arr[i])
        }
    }
    console.log(arr2)
}

function Bai2() {

    let arr = [ 0,3,7,-1,14,20,30,1,2,22]
     index = 0
     max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i]
            index = i
        }
    }
    document.write("số lớn nhất là : " + max + "vị trí phần tử đó: "+ index)

}

function Bai3() {

    let arr = [0, 3, 7, 1, 14, 20, 30, 1, 2, 22]
    max = 0
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    document.write("số lớn nhất là : " + max)
    let n = arr.length
    let tb = total / n
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    document.write("Trung bình là :" + tb)


}

function Bai5() {

    let arr = [0, -3, 7, -1, 14, -20, 30, -5, 2, -22]
     let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr2.push(arr[i])
        }

    }
    console.log(arr2)
}

function Bai6() {


}