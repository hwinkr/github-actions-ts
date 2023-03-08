import {add, factorial} from "../src"
import {describe, expect, test} from '@jest/globals';

describe("test add function", () => {
  test("should return 15 for add(10,5)", () => {
    expect(factorial(3)).toBe(6);
  });
  test("should return 5 for add(2,3)", () => {
    expect(factorial(-1)).toThrow('incorrect Input : this function only accept positive number');
  });
});