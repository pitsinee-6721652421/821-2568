//console.log("Hello world")
//console.log("this is a tast Java file")
//string number boolen Null Object Array
//รูปแบบการประกาศตัวแปร 
// etสามารถปรับเปลี่ยนค่าได้
/**let fname = "John";  //string
console.log("Name: ",fname);
const PI=3.14;  //const ค่าคงที่ ประกาศค่าไหน เก็บค่านั้น

let age =30;//number
let height=5.9;

//สามารถปรับเปลี่ยนค่าได้
fname = "Fanta";

console.log("Name: ",fname);
console.log("Age: ",age);
console.log("Height:",height)

/**
+ บวก
- ลบ
* คูณ
 / หาร
 %หารเอาเศษ
 let number1 = 10;  //'10' จะเป็นstring
 let number2 = 3;   //'3' จะเป็นstring จะไม่นำมาบวกจะจะต่อกันเป็น 103

 let resulit = number1 + number2
 console.log("ผลบวก =",resulit)

 == เท่ากับ
 =! ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้องกว่าหรือเท่ากับ
*/

//let number1 = 5;
//let number2 = 5;
//let condition number1 < number2 ;
//console.log("Congitio:",conditio); 

// if -else condition
/**if(number1 > number2) {
    console.log("this  is if!!")
} else if (number1 < number2){
    console.log("this  is else if!!")
}else{
    console.log("this  is else!!")
}
*/

//คำนวณเกรด

//let  score = 75 ;
/**
 
if (score >= 80){
    console.log(" เกรด A");
}else if (score >= 70){
    console.log("เกรด B");
}else if (score >= 60){
    console.log("เกรด C")
}else if (score >=50){
    console.log("เกรด D")
}else{
    console.log("เกรด F!!")
}
 */

/**
 * && และ
* || หรือ
* ! not หรือ ไม่
  */ 

/**let  number1 = 5
let number2 = 10

let conditio1 = (number1 > 0) && (number2>0) // true && true = true
console.log("conditio1: ",conditio1)
let conditio2 = (number1 > 0) || (number2>0) // true && true = true

let age = 25
let gender = "femaie"
if (age >= 18 && gender == "femaie"){
    console.log ="คุณสามารถเข้าได้"
}
    */

/**
 * 

let number1 =20
if (!(number1 % 2 == 0)){
    console.log("Even")
}
else{
    console.log("Odd")
}
 */

/**
 * Loop
 * while
 * for
 */

/**
 * 

let conter = 0
while (conter <= 5){
 conter+=1
 console.log("while",conter)
}

for (let i =0; i <=4 ; i= i + 1){
    console.log("for:",i);
}
 */

/**  Array
 * ตัวแปรตัวเดียวแต่หลายค่า

let a = 10
let b = 20
let c = 30

let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1,age2,age3) ///25 30 35

///   index  0  1 2 /// ตำแหน่งเรื่มต้นที่0
let ages = [25,30,35]
console.log(ages)  ///[25, 30, 35]
console.log(ages[1]) ///30

///แทนที่ค่าใน  Array
ages = [40,45,50]
console.log(ages)

ages.push(55)  ///เพิ่มตัวท้าย
console.log(ages)

///ความยาวของอาร์เรย
console.log(ages.length)

ages.pop(55)///ลบตัวท้าย
console.log(ages)

if (ages.includes(45)) {
    console.log("พน 45 ในอาเรย์");
}

let number =[50,60,40,30]
number.sort();///จัดเรียงข้อมูล น้อย-มาก
console.log(number)

let name = ["john" , "jane" , "Dom"]
name.push("smit")///เพิ่มตัวท้าย
console.log(name)
console.log(name.length)

console.log(name(0));
console.log(name(1));

for (let i = 0; i<name.length; i++){
    console.log(name[i]);

}
  */
 /**
  * oject
  
let age =30
let name ="Fanta"
let grade = 'A'

let age2=25, name2="Alice",grade='B'
  

let student =[{
    age: = 20,
    name: = "Emma"
    grade: = 'A'
},{
    age: = 25
    name: = "Lisa"
    grade: = 'B'

}];

for(let i =0; i< student.length;i++){
    console.log("Student: "+ (i+1)":")
    console.log("Name: "+student[i].name)
    console.log("Age:" + student[i].age)
    console.log("Grade:" + student[i].grade)

}

student.push{
    age: 21,
    name: "Olivia",
    grade: 'A'
}
console.log(student);
*/


/**
 * function

function calculate_grade(score) {
    let grade;
    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}
let student_score = 65;
let student_grade = calculate_grade(student_score);
console.log("Student's grade is " + student_grade);


let score = [10, 20, 30, 40, 50];

for (let i = 0; i < score.length; i++) {
    console.log(`Score at index ${i} is ${score[i]}`);
} */

/**score[0]= score[0] *2*/

/** 
//ทำทุกindex  
score = score.map((s) => {
    return s *2
})

score.forEach((s)  =>{
    console.log(` New scoee`,s)
})

let score =[10,20,30,40,50];
///let newscore =[ ]
for (let index = 0; index<score.length;i++){
    console.log(`score` ,score[index])
   /// if (score[index] >= 30){
        newscore.push(score[index])
    ///}
}*/

/**let newscore = score.filter((s) => {
    if ( s >= 30){
        return true;
    }
    return false;
})   /*

///console.log(`newscore :`,newscore)

/**newscore.forEach((ns) =>){
    console.log(`New score: `,ns)
})*/

let students = [
    {
        name: 'aa',
        score: 50,
        grade: 'A'
    },
    {
        name: 'bb',
        score: 60,
        grade: 'B'
    }
];

console.log('Student :', students[0]);

let student = students.filter((s) => {
    if (s.name == 'bb'){
        return true
    }


})
let doublescore_student = students.map((s) =>{
    s.score = s.score*2
    return s

})
console.log(`student: `,student)
console.log(doublescore_student)

let heightScore_student = students.filter((s) =>{
    if (s.score >= 110){
        return true
    }
})
console.log(`heightScore_student`,heightScore_student)



