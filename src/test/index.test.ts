import {factorial} from "../index"
import {describe, expect, test} from '@jest/globals';

describe("test add function", () => {
  test("should return 6 for factorial(3)", () => {
    expect(factorial(3)).toBe(6);
  });
  test("should return error", () => {
    expect(factorial(-1)).toBe(-1)
  });
});

// hello