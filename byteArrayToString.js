// Creating new byte array using
// Uint8Array instance
let byteArray = new Uint8Array([
	74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
]);

// Creating textDecoder instance
let decoder = new TextDecoder("utf-8");

// Using decode method to get string output
let str = decoder.decode(byteArray);

// Display the output
console.log(str);
