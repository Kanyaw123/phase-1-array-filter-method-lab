function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
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
  