
const RootDom = document.querySelector("#canvas-section");
const RootWrapper = new SvgDom(RootDom);

const SvgCanvas = new SvgDom();

SvgCanvas.create("svg");
SvgCanvas.attr({
  "style": "width: 100%; height: 100%"
});

//数据劫持
Object.defineProperty(SvgCanvas, "viewBox",{
  configurable: false,
  enumerable: false,
  get: function() {
    return SvgCanvas[`data__${"viewBox"}`];
  },
  set: function(value) {
    SvgCanvas[`data__${"viewBox"}`] = value;

    const {minX, minY, width, height} = value;

    SvgCanvas.attr("viewBox", `${minX} ${minY} ${width} ${height}`);
  }
})

RootWrapper.appendChild(SvgCanvas);

const { clientHeight, clientWidth } = RootDom;

//初始化 viewBox
SvgCanvas.viewBox = { 
  minX: 0, 
  minY: 0, 
  width: clientWidth, 
  height:clientHeight
}

const Rect = new SvgDom();
Rect.create("rect");
Rect.attr({
  "x": "100",
  "y": "100",
  "width": "100",
  "height": "100",
  "stroke": "#f0f",
  "stroke-width": "3",
  "fill": "none"
})

SvgCanvas.appendChild(Rect);

//point
class Point {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    }
  }

  set(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  get() {
    return this.position;
  }
}

/**
 * translate client coordinate to SvgCanvas coordinate
 * @param {Point} point 
 * @return {Point}
 */
const clientToSvgCanvasCoordinate = (point) => (point);

//zoom

//draw
function drawStart(e) {
  const { clientX, clientY } = e;

  const _eventPoint = new Point()
  _eventPoint.set(clientX, clientY);

  const eventPoint = clientToSvgCanvasCoordinate(_eventPoint);

  SvgCanvas.isDrawing = true;

  const drawingPath = new SvgDom();

  drawingPath.create("polyline");

  //数据劫持
  Object.defineProperty(drawingPath, "points",{
    configurable: false,
    enumerable: false,
    get: function() {
      return drawingPath[`_data_${"points"}`];
    },
    set: function(value) {
      drawingPath[`_data_${"points"}`] = value;
      // console.log("value", value)
      const pointsString = value.reduce((pointsString ,point) => {
        const { x, y } = point.get();

        return pointsString + `${x},${y} `; 
      }, "")

      drawingPath.attr("points", pointsString);
    }
  });

  drawingPath.attr({
    "stroke": "#ff0",
    "fill": "none"
  });

  drawingPath.points = [eventPoint];

  SvgCanvas.appendChild(drawingPath);

  SvgCanvas.drawingPath = drawingPath;
}

function drawing(e) {
  if(!SvgCanvas.isDrawing) {
    return;
  }

  const { clientX, clientY } = e;

  const _eventPoint = new Point()
  _eventPoint.set(clientX, clientY);

  const eventPoint = clientToSvgCanvasCoordinate(_eventPoint);

  const points = SvgCanvas.drawingPath.points;
  points.push(eventPoint);
  SvgCanvas.drawingPath.points = points;
}

function drawEnd(e) {
  SvgCanvas.isDrawing = false;
  
  if(SvgCanvas.paths) {
    SvgCanvas.paths = [];
  }

  SvgCanvas.paths.push(SvgCanvas.drawingPath);

  SvgCanvas.drawingPath = null;
}

document.addEventListener("mousedown", drawStart);
document.addEventListener("mousemove", drawing);
document.addEventListener("mouseup", drawEnd);
