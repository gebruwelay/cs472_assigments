function sum (arr)
{
  return arr.reduce((a,b)=>a+b);
}
function multiply(arr)
{
  return arr.reduce((a,b)=>a*b);
}
function filterLongWords(arr)
{
  return arr.filter(i=>i.length>3);
}

function reverse(s)
{
  let result = "";
  for(let i=s.length-1;i>=0;i--)
  {
    result =result.concat(s.charAt(i));
  }
  return result;
}