const exersice1 = num => {
    if (num === 0) {
        return 0;
    }

    return num +  exersice1(num - 1);
}

const exersice2 = (base, height) => {
    return (base * height) / 2;
}
const exersice3 = arr => {
    let counter = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i]) counter ++;
    }
    return counter; 
}

const exersice4 = (object) => {
    let arr;
    

}

// let person = {
//     1:  'munktergel',
//     2: 'dsd',
//     3: 'dadsd'
// }

const exersice5 = (num, num1) => {
    let arr = [];
    for (let i = 1; i <= num1; i ++) {
        arr.push (num * i);
    }
    return arr;
}

const exersice6 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum = sum + (arr[i][0] * arr[i][1] * arr[i][2]);
    }
    return sum;
}


const exersice7 = arr => {
    let sum = 0; 
    for (let i = 0; i < arr.length; i ++) {
     sum = sum + (i * arr[i]);
    }
  return sum;
}

const exersice8 = arr => {
    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 === 0) {
            if (arr[i] % 2 !== 0) {
                return false;
            }
        }
        else {
            if (arr[i] % 2 !== 1) {
                return false;
            }
        }
    }
    return true;
}

const exersice9 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].constructor.name == "Number")  {
            sum = sum + arr[i];
        }
    }
    return sum;
}

const exersice10 = arr => {
    let brr = [];
    for (let i = 0; i < arr.length - 1; i ++) {
        brr = brr.concat(arr[i]);
    }
    brr =  brr.join("");

    if (brr ==  arr[arr.length-1]) {
        return true;
    } else return false;   
}

const exersice11 = stringNum => {
    let sum = 0;
    for (let  i = 0; i < stringNum.length; i ++) {
        if (parseInt(stringNum[i]) % 2 === 0) {
            sum = sum + parseInt(stringNum[i]);
        }
        else {
            sum = sum - parseInt(stringNum[i]);
        }
    }
    if (sum === 0) {
        return `Тэнцүү`;
    }else {
        if (sum > 0) {
            return `Тэгш цифрүүдийн нийлбэр их`;
        }
        else return `Сондгой цифрүүдийн нийлбэр их`;
    }
}