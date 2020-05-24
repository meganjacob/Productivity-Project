class Schedule {

  constructor() {
    var time = prompt("How much time do you want to be working to the nearest minute?");
    var sched = planWork();
  }

  planWork() {
  var arr = [];
  var index = 0;
  while (this.time > 0) {
    if ((this.time - 30 >= 0) && (index % 2 == 0)) {
      arr[arr.length] = 30;
      this.time -= 30;
      index++;
    }
    else if (time - 30 < 0 && index % 2 == 0) {
      
      arr[arr.length] = time;
      time = 0;
      index++;
    }
    else {
      arr[arr.length] = 10;
      index++;
    }
  }
  if (arr.length % 2 == 0) {
    arr.pop();
  }
  return arr;
}

get sched()
{
  return this.sched;
}

  mainB(){
    var s = new Schedule();
    var work = s.sched; // this is essentially planWork()
    var i = 0; // for for loop
    var total = 0;

    var str = "This is your schedule breakdown:";
    for (i = 0; i < work.length; i++) {
      if (i % 2 == 0) 
      { 
        str += ("\nWork Period of " + wor[i] + " minutes.");   
      }
      if (i % 2 != 0) {
        str+=("\nBreak Period of " + work[i] + " minutes.");
        total += 10;
      }
    }
    str+=("\nYour recommended schedule will take an extra " + total + " minutes in breaktime.");
    document.getElementById("checkpage").innerHTML = str;
  }
}
