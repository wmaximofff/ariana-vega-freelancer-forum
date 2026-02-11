/**
1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
3. Write a function that returns the average rate of all freelancers in state.
4. Use that function to initialize a state variable which will store the average rate of all freelancers.
5. Write a component function to represent a single freelancer.
6. Write a component function to represent an array of freelancers.
7. Write a component function to represent the average rate of all freelancers.
8. Write and call a render function that will mount the application onto the document. */



/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

return {Freelancer}
function makeFreelancer() {
  const name = sample(NAMES);
  
  const occupation = sample(OCCUPATIONS);
  
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };

}

return {number}
function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0
  );
  
  return total / freelancers.length;

}

return
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];

}


function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
  `;
  return $tr;

}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  
  return $tbody;

}

function AverageRate() {
  const $p = document.createElement("p");
  $p.innerHTML = `The average rate is $${getAverageRate().toFixed(2)}.`;
  return $p;

}


function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();