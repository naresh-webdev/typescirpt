// // const person: {
// //   name: string;
// //   age: number;
// // } = {
// //   name: "Naresh",
// //   age: 18,
// // };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Naresh",
//   age: 18,
//   hobbies: ["programming", "anime"],
//   role: [2, "author"],
// };

// person.role = [1, "Rimuru"];

// let animes: string[];
// animes = [
//   "attack on titan",
//   "erased",
//   "that time I got reincarnated as a slime",
// ];

// console.log(person.role);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

enum Role {
  ADMIN = 1, //default start at 0
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Naresh",
  age: 18,
  hobbies: ["programming", "anime"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
