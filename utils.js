async function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

async function getUser(id) {
  try {
    const response = await fetch(`https://api.example.com/user/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

module.exports = { add, getUser };
