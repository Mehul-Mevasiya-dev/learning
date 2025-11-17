//  task-1

function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Mehul")); 

function add(a, b) {
  return a + b;
}
console.log("sum:", add(5, 3)); 

function square(n) {
  return n * n;
}
console.log(square(5));

// task-2

let arr = [10, 20, 30, 40, 50];

let first = arr[0];
let last = arr[arr.length - 1];

console.log(`first : ${first}`);
console.log(`last : ${last}`);

arr.push(60);
console.log("add:", arr);

arr.splice(1,1);
console.log("remove:", arr);

 function cla(arr) {
    if (arr.length === 0) {
      return 0;
    }
     let sum = 0;
     for (let i = 0; i< arr.length; i++){
      sum += arr[i];
     }
     return sum / arr.length;
 }

let average = cla(arr);
console.log("Average:", average);

const filteredarr = arr.filter(number=> number > 25);
console.log(filteredarr);

// object task

const student = {
    name:"vikram",
    age:25,
    city:"ahmedabad"
};


   for (let key in student){
    console.log(key + ":" + student[key]);
   }

   student.course = "Web Development";
   student.city = "surat";
   delete student.age;

   function printstudent(stu) {
      for (let key in stu) {
        console.log(key + ":" + stu[key]);
      }
   }
// task-4 

    function calculateTotal(m1, m2, m3) {
      const total = m1 + m2 + m3;
      const percentage = (total / 600) *100;

      let grade;

      if (percentage >= 80){
        grade = "A";
      } else if (percentage => 60) {
        grade = "B";
      } else if (percentage =>40) {
        grade = "c";
      }else{
        grade = "fail"
      }

      return {
        total: total,
        percentage:percentage.toFixed(2),
        grade: grade
      };
    }

    // task-5
function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 6,6];
const uniqueNumbers = removeDuplicatesWithSet(numbers);
console.log('uniqueNumbers:', uniqueNumbers); 

 const arr3 = [1, 2, 3];
 const arr4 = [4, 5, 6];
  const fArr = [...arr3, ...arr4];
   console.log("fArr-", fArr);