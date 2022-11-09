const Engineer = require("../lib/Engineer")

const name = "Justin"
const id = "12345"
const email = "justin@gmail.com"
const github = "JustinFlones"

const engineer = new Engineer(name, id, email, github)

describe("engineer", () => {
    it("Has the correct name", () => {
        expect(engineer.name).toBe(name)
    })
    it("Has the correct id", () => {
        expect(engineer.id).toBe(id)
    })
    it("Has the correct email", () => {
        expect(engineer.email).toBe(email)
    })
    it("Has the correct role", () => {
        expect(engineer.role).toBe("Engineer")
    })
    it("Has the correct github", () => {
        expect(engineer.github).toBe(github)
    })
    it("Gets the correct name", () => {
        expect(engineer.getName()).toBe(name)
    })
    it("Gets the correct id", () => {
        expect(engineer.getId()).toBe(id)
    })
    it("Gets the correct email", () => {
        expect(engineer.getEmail()).toBe(email)
    })
    it("Gets the correct role", () => {
        expect(engineer.getRole()).toBe("Engineer")
    })
    it("Gets the correct github", () => {
        expect(engineer.github).toBe(github)
    })
})