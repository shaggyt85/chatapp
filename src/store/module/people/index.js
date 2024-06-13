const module = {
  namespaced: true,
  state() {
    return {
      people: [
        { id: 1, name: "Tú", avatar: "/avatars/avatar.jpg" },
        { id: 2, name: "Jason", avatar: "/avatars/avatar-02.jpg" },
        { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
      ],
    };
  },
  getters: {
    getPeople: (state) => {
      return state.people;
    },
  },
};

export default module;
