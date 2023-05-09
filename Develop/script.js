var today = dayjs();
$("#currentDay").text(today.format('MMM D, YYYY h:mm'));
console.log(today.$H)
var storageToDoArr9am = JSON.parse(localStorage.getItem('ToDos9am')) || [];
var storageToDoArr10am = JSON.parse(localStorage.getItem('ToDos10am')) || [];
var storageToDoArr11am = JSON.parse(localStorage.getItem('ToDos11am')) || [];
var storageToDoArr12pm = JSON.parse(localStorage.getItem('ToDos12pm')) || [];
var storageToDoArr1pm = JSON.parse(localStorage.getItem('ToDos1pm')) || [];
var storageToDoArr2pm = JSON.parse(localStorage.getItem('ToDos2pm')) || [];
var storageToDoArr3pm = JSON.parse(localStorage.getItem('ToDos3pm')) || [];
var storageToDoArr4pm = JSON.parse(localStorage.getItem('ToDos4pm')) || [];
var storageToDoArr5pm = JSON.parse(localStorage.getItem('ToDos5pm')) || [];
var storageToDoArr6pm = JSON.parse(localStorage.getItem('ToDos6pm')) || [];

function checkTime() {

  var nine = $("#9am");
  nine = 9;
  if (nine === today.$H) {
    $("#hour-9").addClass('present')
  } else {
    if (nine < today.$H) {
      $("#hour-9").addClass('past')
    } else {
      $("#hour-9").addClass('future')
    }
  };

  var ten = $("#10am");
  ten = 10;
  if (ten === today.$H) {
    $("#hour-10").addClass('present')
  } else {
    if (ten < today.$H) {
      $("#hour-10").addClass('past')
    } else {
      $("#hour-10").addClass('future')
    }
  };

  var eleven = $("#11am");
  eleven = 11;
  if (eleven === today.$H) {
    $("#hour-11").addClass('present')
  } else {
    if (eleven < today.$H) {
      $("#hour-11").addClass('past')
    } else {
      $("#hour-11").addClass('future')
    }
  };

  var noon = $("#12pm");
  noon = 12;
  if (noon === today.$H) {
    $("#hour-12").addClass('present')
  } else {
    if (noon < today.$H) {
      $("#hour-12").addClass('past')
    } else {
      $("#hour-12").addClass('future')
    }
  };

  var thirteen = $("#1pm");
  thirteen = 13;
  if (thirteen === today.$H) {
    $("#hour-13").addClass('present')
  } else {
    if (thirteen < today.$H) {
      $("#hour-13").addClass('past')
    } else {
      $("#hour-13").addClass('future')
    }
  };

  var fourteen = $("#2pm");
  fourteen = 14;
  if (fourteen === today.$H) {
    $("#hour-14").addClass('present')
  } else {
    if (fourteen < today.$H) {
      $("#hour-14").addClass('past')
    } else {
      $("#hour-14").addClass('future')
    }
  };

  var fifteen = $("#3pm");
  fifteen = 15;
  if (fifteen === today.$H) {
    $("#hour-15").addClass('present')
  } else {
    if (fifteen < today.$H) {
      $("#hour-15").addClass('past')
    } else {
      $("#hour-15").addClass('future')
    }
  };

  var sixteen = $("#4pm");
  sixteen = 16;
  if (sixteen === today.$H) {
    $("#hour-16").addClass('present')
  } else {
    if (sixteen < today.$H) {
      $("#hour-16").addClass('past')
    } else {
      $("#hour-16").addClass('future')
    }
  };

  var seventeen = $("#5pm");
  seventeen = 17;
  if (seventeen === today.$H) {
    $("#hour-17").addClass('present')
  } else {
    if (seventeen < today.$H) {
      $("#hour-17").addClass('past')
    } else {
      $("#hour-17").addClass('future')
    }
  };

  var eighteen = $("#6pm");
  eighteen = 18;
  if (eighteen === today.$H) {
    $("#hour-18").addClass('present')
  } else {
    if (eighteen < today.$H) {
      $("#hour-18").addClass('past')
    } else {
      $("#hour-18").addClass('future')
    }
  };
};

