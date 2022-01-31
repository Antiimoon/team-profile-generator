const Employee = require('./lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
      it("should initiate an object", () => {
        const obj = new Employee();
        expect(typeof(obj)).toEqual("object");
      });
    });

    describe("Name", () => {
      it("should create new name", () => {
        const obj = new Employee("Antii");
        expect(obj.name).toEqual("Antii");
      });
    });

    describe("Id", () => {
      it("should create new id", () => {
        const obj = new Employee("Antii",1011);
        expect(obj.id).toEqual(1011);
      });
    });

    describe("Email", () => {
      it("should create new Email", () => {
        const obj = new Employee("Antii",1011, "antii.moon@email");
        expect(obj.email).toEqual("antii.moon@email");
      });
    });

    describe("getName", () => {
      it("can return name by getName method", () => {
        const obj = new Employee("Antii");
        expect(obj.getName()).toEqual("Antii");
      });
    });

    describe("getId", () => {
      it("can return id by getId method", () => {
        const obj = new Employee("Antii", 1011);
        expect(obj.getId()).toEqual(1011);
      });
    });

    describe("getEmail", () => {
      it("can return email by getEmail method", () => {
        const obj = new Employee("Antii", 1011, "antii.moon@email");
        expect(obj.getEmail()).toEqual("antii.moon@email");
      });
    });

    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";
        const obj = new Employee("Antii", 1011, "antii.moon@email");
        expect(obj.getRole()).toEqual(role);
      });
    });
});