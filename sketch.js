const products = [];
const shelfs = [];

let renderingProductTypes = [];

let renderingShelfTypes = [];

let renderingProducts = [];

let renderingShelfs = [];

function setup() {
  createCanvas(1000, 1000);
  getRenderingProductTypes(productTypes);
  getRenderingShelfTypes(shelfTypes);
  getRenderingProducts(products);
  getRenderingProductsShelfs(shelfs);
}

function draw() {
  background(220);
  renderingProductTypes.forEach((renderingProductType) =>
    renderingProductType.render()
  );
  renderingShelfTypes.forEach((renderingShelfType) =>
    renderingShelfType.render()
  );
  renderingProducts.forEach((renderingProduct) => renderingProduct.render());
  renderingShelfs.forEach((renderingShelf) => renderingShelf.render());
}

function mousePressed(fxn) {
  let isProductClicked = false;
  renderingProducts.forEach((renderingProduct) => {
    if (renderingProduct.isMouseClicked(mouseX, mouseY)) {
      renderingProduct.clicked(mouseX, mouseY);
      isProductClicked = true;
      return;
    }
  });
  if(isProductClicked) return;
  let isShelfClicked = false;
  renderingShelfs.forEach((renderingShelf) => {
    if (renderingShelf.isMouseClicked(mouseX, mouseY)) {
      renderingShelf.clicked(mouseX, mouseY);
      isShelfClicked = true;
      return;
    }
  });
  if(isShelfClicked) return;
  renderingProductTypes.forEach((productType) => {
    if (productType.isMouseClicked(mouseX, mouseY)) {
      productType.clicked(mouseX, mouseY, ({ id, width, height, X, Y }) => {
        const product = new Product(id, width, height, X, Y);
        product.dragging = true;
        renderingProducts.push(product);
      });
      return;
    }
  });
  renderingShelfTypes.forEach((renderingShelfType) => {
    if (renderingShelfType.isMouseClicked(mouseX, mouseY)) {
      renderingShelfType.clicked(mouseX, mouseY, ({ id, width, height, X, Y }) => {
        const shelf = new Shelf(id, width, height, X, Y);
        shelf.dragging = true;
        renderingShelfs.push(shelf);
      });
      return;
    }
  });
}

function mouseDragged() {
  let selectedItem = renderingProducts.find((product) => product.isDragging());
  if(!selectedItem) {
    selectedItem = renderingShelfs.find((shelf) => shelf.isDragging());
  }
  console.log(selectedItem)
  if(selectedItem) {
    selectedItem.move(mouseX, mouseY)
  }
}

function mouseReleased() {
  renderingProducts.forEach(product => product.release());
  renderingShelfs.forEach(shelf => shelf.release());
}

function getRenderingProductTypes(productTypes) {
  let x = 20;

  renderingProductTypes = productTypes.map(({ id, width, height }) => {
    const newProduct = new Product(id, width, height, x, 20);
    x += width + 10;
    return newProduct;
  });
}

function getRenderingShelfTypes(shelfTypes) {
  let y = 100;
  renderingShelfTypes = shelfTypes.map(({ id, width, height }) => {
    const newShelf = new Shelf(id, width, height, 20, y);
    y += height + 10;
    return newShelf;
  });
}

function getRenderingProducts(products) {
  renderingProducts = products.map(
    ({ id, width, height, X, Y }) => new Product(id, width, height, X, Y)
  );
}

function getRenderingProductsShelfs(shelfs) {
  renderingShelfs = shelfs.map(
    ({ id, width, height, X, Y }) => new Shelf(id, width, height, X, Y)
  );
}
