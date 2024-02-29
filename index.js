// Function to find drivers that match the provided name
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Function to check if a name matches any driver's name in the data structure
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Example usage:
  const drivers = [
    "John",
    "Mary",
    "Jane",
    "Bob",
    { name: "John", age: 30 },
    { name: "Mary", age: 25 },
    { name: "Jane", age: 28 },
    { name: "Bob", age: 35 }
  ];
  
  console.log(findMatching(drivers.slice(0, 4), "john")); // Output: ["John"]
  console.log(fuzzyMatch(drivers.slice(0, 4), "Ma")); // Output: ["Mary"]
  console.log(matchName(drivers.slice(4), "John")); // Output: [{ name: "John", age: 30 }]
  