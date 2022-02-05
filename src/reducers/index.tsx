


const events = (state: RioEvent[] = [], action: Action) => {
  switch(action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body }
      const length = state.length;
      const id = length  === 0 ? 1 : state[length].id + 1;
      return [...state, event];
    case "DELETE_EVENT":

    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
}

export default events;