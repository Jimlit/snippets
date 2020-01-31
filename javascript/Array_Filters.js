/*
  ===================================================================
  Sort List by object property
  ===================================================================
  USAGE: arr.sort((a,b) => sortBy(a,b,'target', true))

  target (string)       : Object property to filter by
  descending (boolean)  : List order Descending. Ascending by default
*/

export const sortBy = (a,b,target,descending) => {

    let aTarget = a[target];
    let bTarget = b[target]

    if(aTarget < bTarget){

      let aVal = 1;
      descending === true ? aVal = aVal : aVal = -1;
      return aVal;

    } else if(aTarget > bTarget) {

      let bVal = -1;
      descending === true ? bVal = bVal : bVal = 1;

      return bVal
    }

    return 0
}
