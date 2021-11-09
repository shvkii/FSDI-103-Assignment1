console.log("script")
var user="Shakita";
let age=99;//declaration and assign
age=32
let userName="Shakita"

let student;//declaration
student=true;//assign

console.log("student");
//annoying
/*console.log("Name: " + userName + "\nAge: " + age + "\nStudent: " + student);*/
//cool
/*let tmp=`Name: ${userName} \n Age:${age}  \nStudent: ${student}`;*/



//Exercise 1
let numberChildren=1;
let partnerName="Cory";
let geoLocation="Michigan";
let jobTitle="Influencer";

document.write(`<h3>You will be an ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kid.</h3>`)

let inputName="Shakita";
let emailAddress="shakita.thompson@gmail.com";
let passWord=12345678;
let ageYears=32;
let country="United States";
let annualSalary="75,000";
let hairColor="Brown"
let eyeColor="Brown"
let birthPlace="Cherry Point, North Carolina"
let numberofChildren="1"
let nameofChild="Adrianna"
let favoriteColor="teal"
let favoriteDrink="Coffee"
let favoriteFood="Lasagna"
let favoritePastime="Gaming & Binging Netflix"
let dreamVacation="Mykonos, Greece"
let favoriteplaceVisited="Dubai,UAE"
let futureGoals="Become a Multimillionaire"
let booksReading="It's All In Your Head, by RUSS"
let favoriteMovie="The Proposal"
let dreamJob="Working from Laptop anywhere I want"


console.log(`Name:  ${inputName}\nEmail: ${emailAddress}\nPassword: ${passWord}\nAge: ${ageYears}\nCountry: ${country}\nSalary: ${annualSalary}\nHair Color: ${hairColor}\nEye Color: ${eyeColor}\nBirth Place: ${birthPlace}\nNumber of Children: ${numberofChildren}\nName of Child: ${nameofChild}\nFavorite Color: ${favoriteColor}\nFavorite Drink: ${favoriteDrink}\nFavorite Food: ${favoriteFood}\nFavorite Pastime: ${favoritePastime}\nDream Vacation: ${dreamVacation}\nFavorite Place Visited: ${favoritePastime}\nFuture Goals: ${futureGoals}\nCurrently Reading: ${booksReading}\nFavorite Movie: ${favoriteMovie}\nDream Job: ${dreamJob}`)

document.write(`<h3> My name is ${inputName} my email address is  ${emailAddress}. I am ${ageYears} I live in the ${country}. I am a and I make ${annualSalary} a year. I have ${hairColor} hair and ${eyeColor} eyes. I was born on the Marine Corps base ${birthPlace}. I am a single mother and have  ${numberofChildren} child named ${nameofChild}. My favorite color is ${favoriteColor}. I just love the mixture of blue and green. I can't function without ${favoriteDrink}. My favorite food is ${favoriteFood} like Garfield. When I am not working or in class, I am usually  ${favoritePastime}. I am obsessed with Ryan Reynolds, so i love any movie he's in (even The Green Lantern) but my all time favorite is ${favoriteMovie} In the next year I hope to visit ${dreamVacation}. I really enjoyed visiting ${favoriteplaceVisited}. I cant wait to go back. Within the next 5 years I plan to ${futureGoals} & ${dreamJob}. The book I am currently reading is ${booksReading}. `)