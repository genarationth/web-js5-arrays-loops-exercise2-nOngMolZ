// part1
let queue = ["Sofia", "David", "Juan"];
console.log(queue); // Output: ["Sofia", "David", "Juan"]

// part2
queue.push("Sara");
queue.push("Agustin");
queue.shift();

console.log(queue); // Output: ["David", "Juan", "Sara", "Agustin"]

// part3
queue.splice(queue.indexOf("David") + 1, 0, "Renata");


queue.push("Elena");

console.log(queue); // Output: ["David", "Renata", "Juan", "Sara", "Agustin", "Elena"]
