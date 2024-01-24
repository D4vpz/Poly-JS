let canvas = document.getElementById('poly_window');

set_main_window(canvas);
set_window_size(320, 240);
set_window_style(5, 7, 'gray');
enableImageSmoothing(true);

let image = PolyImage('oh_yeah');

function loop() {
  begin_draw();
  fill_screen('red');
  rotated_image(image, 47, 7, 225, 225, 0.3);
  rotated_image(image, 100, 7, 225, 225, -0.3);
}

function main() {
  loop_function(loop, 10);
}

main();
