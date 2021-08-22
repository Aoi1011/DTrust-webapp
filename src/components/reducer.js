export const initialState = [
  {
    type: 'paragraph',
    text: [{ annotations: {}, plain_text: '...Coming Soon...' }],
  }
];

export default function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return action.payload;
    case 'push':
      return [...state, action.payload];
    default:
      throw new Error();
  }
}