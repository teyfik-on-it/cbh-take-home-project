const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const deterministicPartitionKey = (event) => {
  let candidate = event?.partitionKey ?? event ?? TRIVIAL_PARTITION_KEY;
  let hash = event === candidate;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (hash || candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

exports.deterministicPartitionKey = deterministicPartitionKey;
