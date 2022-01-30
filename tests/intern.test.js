const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Intern();
            expect(typeof(obj)).toEqual("object");
        });
    });

    describe("School", () => {
        it("should create new School", () => {
          const obj = new Intern("Jane", 101, "jane@email.com", "UCR");
          expect(obj.school).toEqual("UCR");
        });
    });

    describe("getSchool", () => {
        it("can return school by getSchool method", () => {
          const obj = new Intern("Jane", 101, "jane@email.com", "UCR");
          expect(obj.getSchool()).toEqual("UCR");
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Intern";
          const obj = new Intern("Jane", 101, "jane@email.com", "UCR");
          expect(obj.getRole()).toEqual(role);
        });
    });
});