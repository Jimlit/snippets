/*
  =========================================================
  Match Model
  =========================================================

  DESCRIPTION:
  ---------------------------------------------------------
  Populates all object keys from the model or supplied 
  action

  PARAMS:
  -----------------------------------------------------
  target | type: object  | the state object being passed in
  action | type: any     | the action item being passed in

  ==========================================================
*/

export const matchModel = (target, action) => {

    let obj = {};  

    Object.keys(target).map((key, index) => {
        if(typeof key === 'object') {
            Object.keys(key).map((subKey, index) => {
                key[subKey] = (action[subKey] === undefined) ? key[subKey] : action[subKey];
            })
        } else {
            obj[key] = (action[key] === undefined) ? target[key] : action[key];
        }
    })

    return obj;

}