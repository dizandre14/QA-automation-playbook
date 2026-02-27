import { generateTestEmail } from './qa-helpers.js';

const newEmail = generateTestEmail();
console.log("Registering new user with:", newEmail);