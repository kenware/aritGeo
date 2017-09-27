const arithGeo = (arr)=>{ 
 let arithmet = true;
 let geomet = true;
 let commonDif = arr[1] - arr[0];
 let commonRatio = arr[1] / arr[0];
 if(arr.length === 0){
   return 0;
 }
 if(arr.length < 3){
   return -1;
 }

for(let i = 0; i < arr.length-1; i++){
    if( arr[i + 1] - arr[i] !== commonDif )
      arithmet = false;
    if(arr[i + 1] / commonRatio !== arr[i])
      geomet = false;
}

if(arithmet === true)
  return "Arithmetic";
else if(geomet === true)
  return"Geometric";
else
    return -1;

}

console.log(arithGeo([1,2,3,4,5,6,7]))
module.exports = {
	arithGeo: arithGeo
	}