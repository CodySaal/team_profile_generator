const Manager = require("../lib/Manager")

const name = "Justin"
const id = "12345"
const email = "justin@gmail.com"
const officeNumber = "301"

const manager = new Manager(name, id, email, officeNumber)

describe("manager", () => {
    it("Has the correct name", () => {
        expect(manager.name).toBe(name)
    })
    it("Has the correct id", () => {
        expect(manager.id).toBe(id)
    })
    it("Has the correct email", () => {
        expect(manager.email).toBe(email)
    })
    it("Has the correct role", () => {
        expect(manager.role).toBe("Manager")
    })
    it("Has the correct office number", () => {
        expect(manager.officeNumber).toBe(officeNumber)
    })
    it("Gets the correct name", () => {
        expect(manager.getName()).toBe(name)
    })
    it("Gets the correct id", () => {
        expect(manager.getId()).toBe(id)
    })
    it("Gets the correct email", () => {
        expect(manager.getEmail()).toBe(email)
    })
    it("Gets the correct role", () => {
        expect(manager.getRole()).toBe("Manager")
    })
})