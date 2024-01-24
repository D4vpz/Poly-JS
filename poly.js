/////////////////////////////////
//          GRAPHICS           //
/////////////////////////////////

let win_obj = null;
let ctx = null;

/**
 * Sets window object for later reference
 * @param {Object} window_object
 */
const set_main_window = (window_object) => {
  win_obj = window_object;
  ctx = win_obj.getContext('2d');
};

/**
 * Sets window dimensions
 * @param {Number} width
 * @param {Number} height
 */
const set_window_size = (width, height) => {
  win_obj.width = width;
  win_obj.height = height;
};

/**
 * Sets window border properties
 * @param {Number} width
 * @param {Number} radius
 * @param {String} color
 * @param {String} image_rendering
 */
const set_window_style = (width, radius, color, image_rendering="pixelated") => {
  win_obj.style = `
  border: ${width}px solid ${color};
  border-radius: ${radius}px;
  image-rendering: ${image_rendering};
  `;
};

/**
 * Toggles image smoothening in the window
 * @param {Boolean} x 
 */
const enableImageSmoothing = (x) => {
  ctx.imageSmoothingEnabled = x;
}

const begin_draw = () => {
  ctx.beginPath();
};

/**
 * Fills screen with a certain color
 * @param {String} color
 */
const fill_screen = (color) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, win_obj.width, win_obj.height);
};

/**
 * Draws a single colored pixel at x, y
 * @param {Number} x
 * @param {Number} y
 * @param {String} color
 */
const pixel = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};

/**
 * Fills a colored rectangle using x, y, width + height
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @param {String} color
 */
const fill_rect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

/**
 * Draws a colored line from (x, y) to (x2, y2) with a certain thickness
 * @param {Number} x
 * @param {Number} y
 * @param {Number} x2
 * @param {Number} y2
 * @param {String} color
 * @param {Number} width
 */
const line = (x, y, x2, y2, color, width) => {
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

/**
 * Draws a line using width and height
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @param {String} color
 * @param {Number} thickness
 */
const dim_line = (x, y, width, height, color, thickness) => {
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y + height);
  ctx.stroke();
};

const line_rect = (x, y, width, height, color, thickness) => {
  ctx.lineWidth = thickness;
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, width, height);
};

/**
 * Creates an image object for drawing use
 * @param {String} image_object
 */
const PolyImage = (image_id) => {
  let img = document.getElementById(image_id);
  return img;
};

/**
 * Draws an image on screen
 * @param {Object} img
 * @param {Number} x
 * @param {Number} y
 */
const draw_image = (img, x, y, w, h) => {
  ctx.drawImage(img, x, y, w, h);
};

/**
 * Draws an image rotated by a specific radian angle
 * @param {Object} img
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 * @param {Number} angle
 */
const rotated_image = (img, x, y, w, h, angle) => {
  ctx.translate(w / 2 + x, h / 2 + y);
  ctx.rotate(angle);
  ctx.translate(-(w / 2) - x, -(h / 2) - y);
  draw_image(img, x, y, w, h);
  ctx.translate(w / 2 + x, h / 2 + y);
  ctx.rotate(-angle);
  ctx.translate(-(w / 2) - x, -(h / 2) - y);
};

/////////////////////////////////
//            MATH             //
/////////////////////////////////

/**
 * Returns a random number between the minimum and maximum values
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
const random_range = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * Converts degrees to radians
 * @param {Number} deg
 * @returns
 */
const rad = (deg) => {
  return deg * (Math.PI / 180);
};

/**
 * Converts
 * @param {Number} rad
 * @returns
 */
const deg = (rad) => {
  return deg * (180 / Math.PI);
};

/**
 * Converts angle to delta coordinates
 * @param {Number} angle
 * @returns
 */
const angle_to_delta = (angle) => {
  return {
    x: Math.cos(rad(angle)),
    y: Math.sin(rad(angle)),
  };
};

/////////////////////////////////
//            LOGIC            //
/////////////////////////////////

/**
 * Continuously loops a given function.
 * @param {TimerHandler} func_name
 * @param {Number} delay
 */
const loop_function = (func_name, delay) => {
  setInterval(func_name, delay);
};

let keys = {};

document.addEventListener('keydown', function (event) {
  keys[event.key] = true;
});

document.addEventListener('keyup', function (event) {
  keys[event.key] = false;
});
