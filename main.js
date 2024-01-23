let canvas = document.getElementById("poly_window");

set_main_window(canvas);
set_window_size(320, 240);
set_window_border(5, 7, "gray");
ctx.imageSmoothingEnabled = true;

function loop() {
  begin_draw();
  fill_screen("black");
  rotated_image(document.getElementById("oh_yeah"), 47, 7, 225, 225, rot);
}

loop_function(loop, 10);
