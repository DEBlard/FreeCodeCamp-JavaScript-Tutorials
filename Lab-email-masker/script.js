function maskEmail(email) {

// Step 1: Find where the @ symbol is
const atIndex = email.indexOf("@");

// Step 2: Split username and domain
const domain = email.slice(atIndex);
const username = email.slice(0, atIndex);

// Step 3: Get first and last letters of username
const firstLetter = username.charAt(0);
const lastLetter = username.charAt(username.length -1);

// Step 4: Create asterisks for the middle
const mask = "*"
const asterisk = mask.repeat(username.length - 2);

// Step 5: Combine everything
return firstLetter + asterisk + lastLetter + domain

}

const email = "freecodecamp@example.com";
console.log(maskEmail(email));
