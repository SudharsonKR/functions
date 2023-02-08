console.log('***Odd Number***')
const n = [1, 2, 5, 8, 4, 11, 3, 9];
const odd = n.filter((num) => num % 2 === 1);
console.log(odd)
console.log('***convert to caps***')
const str=["raj", "suresh", "mohan", "malayalam", "did", "carrac"]
str.forEach((caps)=>{console.log(caps.toUpperCase())})
console.log('***Sum Array***')
var n1=0;
const sum=function(){
    for(var i=0; i<n.length; i++)
    {
        
        n1=n1+(+n[i])
    }
    console.log("Sum is", n1)
}
sum();
console.log('***Prime Number***')
let Prime = function ()
{
  var count=0
 for (var i=0; i<=n.length; i++)
 {
  for (var j=1; j<=n[i]; j++)
  {
      if(n[i]%j===0)
      count++
      }
  if(count == 2)
 console.log("Prime Number",n[i]);
 count =0
   }
}
Prime()
console.log("***Palindrome***")
const pal=function(){
  str.forEach((val)=>{
    //console.log(val)
    var j=val.length-1;
    for(var i=0;i<=val.length/2;i++)
    if(val[i]==val[j])
    {
      j--;
      console.log(val);
      break;
    }  
  })
}
pal()
console.log("***Median Two Array***")
var ar1 = [1, 5, 7, 10, 15];
var ar2 = [2, 8, 11, 13, 17];
var n1 = ar1.length
var n2 = ar2.length

function median(ar1, ar2, n)
{
    var i=0; 
    var j=0; 
    var m1=-1;
    var m2=-1;
    for (var count=0; count<=n; count++)
    {
        if (i==n)
        {
            m1=m2;
            m2=ar2[0];
            break;
        }
       else if (j==n)
        {
            m1=m2;
            m2=ar1[0];
            break;
        }
             if(ar1[i]<=ar2[j])
        {
            m1=m2;
            m2=ar1[i];
            i++;
        }
        else
        {
            m1=m2;
            m2=ar2[j];
            j++;
        }
    }
     return (m1+m2)/2;
} 
if (n1==n2)
{
console.log("Median is "+ median(ar1, ar2, n1));
}
else{
  console.log('length not equal')
}

console.log('***Duplicate Values***')
let dup=[1, 5, 3, 1, 6]
let redup=[...new Set(dup)]
console.log(redup) 
console.log('***Array Rotation***')
let rotar=[1, 2, 3, 4, 5]
const rotate = function(a, n, k){
  k = k % n; 
  for (let i = 0; i < n; i++)
  {
   if(i<k){
 console.log(a[n+i-k]);
      }
      else {
          console.log((a[i - k]));
      }
  }
}
rotate(rotar, rotar.length, k=3);