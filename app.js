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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Naresh",
    age: 18,
    hobbies: ["programming", "anime"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
