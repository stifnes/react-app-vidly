import { promote } from "./teacher";

const square = number => number * number;
console.log(square(55));

const jobs = [
  { id: 5, isActive: true },
  { id: 5, isActive: true },
  { id: 5, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);

console.log(activeJobs);

const colors = ["red", "black", "green"];
const items = colors.map(color => `<li>${color}</li>`);

console.log(items);

const address = {
  street: "",
  city: "",
  country: ""
};

const { street: st } = address;

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, "a", ...second, 10];
const clone = [...first];

console.log("cloned", clone);

const teacher = new Teacher("Mosh", "MSc");

teacher.teach();
