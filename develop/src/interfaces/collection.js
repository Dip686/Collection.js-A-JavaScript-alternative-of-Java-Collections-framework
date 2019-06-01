/**
 * @license Apache-2.0
 * @version 1.0.0
 * @since 1.0.0
 * @author Dip Bhattacharjee <dip686@gmail.com>
 */

import {
  ADD,
  ADDALL,
  CLEAR,
  CONTAINS,
  CONTAINSALL,
  EQUALS,
  HASHCODE,
  ISEMPTY,
  ITERATOR,
  REMOVE,
  REMOVEALL,
  RETAINALL,
  SIZE,
  TOARRAY
} from "../.internal/constants/functionname-literals";
import {
  COLLECTION,
  INTERFACE
} from "../.internal/constants/class-interface-literals";
import overRideFunctionDeclaration from "../.internal/exceptions/override-function-declaration";
import InterfaceInstantiationError from "../.internal/exceptions/interface-instantiaion-error";

/**
 * @interface
 * @classdesc  The root interface in the <i>collection hierarchy</i>.  A collection
 * represents a group of objects, known as its <i>elements</i>.  Some
 * collections allow duplicate elements and others do not.  Some are ordered
 * and others unordered. The Product does not provide any <i>direct</i>
 * implementations of this interface: it provides implementations of more
 * specific subinterfaces like {@code Set} and {@code List}.  This interface
 * is typically used to pass collections around and manipulate them where
 * maximum generality is desired.
 * @todo Need to define few other defined functions
 * @see https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html
 */
export default class Collection {
  /**
   * @constructor
   */
  constructor() {
    InterfaceInstantiationError(COLLECTION);
  }
  /**
   * @description This function is a sends type of the interface
   * @returns {string} returns type as interface
   */
  getType() {
    return INTERFACE;
  }
  /**
   * @description This function is a sends name of the interface
   * @returns {string} returns name as interface
   */
  getName() {
    return COLLECTION;
  }
  /**
   * @description Returns the number of elements in this collection
   * @return the number of elements in this collection
   */
  size() {
    overRideFunctionDeclaration(SIZE);
  }
  /**
   * @description Returns {@code true} if this collection contains no elements.
   * @return {boolean} if this collection contains no elements
   */
  isEmpty() {
    overRideFunctionDeclaration(ISEMPTY);
  }
  /**
   * @description Returns {@code true} if this collection contains the specified element.
   * @param {Object} Object element whose presence in this collection is to be tested
   * @return {@code true} if this collection contains the specified object
   */
  contains() {
    overRideFunctionDeclaration(CONTAINS);
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
   * @description Returns an array containing all of the elements in this collection.
   * @return Returns an array containing all of the elements in this collection.
   */
  toArray() {
    overRideFunctionDeclaration(TOARRAY);
  }
  /**
   * @description Ensures that this collection contains the specified element
   * @return {@code true} if this collection changed as a result of the call
   */
  add() {
    overRideFunctionDeclaration(ADD);
  }
  /**
   * @description Removes a single instance of the specified element from this
   * @return {@code true} if an element was removed as a result of this call
   */
  remove() {
    overRideFunctionDeclaration(REMOVE);
  }
  /**
   * @description Returns {@code true} if this collection contains all of the elements
   * @return {@code true} if this collection contains all of the elements
   */
  containsAll() {
    overRideFunctionDeclaration(CONTAINSALL);
  }
  /**
   * @description Adds all of the elements in the specified collection to this collection
   * @return {@code true} if this collection changed as a result of the call
   */
  addAll() {
    overRideFunctionDeclaration(ADDALL);
  }
  /**
   * @description Removes all of this collection's elements that are also contained in the specified collection
   * @return {@code true} if this collection changed as a result of the call
   */
  removeAll() {
    overRideFunctionDeclaration(REMOVEALL);
  }
  /**
   * @description Retains only the elements in this collection that are contained in the
   * specified collection (optional operation).  In other words, removes from
   * this collection all of its elements that are not contained in the
   * specified collection.
   * @return {@code true} if this collection changed as a result of the call
   */
  retainAll() {
    overRideFunctionDeclaration(RETAINALL);
  }
  /**
   * Removes all of the elements from this collection (optional operation).
   * The collection will be empty after this method returns.
   */
  clear() {
    overRideFunctionDeclaration(CLEAR);
  }
  /**
   * @description Compares the specified object with this collection for equality.
   * @return {@code true} if the specified object is equal to this collection
   */
  equals() {
    overRideFunctionDeclaration(EQUALS);
  }
  /**
   * @description Returns the hash code value for this collection.
   * @return the hash code value for this collection
   */
  hashCode() {
    overRideFunctionDeclaration(HASHCODE);
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
      ADD,
      ADDALL,
      CLEAR,
      CONTAINS,
      CONTAINSALL,
      EQUALS,
      HASHCODE,
      ISEMPTY,
      ITERATOR,
      REMOVE,
      REMOVEALL,
      RETAINALL,
      SIZE,
      TOARRAY
    ];
  }
}
