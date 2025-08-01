export const GLOBAL_SALT = "addisongoolsbee-"; // just to make simple rainbow table lookups not work

export async function sha256(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(GLOBAL_SALT + input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const PBKDF2_ITERATIONS = 100_000;
const KEY_LENGTH = 256; // bits
const SALT_LEN = 16;
const IV_LEN = 12;

function hexToBytes(hex: string): Uint8Array {
  if (hex.length % 2) throw new Error("Invalid hex");
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

async function deriveKey(
  password: string,
  salt: Uint8Array
): Promise<CryptoKey> {
  const pwKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    pwKey,
    { name: "AES-GCM", length: KEY_LENGTH },
    false,
    ["decrypt"]
  );
}

/**
 * Decrypts hex blob (salt||iv||ciphertext||tag) with password.
 * Returns plaintext string or throws on failure.
 */
export async function decryptWithPassword(
  blobHex: string,
  password: string
): Promise<string> {
  const blob = hexToBytes(blobHex);
  if (blob.length < SALT_LEN + IV_LEN + 16) {
    throw new Error("Blob too short");
  }

  const salt = blob.slice(0, SALT_LEN);
  const iv = blob.slice(SALT_LEN, SALT_LEN + IV_LEN);
  const ciphertextPlusTag = blob.slice(SALT_LEN + IV_LEN); // includes tag

  const key = await deriveKey(password, salt);
  const plainBuf = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    ciphertextPlusTag
  );
  return new TextDecoder().decode(plainBuf);
}
