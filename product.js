class Product extends BaseObject {
  dragging = false;
  constructor(id, width, height, X, Y) {
    super(id, width, height, X, Y);
  }

  render() {
    if (this.id.includes("PT")) {
      fill("f2f2f2");
    } else {
      fill(51);
    }
    super.render();
  }

  createNewProduct() {
    const newProduct = {
      id: `P-${makeid(6)}`,
      width: this.width,
      height: this.height,
      X: mouseX - this.width / 2,
      Y: mouseY - this.height / 2,
    };
    products.push(newProduct);
    return newProduct;
  }

  clicked(mouseX, mouseY, callback) {
    if (this.id.includes("PT")) {
      console.log(`Clicked Product Type with id: ${this.id}`);
      // Product type element clicked
      // Create new product
      const newProduct = this.createNewProduct(mouseX, mouseY);
      callback(newProduct);
    } else {
      this.dragging = true;
      console.log(`Clicked Product with id: ${this.id}`);
      // Select product, drag it
      this.X = mouseX - this.width / 2;
      this.Y = mouseY - this.height / 2;
    }
  }

  isMouseClicked(mouseX, mouseY) {
    return (
      mouseX > this.X &&
      mouseX < this.X + this.width &&
      mouseY > this.Y &&
      mouseY < this.Y + this.height
    );
  }

  isDragging() {
    return this.dragging;
  }

  move(mouseX, mouseY) {
    this.X = mouseX - this.width / 2;
    this.Y = mouseY - this.height / 2;
  }

  release() {
    this.dragging = false;
  }
}
