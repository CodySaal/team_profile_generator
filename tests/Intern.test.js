const Intern = require("../lib/Intern")

const name = "Justin"
const id = "12345"
const email = "justin@gmail.com"
const school = "Madison"

const intern = new Intern(name, id, email, school)

describe("intern", () => {
    it("Has the correct name", () => {
        expect(intern.name).toBe(name)
    })
    it("Has the correct id", () => {
        expect(intern.id).toBe(id)
    })
    it("Has the correct email", () => {
        expect(intern.email).toBe(email)
    })
    it("Has the correct role", () => {
        expect(intern.role).toBe("Intern")
    })
    it("Has the correct school", () => {
        expect(intern.school).toBe(school)
    })
    it("Gets the correct name", () => {
        expect(intern.getName()).toBe(name)
    })
    it("Gets the correct id", () => {
        expect(intern.getId()).toBe(id)
    })
    it("Gets the correct email", () => {
        expect(intern.getEmail()).toBe(email)
    })
    it("Gets the correct role", () => {
        expect(intern.getRole()).toBe("Intern")
    })
    it("Gets the correct school", () => {
        expect(intern.school).toBe(school)
    })
})