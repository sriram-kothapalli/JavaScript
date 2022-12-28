//rest operator
// function sum(discount,... prices){
//     const total=prices.reduce((a,b)=>a+b);
//     return total*(1-discount);
//   }
//   console.log(sum(0.1,20,30,1));

  function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  console.table(myBio("sriram", "kothapalli", "javascript", "cypress", "vjs"));
