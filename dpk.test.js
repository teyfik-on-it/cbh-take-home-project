const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return hashed event object", () => {
    const output = deterministicPartitionKey({ lorem: "ipsum" });

    expect(output).toMatch(/^[\da-f]{128}$/);
  });

  it("should hash long partitionKey", () => {
    const input = {
      partitionKey:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus illo recusandae cum beatae alias reprehenderit dolore nemo labore, ullam, aliquam voluptatem? Tempore quia, aperiam earum magni at minima consequuntur! Similique doloremque explicabo est dignissimos debitis rerum ab rem.",
    };
    const output = deterministicPartitionKey(input);

    expect(output.length).toBeLessThanOrEqual(256);
  });

  it("should not hash short partitionKey", () => {
    const input = {
      partitionKey: "Lorem, ipsum dolor sit amet",
    };
    const output = deterministicPartitionKey(input);

    expect(output).toBe(input.partitionKey);
  });
});
