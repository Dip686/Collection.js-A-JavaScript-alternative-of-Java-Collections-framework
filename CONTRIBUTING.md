# Contribution Guidelines
The new features and bug fixes are merged into `develop` branch. The `master` branch
contains the latest stable release.

## Repository workflow
Please, try to follow:

* Clone the repository.
* Checkout `develop` branch.
* Create feature or bug fixing branch using `git flow`
* Install dependencies.
* Add your new features or fixes.
* Build the project.
* Send PR.


```
-- master (main branch) 
  -- develop (development stable branch) 
    -- feature/intrducing-set-interaface
```
***Note**: do not put spaces in feature branch name*

**Note:**

features branches may contain bugy fixes and unstable code. Always checkout develop branch to get the latest stable development code

How we will introduce interface restrictions
---------------------------------------------
Interfaces are meant to impose rules that ensures definition must be provided to all functions declared in it, in the leaf class that inherits. 

As JavaScript does not support interfaces we are implementing this behaviour in a different way. Please understand this part before creating any interfaces or using it.
* Assume we have an interface NavigableSet.
* We have a class TreeSet that implements NavigableSet.
* To provide the list of methods child class must define, we shall keep a function getAllDeclaredMethods inside the interface.
```
class NavigableSet {
  function foo ();
  function bar ();  
  var arr;
  function getAllDeclaredMethods() {
    arr.push(super.getAllDeclaredMethods()); // in case it is an interface and it needs to get list of methods its parent declares
    arr.push('foo')
    arr.push('bar');
    return arr; // array containing all functions need to be defined
  }
}
```
* we have defined a function called `implements` inside utilites.

```
function implements(interface) {
  latestClass = this;
  listOfAllMethods = interface.getAllDeclaredMethods();
  for(method in listOfAllMethods) {
    if (latestClass.method === undefined)
      throw new blahblahException();
  }
}
```
* Inside constructor of the class which is implementing this must call the function `implements(NavigableSet)` passing the interface you want to inherit.
```
import NavigableSet from  './interfaces/NavigableSet';

class TreeSet extends AbstractSet {

  constructor () {
    implements(NavigableSet);
  }
}
```