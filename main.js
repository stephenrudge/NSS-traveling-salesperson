// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [45, 15, 30, 20]

// Declare a variable to store the total. Initial value is 0.
 let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const item of weeklyMiles) {
    totalMiles+= item;
     
}
console.log(totalMiles);

// Declare a new variable to store the average miles over time

// Output the average miles and the total miles to the console
// console.log()