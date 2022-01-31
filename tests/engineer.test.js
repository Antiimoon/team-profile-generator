const Engineer = require('./lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {

        it("should initiate an object", () => {
            const obj = new Engineer();
            expect(typeof(obj)).toEqual("object");
        });
    });
t
    describe("Github", () => {
        it("should create new github", () => {
          const obj = new Engineer("Antii", 1011, "antii.moon@email", "Antiimoon");
          expect(obj.github).toEqual("Antiimoon");
        });
      });

    describe("getGithub", () => {
        it("can return gitHub username by getGithub method", () => {
          const obj = new Engineer("Antii", 1011, "antii.moon@email", "Antiimoon");
          expect(obj.getGithub()).toEqual("Antiimoon");
        });
    });

    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Engineer";
          const obj = new Engineer("Antii", 1011, "antii.moon@email", "Antiimoon");
          expect(obj.getRole()).toEqual(role);
        });
    });
});