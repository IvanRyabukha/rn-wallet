// lib/utils.js
export function formatDate(dateString: string | number | Date) {
  // format date nicely
  // example: from this 👉 2025-05-20 to this 👉 May 20, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function isFirebaseAuthError(error: unknown): error is { code: string; message: string} {
  return (
    typeof error === 'object' &&
    error !== null &&
    "code" in error &&
    "message" in error
  );
}

