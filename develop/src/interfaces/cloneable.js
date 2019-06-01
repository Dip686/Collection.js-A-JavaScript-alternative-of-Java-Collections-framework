/**
 * @license Apache-2.0
 * @version 1.0.0
 * @since 1.0.0
 * @author Sourav Debnath <sourav2012d@gmail.com>
 */
import {
  INTERFACE,
  CLONEABLE
} from "../.internal/constants/class-interface-literals";
import InterfaceInstantiationError from "../.internal/exceptions/interface-instantiaion-error";
/**
 * @interface
 * @classdesc Cloneable interface marks a class as "cloneable", which basically indicates that
 * it is completely legal for Object.clone() method to make a field-for-field copy of instances of that class.
 */
export default class Cloneable {
  /**
   * @constructor
   */
  constructor() {
    InterfaceInstantiationError(CLONEABLE);
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
    return CLONEABLE;
  }
}
