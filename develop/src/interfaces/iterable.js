/**
 * @license Apache-2.0
 * @version 1.0.0
 * @since 1.0.0
 * @author Sourav Debnath <sourav2012d@gmail.com>
 */
import {
  INTERFACE,
  ITERABLE
} from "../.internal/constants/class-interface-literals";
import InterfaceInstantiationError from "../.internal/exceptions/interface-instantiaion-error";
/**
 * @interface
 * @classdesc Implementing this interface allows an object to be the target of the "for-each loop" statement
 */
export default class Iterable {
  /**
   * @constructor
   */
  constructor() {
    InterfaceInstantiationError(ITERABLE);
  }
  /**
   * @description This function sends the type of the interface
   * @returns {string} returns type as interface
   */
  getType() {
    return INTERFACE;
  }
  /**
   * @description This function sends the name of the interface
   * @returns {string} returns name as interface
   */
  getName() {
    return ITERABLE;
  }
}
