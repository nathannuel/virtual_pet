var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pet = /** @class */ (function () {
    function pet(name, kesenangan, health) {
        this.name = name;
        this.health = health;
        this.kesenangan = kesenangan;
    }
    pet.prototype.makan = function (porsi) {
        this.health += porsi;
        this.kesenangan += porsi / 2;
        console.log("".concat(this.name, " makan ").concat(porsi, " porsi, kesehatan dan kesenangan bertambah menjadi ").concat(this.health, " dan ").concat(this.kesenangan));
    };
    return pet;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, kesenangan, health) {
        return _super.call(this, name, kesenangan, health) || this;
    }
    Cat.prototype.suaraKucing = function () {
        console.log("".concat(this.name, " bersuara meow..."));
    };
    return Cat;
}(pet));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, kesenangan, health) {
        return _super.call(this, name, kesenangan, health) || this;
    }
    Dog.prototype.suaraAnjing = function () {
        console.log("".concat(this.name, " bersuara guk...guk..."));
    };
    return Dog;
}(pet));
var cat1 = new Cat("Kitty", 50, 50);
var dog1 = new Dog("Doggy", 50, 50);
cat1.suaraKucing();
dog1.suaraAnjing();
cat1.makan(10);
dog1.makan(20);
