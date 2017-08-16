const type = '@test';

export function testAction(payload) {
  return {
    type,
    payload,
  };
}

export function test(state = false, action) {
  switch (action.type) {
    case type:
      return action.payload;
    default:
      return state;
  }
}
