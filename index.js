const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(obj){
  let win = obj.find(r => r.result == "W")
   if(win){
     return win.year; 
    }   
}