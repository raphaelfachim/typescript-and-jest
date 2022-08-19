import { sum } from "../src";

describe("Initial tests", () => {
  it("Should pass", () => {
    expect(1).toBe(1);
  })

  it("Should sum 1 and 2, and return 3", () => {
    expect(sum(1,2)).toBe(3);
  })
})