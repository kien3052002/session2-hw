// 1)
//     1.
//     - var, const là các từ khóa khai báo biến
//     - var khai báo biến toàn cục, let khai báo biến cục bộ
//     - let khai báo biến có thể thay đổi giá trị, const khai báo biến hằng
//     - const dùng để khai báo các giá trị cụ thể không thay đổi trong suốt quá trình chạy
//       let khai báo các biến để làm việc trong phạm vi nhỏ
//       var khai báo biến quan trọng dùng xuyên suốt trong chương trình  
  
// 2)
//     1. boolean là kiểu biến cơ bản, chỉ các giá trị logic đúng hoặc sai 
//     2. biến boolean có 2 giá trị true (các giá trị khác 0) và false (giá trị 0)

// 3)
    // a)
    // for(let i = 0; i < 7; i++){
    //     console.log(i);
    // }

    // b)
    // let n = Number(prompt("Enter number n"));
    // for(let i = 0; i < n; i++){
    //     console.log(i);
    // }

    // c)
    // let n=Number(prompt("Enter number n"));
    // for(let i = 3; i < n; i++){
    //     console.log(i);
    // }

    // d)
    // let c = Number(prompt("Enter number c"));
    // let n = Number(prompt("Enter number n"));
    // for(let i = c; i < n; i++){
    //     console.log(i);
    // }

    // e)
    // let c = Number(prompt("Enter number c"));
    // let n = Number(prompt("Enter number n"));
    // for(let i = c; i < n; i+=3){
    //     console.log(i);
    // }

    // f)
    // let c = Number(prompt("Enter number c"));
    // let n = Number(prompt("Enter number n"));
    // let s = Number(prompt("Enter number s"));
    // for(let i = c; i < n; i+=s){
    //     console.log(i);
    // }


// 4)
    // let n = Number(prompt("Enter number n"));
    // let m = 1;
    // for(let i = 1; i <= n; i++) m = m * i;
    // console.log(`The factorial of ${n} is ${m}`);

// 5)
    // let age = Number(prompt("Enter your age"));
    // let check = " ";
    // if(age < 14) check = " not ";
    // console.log(`You are${check}old enough to view this content`);

// 6) 
    // let n = Number(prompt("Enter number n"));
    // let check = "";
    // if(n <= 4) check = "Lower half of 9";
    // else check = "Higher half of 9";
    // console.log(check);

// 7)
    // let n = Number(prompt("Enter number n"));
    // let x = Number(prompt("Enter number x"));
    // let half = (x+1)/2;
    // if(n >= half) console.log(`${n} is in higher half of ${x}`);
    // else console.log(`${n} is in higher half of ${x}`);

// 8)
    // let n = parseInt(prompt("Enter a number"));
    // if(n % 2) console.log(`${n} is an odd number`);
    // else console.log(`${n} is an even number`);

// 9) 
    // a)
    // console.log("3 L");
    // console.log("3 H");

    // b)
    // let n = Number(prompt("Enter the number of L's and H's"));
    // let n_L = (n+1)/2;
    // let n_H = n-n_L;
    // console.log(`${n_L} L`);
    // console.log(`${n_H} H`);

    // c)
    // for(let i = 0; i < 8; i++){
    //     if(i % 2) console.log(1);
    //     else console.log(0);
    // }

    // d)
    // let n = Number(prompt("Enter number n"));
    // for(let i = 0; i < n; i++){
    //     if(i % 2) console.log(1);
    //     else console.log(0);
    // }

// 10)
    // let w = parseFloat(prompt("Your weight in kg"));
    // let h = parseFloat(prompt("Your height in cm"));
    // h = (h/100);
    // let BMI = w/(h*h).toFixed(1);
    // alert(`Your BMI is ${BMI}`);
    // let diagn;
    // if(BMI < 16) diagn = "severely underweight";
    // else if(BMI <= 18.5) diagn = "underweight";
    // else if(BMI <= 25) diagn = "normal";
    // else if(BMI <= 30) diagn = "overweight";
    // else diagn = "obese";
    // alert(`You are ${diagn}`);


// 11)
//     a)
//     function demo(){
//         reset();
//         for(let i = 0; i < 4; i++){
//             fd(100);
//             right(90);
//         }
//     }

//     b)
//     function demo(){
//         reset();
//         for(let i = 0; i < 3; i++){
//             fd(100);
//             right(120);
//         }
//     }

//     c)
//     function demo(){
//         reset();
//         for(let i = 0; i < 5; i++){
//             fd(100);
//             right(72);
//         }
//     }

//     d)
//     function demo(){
//         reset();
//         for(let i = 0; i < 6; i++){
//             fd(100);
//             right(60);
//         }
//     }
  

// 12)
// function demo(){
//     reset();
//     let edge = Number(prompt("Enter number of edges"));
//     for(let i = 0; i < edge; i++){
//         fd(500/edge);
//         right(360/edge);
//     }
// }

// 13)
// function demo(){
//     reset();
//     let n = Number(prompt("Enter number of polygons"));
//     let edge = 3;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < edge; j++){
//             fd(70);
//             right(360/edge);
//         }
//         edge++;
//     }
// }