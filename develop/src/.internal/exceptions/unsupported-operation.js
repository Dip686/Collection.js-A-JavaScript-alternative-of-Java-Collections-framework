/**
 * @description it throws error stating the opeartion is not possible
 * @param {string} opeartionName name of the opeartionName which is dunsupported
 */
export default (opeartionName) => {
  throw new Error(opeartionName + ' is not supported');
}