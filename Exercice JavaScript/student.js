// Création de l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modification des propriétés de l'objet
student.age = 21;
student.grade = "A";

// Manipulation du tableau courses
student.courses.push("Math", "Physics", "Chemistry");

let physicsIndex = student.courses.indexOf("Physics");
let firstTwoCourses = student.courses.slice(0, 2);

// Affichage des résultats
console.log("Objet student après modifications :", student);
console.log("Index de 'Physics' :", physicsIndex);
console.log("Les deux premiers cours :", firstTwoCourses);
