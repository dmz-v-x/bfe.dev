// Given a string expression containing:

// digits
// + 
// -
// ( )
// spaces

// Return the evaluated result.

// Examples

// "1 + 1" → 2
// " 2-1 + 2 " → 3
// "(1+(4+5+2)-3)+(6+8)" → 23

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function calculatre(s){
  while(s.includes('(')) {
      let start = s.lastIndexOf('(');
      let end = s.indexOf(')', start);

      let sub = s.substring(start+1, end);
      let val = evalSimple(sub);

      s = s.slice(0, start)+val+s.slice(end + 1);    
  }
  return evalSimple(s);
}

function evalSimple(expr){
  let nums = expr.split(/(?=[+-])/)
  let sum = 0;
  for(let n of nums) sum += Number(n)
  return sum;
}
