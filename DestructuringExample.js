/*
To prevent wasting time deciding which one to use, follow this strict community standard:

Need to extract data to verify it? Use Destructuring (const { status } = response;).

Need to duplicate test data to modify it? Use Spread (const badData = { ...goodData, error: true };).
*/

/*
DESTRUCTURING EXPLINATION:
Below You are telling JavaScript: "Look inside the object on the right side, 
find the properties with these exact names, and yank them out into their own standalone variables."
*/

const loginResponse = {
    status: 200,
    token: 'auth_token_xyz987',
    userId: 1045,
    lastLogin: '2026-02-21'
};

const { lastLogin, token } = loginResponse; //find the properties with these exact names, and put them out into their own standalone variables

console.log("LastLogin was:", lastLogin); 
console.log("Token is:", token);