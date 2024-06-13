const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: "Hola 👀",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 2,
          author: 2,
          message: "Holaaa!!!",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 3,
          author: 3,
          message: "Hola a todo el mundo 😊",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 4,
          author: 3,
          message: "¿Cómo están?",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 5,
          author: 1,
          message: "Todo muy bien :D",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 6,
          author: 2,
          message: "Si, todo bien.",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 7,
          author: 1,
          message: "Oigan, les escribo para contarles algo... 😌",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 8,
          author: 3,
          message: "A vers 👀",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 9,
          author: 2,
          message: "Ahhhh!!",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 10,
          author: 2,
          message: "¡Cuenta ese chismesito yaaaa!",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
        {
          id: 11,
          author: 1,
          message: "Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
        },
      ],
    };
  },
  getters: {
    getMessagesView: (state, getters, rootState, rootGetters) => {
      return state.messages?.map((message) => {
        const author = rootGetters["people/getPeople"].find(
          (p) => p.id === message.author
        );
        if (!author) return message;
        return {
          ...message,
          author,
          self: author.id === 1,
        };
      });
    },
  },
};

export default module;
