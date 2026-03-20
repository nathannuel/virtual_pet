"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pet = void 0;
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
exports.pet = pet;
