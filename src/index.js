module.exports = function check(str, bracketsConfig) {
   
   var arrayStr = [];
   bracketsConfig.forEach(element => { arrayStr.push(element[0]+element[1]);
       
   });
   while(str.length >0) {
       var testingStr = str;
       arrayStr.forEach(bracket => {
           testingStr = testingStr.replace(bracket, '');
       });
       if (testingStr===str) {
           return false;
       }
       str = testingStr;
   }
 return true;
}
