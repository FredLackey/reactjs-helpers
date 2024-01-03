import { describe, expect, it } from '@jest/globals';
import { newUid } from "../";

describe("newUid function", () => {
  it("should return a string", () => {
    const result = newUid();
    expect(typeof result).toBe("string");
  });

  it("should return a string with 32 characters", () => {
    const result = newUid();
    expect(result.length).toBe(32);
  });

  it("should return a string containing only uppercase letters and digits", () => {
    const result = newUid();
    const regex = /^[A-Z0-9]+$/;
    expect(regex.test(result)).toBe(true);
  });

  it("should generate different UIDs on successive calls", () => {
    const uid1 = newUid();
    const uid2 = newUid();
    expect(uid1).not.toBe(uid2);
  });
});
