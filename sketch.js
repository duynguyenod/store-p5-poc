const { v4: uuidv4 } = require('uuid');

let renderingProductTypes;

let renderingShelfTypes;

function setup() {
  createCanvas(1000, 1000);
  renderingProductTypes = getRenderingProductTypes(productTypes);
  renderingShelfTypes = getRenderingShelfTypes(shelfTypes);
}

function draw() {
  background(220);
  renderingProductTypes.forEach(renderingProductType => renderingProductType.render());
  renderingShelfTypes.forEach(renderingShelfType => renderingShelfType.render());
}

function mousePressed(fxn) {
  renderingProductTypes.forEach((productType) => productType.clicked(mouseX, mouseY));                                ````````````````````````````
}

function getRenderingProductTypes(productTypes) {
  let x = 20;
  const renderingProductTypes = [];
  productTypes.forEach(({id, width, height}) => {
    renderingProductTypes.push(new Product(id, width, height, x, 20));
    x += (width + 10);
  });
  return renderingProductTypes;
}


function getRenderingShelfTypes(shelfTypes) {
  let y = 100;
  const renderingShelfTypes = [];
  shelfTypes.forEach(({id, width, height}) => {
    renderingShelfTypes.push(new Shelf(id, width, height, 20, y));
    y += (height + 10)
  });
  return renderingShelfTypes;
}