 /**
  * @license Apache-2.0
  * @version 1.0.0
  * @since 1.0.0
  * @author  Dip Bhattacharjee <dip686@gmail.com>
 */
import { INTERFACE, SERIALIZABLE } from '../.internal/constants/class-interface-literals';
import InterfaceInstantiationError from '../.internal/exceptions/interface-instantiaion-error';
/**
  * @interface  
  * @classdesc Serializability of a class is enabled by the class implementing the
  * Serializable interface.
 */
class Serializable {
  /**
   * @constructor
   */
  constructor () {
    InterfaceInstantiationError(SERIALIZABLE);
  }
  /**
   * @description This function is a sends type of the interface
   * @returns {string} returns type as interface
   */
  getType () {
    return INTERFACE;
  }
  /**
   * @description This function is a sends name of the interface
   * @returns {string} returns name as interface
   */
  getName () {
    return SERIALIZABLE;
  }
}
