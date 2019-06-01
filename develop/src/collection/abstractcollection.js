/**
 * @license Apache-2.0
 * @version 1.0.0
 * @since 1.0.0
 * @author  Dip Bhattacharjee <dip686@gmail.com>
 */
import {
  ADD,
  ITERATOR,
  SIZE
} from "../.internal/constants/function-name-literals";
import {
  CLASS,
  ABSTRACTCOLLECTION
} from '../.internal/constants/class-interface-literals';
import overRideFunctionDeclaration from '../.internal/exceptions/override-function-declaration';
import UnsupportedOperationException from '../.internal/exceptions/unsupported-operation';
/**
 * @class
 * @classdesc This class provides a skeletal implementation of the {@code Collection}
 * interface, to minimize the effort required to implement this interface.
 */
export default class AbstractCollection {
  /**
   * @constructor
   */
  constructor() {

  }
  /**
  * @description This function is a sends name of the interface
  * @returns {string} returns name as interface
  */
  getName() {
    return ABSTRACTCOLLECTION;
  }
  /**
  * @description This function is a sends type of the interface
  * @returns {string} returns type as interface
  */
  getType() {
    return CLASS;
  }
  /**
   * @description Returns the number of elements in this collection
   * @return the number of elements in this collection
   */
  size() {
    overRideFunctionDeclaration(SIZE);
  }
  /**
  * @description Returns an iterator over the elements in this collection.  There are no
  * guarantees concerning the order in which the elements are returned
  * (unless this collection is an instance of some class that provides a
  * guarantee).
  *
  * @return an {@code Iterator} over the elements in this collection
  */
  iterator() {
    overRideFunctionDeclaration(ITERATOR);
  }
  /**
   * @description This function returns {@code true} when the size is 0
   * @returns This function returns {@code true} when the size is 0
   */
  isEmpty() {
    this.size() === 0;
  }
  /**
   * @description Verifies whether the collecion object holds the passed object
   * @param {Object} Obj Obejct passed to check whether Collection contains it or not
   * @return {@code true} if the element is present in the Collection Object
   */
  contains(Obj) {
    let dataStoreInstances = this.dataStoreInstances;
    for (const key in dataStoreInstances) {
      if (dataStoreInstances.hasOwnProperty(key)) {
        if (dataStoreInstances[key] === Obj) return true;
      }
    }
    return false;
  }
  /**
  * @description This implementation returns an array containing all the elements
  * returned by this collection's instance, in the same order, stored in
  * consecutive elements of the array, starting with index {@code 0}.
  * @returns {Array} holding the array form of the dataStore
  */
  toArray() {
    let arr,
      dataStoreInstances = this.dataStoreInstances;
    for (const key in dataStoreInstances) {
      if (dataStoreInstances.hasOwnProperty(key)) {
        arr.push(dataStoreInstances[key]);
      }
    }
    return arr;
  }
  /**
  * @description This implementation always throws an UnsupportedOperationException
  * @throws{@code UnsupportedOperationException}.
  */
  add() {
    throw new UnsupportedOperationException(ADD);
  }
  /**
  * @description This implementation iterates over the collection looking for the
  *specified element.  If it finds the element, it removes the element
  * from the collection
  * @param {Object} Obj is the object instance that needs to be removed
  * @returns it returns {@code true} if the element is successfully removed
  ß*/
  remove(Obj) {
    let dataStoreInstances = this.dataStoreInstances;
    for (const key in dataStoreInstances) {
      if (dataStoreInstances.hasOwnProperty(key)) {
        if (dataStoreInstances[key] === Obj) {
          delete dataStoreInstances[key];
          return true;
        }
      }
    }
    return false;
  }
  /**
   * @description This function verifies whether the current state holds all the objects passed in the parameter
   * @param {Object} Objs holds list of Objects of dataStore
   * @returns returns {@code true} if The latest state holds all the Objects provided in the List
   */
  containsAll(Objs) {
    for (const key in Objs) {
      if (Objs.hasOwnProperty(key)) {
        if (!this.contains(Objs[key])) return false;
      }
    }
    return true;
  }
  /**
   * @description This implementation iterates over the specified collection, and adds each object 
   * @param {Object} Objs holds list of Objects of dataStore
   * @returns returns {@code true} if either element is added successfully
   */
  addAll(Objs) {
    let modfied = false;
    for (const key in Objs) {
      if (Objs.hasOwnProperty(key)) {
        if (this.add(Objs[key])) modfied = true;
      }
    }
    return modfied;
  }
  /**
   * @description This implementation iterates over the specified collection, and removes each object 
   * @param {Object} Objs holds list of Objects of dataStore
   * @returns returns {@code true} if either element is removed successfully
   */
  removeAll(Objs) {
    let modfied = false;
    for (const key in Objs) {
      if (Objs.hasOwnProperty(key)) {
        if (this.contains(Objs[key])) {
          this.remove(Objs[key]);
          modfied = true;
        }
      }
    }
    return modfied;
  }
  /**
   * @description This implementation iterates over the specified collection, and removes rest of the objects 
   * @param {Object} Objs holds list of Objects of dataStore
   * @returns returns {@code true} if either element is removed successfully
   */
  retainAll(Objs) {
    let modfied = false;
    for (const key in Objs) {
      if (Objs.hasOwnProperty(key)) {
        if (!this.contains(Objs[key])) {
          this.remove(Objs[key]);
          modfied = true;
        }
      }
    }
    return modfied;
  }
  /**
   * @description This implementation iterates over the specified collection and removes each of them
   */
  clear() {
    let dataStoreInstances = this.dataStoreInstances;
    for (const key in dataStoreInstances) {
      if (dataStoreInstances.hasOwnProperty(key)) {
          this.remove(dataStoreInstances[key]);
      }
    }
  }
  /**
   * @description Returns a string representation of this collection
   * @returns {String} Returns a string representation of this collection
   */
  toString() {
    let stringValue = '[', 
      dataStoreInstances = this.dataStoreInstances;
    for (const key in dataStoreInstances) {
      if (dataStoreInstances.hasOwnProperty(key)) {
          stringValue += dataStoreInstances[key].toString();
          stringValue +=', ';
      }
    }
    stringValue = stringValue.substring(0, stringValue.length - 2);
    stringValue +=']';
    return stringValue;
  }
  /**
   * @description By this function we are achiving the purpose of implements feature in javascript,this will return name
   * of all the functions that need to be overridden. All the complete classes that inherits it or falls in the inheritance hierarchy
   * contains a function call in their constructors' named implements. That verifies all the functions are defined successfully or not.
   * Else thorws classNotDefined Error.
   * @returns {Array} Array containing name of the functions declared in this interface, needs to be defined
   */
  static getListOfUnimplementedMethods() {
    return [
      ITERATOR,
      SIZE
    ];
  }
}
