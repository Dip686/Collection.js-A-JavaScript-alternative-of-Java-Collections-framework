/**
 * @description it throws error stating to override the declared function in interfaces
 * @param {string} functionName name of the function which is declared but not yet defined
 */
export default (functionName) => {
  throw new Error(functionName + ' is declared, please provide the function definition');
}