export const getUser = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  console.log(data, "api call!");
  return data;
};
