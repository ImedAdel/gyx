import prompts from "prompts"

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: (value:number) => value < 18 ? `Nightclub is 18+ only` : true
  });
 
  console.log(response); // => { value: 24 }
})();

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
