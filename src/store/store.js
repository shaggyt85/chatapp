const store = {
  profile: {
    username: "",
  },
  contacts: [
    {
      id: 1,
      username: "User1",
    },
    {
      id: 2,
      username: "User2",
    },
  ],
  messages: [
    {
      id: 1,
      msg: "Hola",
      author: 1,
    },
    {
      id: 2,
      msg: "Hola2",
      author: 2,
    },
    {
      id: 3,
      msg: "Hola",
      author: 1,
    },
    {
      id: 4,
      msg: "Hola2",
      author: 2,
    },
  ],
  channels: [
    {
      id: 1,
      name: "canal 1",
      messages: [1, 2],
    },
    {
      id: 2,
      name: "canal 2",
      messages: [3, 4],
    },
  ],
};
