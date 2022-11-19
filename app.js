// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Naresh",
//   age: 18,
// };
var person = {
    name: "Naresh",
    age: 18,
    hobbies: ["programming", "anime"],
    role: [2, "author"]
};
person.role = [1, "Rimuru"];
var animes;
animes = [
    "attack on titan",
    "erased",
    "that time I got reincarnated as a slime",
];
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
