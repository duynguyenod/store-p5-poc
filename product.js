class Product extends BaseObject{
    constructor(id, width, height, X, Y) {
        super(id, width, height, X, Y);
    }

    createNewProduct() {
        products.push({
            id: `P${uuidv4()}`,
            width: this. width,
            height: this.height,
            X: this.X,
            Y: this.Y
        });
    }

    clicked() {
        if(!this.isMouseClicked(mouseX, mouseY)) return;
        if(this.id.includes('PT')) {
            this.createNewProduct();
        }else {

        }
    }

    isMouseClicked(mouseX, mouseY) {
        return this.X <= mouseX && mouseY <= this.X + this.width &&
               this.Y <= mouseY && mouseY <= this.Y + this.height;
    }
}