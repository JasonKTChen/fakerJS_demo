const { faker } = require("@faker-js/faker");

// random number
let number = faker.random.numeric();
console.log(number);

let uuid = faker.datatype.uuid();
console.log(uuid);

let word = faker.random.word();
console.log(word);

let words = faker.random.words(6);
console.log(words);


// date 
let futureDate = faker.date.future();
let recentDate = faker.date.recent();
let weekday = faker.date.weekday();


// create user profile
function createRandomUser() {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);

  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

let users = []

for (let i=1; i <= 1000; i++) {
  users.push(createRandomUser());
}

fs.writeFileSync('users_1000.json', JSON.stringify(dataObj, null, '\t'));


