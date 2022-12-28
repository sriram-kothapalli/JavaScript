//Demerit Points
//Assuming speed limit is 70km an hour
//if the car is driving under the speed limit we get OK message
//every 5km an hour we get ipoint on above speed limit
//if 75km= 1point /80km= 2point
//if the driver get more than 12 points licence suspended

function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerPoint = 5;
  if (speed < speedLimit) 
  console.log("OK");
  else {
    var points = (speed - speedLimit) / kmPerPoint;
    if (points >= 12) 
    console.log("Licence Suspended");
    else 
    console.log("points", points);
  }
}
checkSpeed(150);
