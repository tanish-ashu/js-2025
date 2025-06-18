const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tanishk"
}

 
console.log(course.courseInstructor);  

const {courseInstructor: instructor} = course; 
// this extracts the keys, value in the seperate so that not need to access each time using operator.

console.log(instructor);

// later used in props in react ... destructuring 

const navbar = ({company}) => {

}

navbar(company = "hitesh")

// ======================================  API - > values comes from backend ===============
// previous they used to come in XML format, but now it comes in JSON format.

// object here has no name treated as JSON  && keys here are usually string, and value also string

// {
//     "name": "tanishk",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]