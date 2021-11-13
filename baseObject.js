class BaseObject {
    constructor(id, width, height, X, Y) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.X = X;
        this.Y = Y;
    }

    render() {
        console.log(this)
        rect(this.X, this.Y, this.width, this.height, 5);
        text(this.id, this.X, this.Y);
    }
}