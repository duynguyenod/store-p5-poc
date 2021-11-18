class Shelf extends BaseObject {
  dragging = false;
  constructor(id, width, height, X, Y) {
    super(id, width, height, X, Y);
  }

  createNewShelf(mouseX, mouseY) {
    const newShelf = {
      id: `S-${makeid(6)}`,
      width: this.width,
      height: this.height,
      X: mouseX - this.width/2,
      Y: mouseY - this.height/2,
    };
    shelfs.push(newShelf);
    return newShelf;
  }

  isMouseClicked(mouseX, mouseY) {
    return (mouseX > this.X && mouseX < (this.X + this.width) && mouseY > this.Y && mouseY < (this.Y + this.height))
  }

  render() {
    if (this.id.includes("ST")) {
      fill("gray");
    } else {
      fill("black");
    }
    super.render();
  }

  clicked(mouseX, mouseY, callback) {
    if (this.id.includes("ST")) {
      console.log(`Clicked Shelf Type with id: ${this.id}`);
      // Product type element clicked
      // Create new product
      const newShelf = this.createNewShelf(mouseX, mouseY);
      callback(newShelf);
    } else {
      
      console.log(`Clicked Shelf with id: ${this.id}`);
      // Select product, drag it
      this.X = mouseX - this.width / 2;
      this.Y = mouseY - this.height / 2;
    }
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
