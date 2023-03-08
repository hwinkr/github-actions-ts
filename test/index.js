"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../src/calc");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("test add function", () => {
    (0, globals_1.test)("should return 15 for add(10,5)", () => {
        (0, globals_1.expect)((0, calc_1.add)(10, 5)).toBe(15);
    });
    (0, globals_1.test)("should return 5 for add(2,3)", () => {
        (0, globals_1.expect)((0, calc_1.add)(2, 3)).toBe(5);
    });
});
