
export const main = (args) => {
  // args[0] and args[1] are node and the filename respectively
  console.log(reverse(args[2]));

};

const reverse = (value) => [...value].reverse().join('');