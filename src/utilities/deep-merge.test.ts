import { describe, expect, it } from "vitest";

import deepMerge, { isObject } from "./deep-merge";

describe("isObject", () => {
  it("should return true for objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: "value" })).toBe(true);
  });

  it("should return false for non-objects", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject("string")).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});

describe("deepMerge", () => {
  it("should merge two simple objects", () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should deeply merge nested objects", () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: { x: 1, y: 3, z: 4 }, c: 5 });
  });

  it("should handle non-object source", () => {
    const target = { a: 1, b: 2 };
    const source = null;
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("should not mutate the target object", () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };
    const result = deepMerge(target, source);
    expect(result).not.toBe(target);
    expect(target).toEqual({ a: 1, b: { x: 1, y: 2 } });
  });

  it("should not mutate the source object", () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };
    const result = deepMerge(target, source);
    expect(result).not.toBe(source);
    expect(source).toEqual({ b: { y: 3, z: 4 }, c: 5 });
  });
});
