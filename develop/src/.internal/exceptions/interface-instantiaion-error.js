/**
 * @description it throws error stating interface can not be instantiated
 * @param {string} interface name of the interface
 */
export default (interface) => {
  throw new Error(interface + ' is an interface, cannot be instantiated');
}