// getters => access properties
// setters => change / mutate properties

const person = {
  firstName : "Bishwas" , 
  lastName : "Koirala",
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(" ")
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

person.fullName = "Mosh Son"

console.log(person)

