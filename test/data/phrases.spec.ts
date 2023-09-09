import { assert } from "chai";

import { phrases } from "../../src/data/phrases";

suite("phrases", () => {
  test("should be unique", () => {
    const set = new Set(phrases);
    assert.lengthOf(phrases, set.size, "phrases are not unique!");
  });

  test("should have {name} in each phrase", () => {
    const filtered = phrases.filter((phrase) => !phrase.includes("{name}"));
    assert.isEmpty(filtered, `Found bad phrases: ${filtered.join(", ")}`);
  });
});
