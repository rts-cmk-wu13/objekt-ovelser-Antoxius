// Opg 3:
let students = [
  { name: "John", age: 25, course: "Webudvikler" },
  { name: "Jane", age: 22, course: "Mediegrafiker" },
  { name: "Peter", age: 24, course: "Teknisk designer" },
];

let studentsDivList = document.querySelector(".student-list");

students.forEach((student) => {
  let studentDiv = document.createElement("div");
  studentDiv.classList.add("student");
  let studentHeadline = document.createElement("h2");
  studentHeadline.textContent = student.name;
  let studentInfo = document.createElement("p");
  studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
  studentDiv.append(studentHeadline, studentInfo);
  studentsDivList.appendChild(studentDiv);
  // student.name + ', Alder: ' + student.age + ', Uddannelse: ' + student.course;
  console.log(studentInfo);
});


