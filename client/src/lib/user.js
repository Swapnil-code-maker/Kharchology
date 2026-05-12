export function getCurrentUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const user = localStorage.getItem(
    "kharchology-user"
  );

  return user ? JSON.parse(user) : null;
}

export function saveCurrentUser(user) {
  localStorage.setItem(
    "kharchology-user",
    JSON.stringify(user)
  );
}

export function logoutUser() {
  localStorage.removeItem(
    "kharchology-user"
  );
}