function displayStorage() {

  $("#toDos9").text("");
  $("#toDos10").text("");
  $("#toDos11").text("");
  $("#toDos12").text("");
  $("#toDos13").text("");
  $("#toDos14").text("");
  $("#toDos15").text("");
  $("#toDos16").text("");
  $("#toDos17").text("");
  $("#toDos18").text("");


  for (let i = 0; i < storageToDoArr9am.length; i++) {
    let toDo9 = document.createElement('li');
    toDo9.textContent = storageToDoArr9am[i];
    $('#toDos9').append(toDo9);
  }

  for (let i = 0; i < storageToDoArr10am.length; i++) {
    let toDo10 = document.createElement('li');
    toDo10.textContent = storageToDoArr10am[i];
    $('#toDos10').append(toDo10);
  }

  for (let i = 0; i < storageToDoArr11am.length; i++) {
    let toDo11 = document.createElement('li');
    toDo11.textContent = storageToDoArr11am[i];
    $('#toDos11').append(toDo11);
  }

  for (let i = 0; i < storageToDoArr12pm.length; i++) {
    let toDo12 = document.createElement('li');
    toDo12.textContent = storageToDoArr12pm[i];
    $('#toDos12').append(toDo12);
  }

  for (let i = 0; i < storageToDoArr1pm.length; i++) {
    let toDo13 = document.createElement('li');
    toDo13.textContent = storageToDoArr1pm[i];
    $('#toDos13').append(toDo13);
  }

  for (let i = 0; i < storageToDoArr2pm.length; i++) {
    let toDo14 = document.createElement('li');
    toDo14.textContent = storageToDoArr2pm[i];
    $('#toDos14').append(toDo14);
  }

  for (let i = 0; i < storageToDoArr3pm.length; i++) {
    let toDo15 = document.createElement('li');
    toDo15.textContent = storageToDoArr3pm[i];
    $('#toDos15').append(toDo15);
  }

  for (let i = 0; i < storageToDoArr4pm.length; i++) {
    let toDo16 = document.createElement('li');
    toDo16.textContent = storageToDoArr4pm[i];
    $('#toDos16').append(toDo16);
  }

  for (let i = 0; i < storageToDoArr5pm.length; i++) {
    let toDo17 = document.createElement('li');
    console.log(toDo17,"5")
    toDo17.textContent = storageToDoArr5pm[i];
    $('#toDos17').append(toDo17);
  }

  for (let i = 0; i < storageToDoArr6pm.length; i++) {
    let toDo18 = document.createElement('li');
    console.log('6',toDo18);
    toDo18.textContent = storageToDoArr6pm[i];
    console.log('6 next',toDo18);
    $('#toDos18').append(toDo18);
  }
};

$("#btn9").click(function () {
  var toDo9Text = $("textarea#text9").val();
  storageToDoArr9am.push(toDo9Text);

  localStorage.setItem('ToDos9am', JSON.stringify(storageToDoArr9am));

  displayStorage();
});

$("#btn10").click(function () {
  var toDo10Text = $("textarea#text10").val();
  storageToDoArr10am.push(toDo10Text);

  localStorage.setItem('ToDos10am', JSON.stringify(storageToDoArr10am));

  displayStorage();
});

$("#btn11").click(function () {
  var toDo11Text = $("textarea#text11").val();
  storageToDoArr11am.push(toDo11Text);

  localStorage.setItem('ToDos11am', JSON.stringify(storageToDoArr11am));

  displayStorage();
});

$("#btn12").click(function () {
  var toDo12Text = $("textarea#text12").val();
  storageToDoArr12pm.push(toDo12Text);

  localStorage.setItem('ToDos12pm', JSON.stringify(storageToDoArr12pm));

  displayStorage();
});

$("#btn13").click(function () {
  var toDo13Text = $("textarea#text13").val();
  storageToDoArr1pm.push(toDo13Text);

  localStorage.setItem('ToDos1pm', JSON.stringify(storageToDoArr1pm));

  displayStorage();
});

$("#btn14").click(function () {
  var toDo14Text = $("textarea#text14").val();
  storageToDoArr2pm.push(toDo14Text);

  localStorage.setItem('ToDos2pm', JSON.stringify(storageToDoArr2pm));

  displayStorage();
});

$("#btn15").click(function () {
  var toDo15Text = $("textarea#text15").val();
  storageToDoArr3pm.push(toDo15Text);

  localStorage.setItem('ToDos3pm', JSON.stringify(storageToDoArr3pm));

  displayStorage();
});

$("#btn16").click(function () {
  var toDo16Text = $("textarea#text16").val();
  storageToDoArr4pm.push(toDo16Text);

  localStorage.setItem('ToDos4pm', JSON.stringify(storageToDoArr4pm));

  displayStorage();
});

$("#btn17").click(function () {
  var toDo17Text = $("textarea#text17").val();
  storageToDoArr5pm.push(toDo17Text);

  localStorage.setItem('ToDos5pm', JSON.stringify(storageToDoArr5pm));

  displayStorage();
});

$("#btn18").click(function () {
  var toDo18Text = $("textarea#text18");
  storageToDoArr6pm.push(toDo18Text);

  localStorage.setItem('ToDos6pm', JSON.stringify(storageToDoArr6pm));

  displayStorage();
});

checkTime();
displayStorage();