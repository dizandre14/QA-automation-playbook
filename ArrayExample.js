// Remember: Use Find ONLY when looking for ONE item out of a list


const activeUsers = [
  { id: 25, username: "John", isOnline: true },
  { id: 67, username: "jane", isOnline: false},
  { id: 25, username: "jim", isOnline: true }
];

const getUsers = activeUsers.filter((CreatedVariable) => 
 CreatedVariable.isOnline === true && CreatedVariable.id === 25).map((CreatedVariable) => CreatedVariable.username);

// const getUsers = activeUsers.find((CreatedVariable) => CreatedVariable.isOnline === true).username;


console.log("the users are: ", getUsers);