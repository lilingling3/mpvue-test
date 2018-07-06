
export default {
  addOne: (state, payload) => {
    const obj = state;
    obj.count += 1;
  },
  increment:(state, payload) => {
    const obj = state;
    obj.count += 1;
  },
  decrement:(state,payload) =>{
    const obj = state;
    obj.count -= payload;
  }
}