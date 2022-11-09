const Employee = require("../lib/Employee")

const name = "Justin"
const id = "12345"
const email = "justin@gmail.com"

const employee = new Employee(name, id, email)

describe("employee", () => {
    it("Has the correct name", () => {
        expect(employee.name).toBe(name)
    })
    it("Has the correct id", () => {
        expect(employee.id).toBe(id)
    })
    it("Has the correct email", () => {
        expect(employee.email).toBe(email)
    })
    it("Has the correct role", () => {
        expect(employee.role).toBe("Employee")
    })
    it("Gets the correct name", () => {
        expect(employee.getName()).toBe(name)
    })
    it("Gets the correct id", () => {
        expect(employee.getId()).toBe(id)
    })
    it("Gets the correct email", () => {
        expect(employee.getEmail()).toBe(email)
    })
    it("Gets the correct role", () => {
        expect(employee.getRole()).toBe("Employee")
    })
})