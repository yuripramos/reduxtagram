const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
    // return the new state with the new comment
    return [...state, {
      user: action.author,
      text: action.comment,
    }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)

      ]
    default:
      return state;
  }
  return state;
}

const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
