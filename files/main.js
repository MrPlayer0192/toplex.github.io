// Другие люди //
animateDisplay = function (target, animationClass, displayType, timeout) {
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("show")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  setTimeout(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  }, 10);

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};

document.querySelector(".mybutt").addEventListener("click", function () {
  animateDisplay(document.querySelector(".content"), "show", "block", 300);
});

// Социальные сети //
animateDisplay = function (target, animationClass, displayType, timeout) {
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("show")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  setTimeout(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  }, 10);

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};

document.querySelector(".mybutt1").addEventListener("click", function () {
  animateDisplay(document.querySelector(".content1"), "show", "block", 300);
});

// Автор //
animateDisplay = function (target, animationClass, displayType, timeout) {
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("show")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  setTimeout(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  }, 10);

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};

document.querySelector(".mybutt2").addEventListener("click", function () {
  animateDisplay(document.querySelector(".content2"), "show", "block", 300);
});

// Меню //
animateDisplay = function (target, animationClass, displayType, timeout) {
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("show")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  setTimeout(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  }, 10);

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};

document.querySelector(".mybutt3").addEventListener("click", function () {
  animateDisplay(document.querySelector(".content3"), "show", "block", 300);
});

function changeStyle() {
  let box = document.querySelector('.lox');
  box.classList.toggle('genius'); // Добавляем или удаляем класс 'blue'
}




