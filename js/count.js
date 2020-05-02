var button_pull = document.getElementById('click_pull'),
  count_pull = 0;
button_pull.onclick = function() {
  count_pull += 1;
  button_pull.innerHTML = "+: " + count_pull;
};

var button_push = document.getElementById('click_push'),
  count_push = 0;
button_push.onclick = function() {
  count_push += 1;
  button_push.innerHTML = "+: " + count_push;
};

var button_abs = document.getElementById('click_abs'),
  count_abs = 0;
button_abs.onclick = function() {
  count_abs += 1;
  button_abs.innerHTML = "+: " + count_abs;
};

var button_legs = document.getElementById('click_legs'),
  count_legs = 0;
button_legs.onclick = function() {
  count_legs += 1;
  button_legs.innerHTML = "+: " + count_legs;
};