const person = {
  firstName: "Bishwas",
  lastName: "Koirala",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') 
      throw new Error('Value is not a string');
    
    const parts = value.split(' ');

    if (parts.length !== 2) 
      throw new Error("Enter a first and last name");
    
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = null; 
} catch (error) {
  console.log(error);
}

console.log(person);
