class Shelf extends BaseObject{
    constructor(id, width, height, X, Y) {
        super(id, width, height, X, Y);
        this.numberOfShelfs = 0;
    }

    createNewShelf() {
        shelfs.push({
            id: `S${++this.numberOfShelfs}`,
            width: this. width,
            height: this.height,
            X: this.X,
            Y: this.Y
        });
    }
}