"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./dog");
var cat_1 = require("./cat");
var doggy = new dog_1.Dog("doggy", 100, 100);
console.log(doggy.name);
var kitty = new cat_1.Cat("kitty", 100, 100);
console.log(kitty.name);
