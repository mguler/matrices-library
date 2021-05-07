export interface IMatrix {
    height: number;
    width: number;
    createIdentical(): IMatrix;
    determinant(): number;
    inverse(): IMatrix;
    transpoze(): IMatrix;
    normalize(): Promise<IMatrix>;
    toArray(): Array<Array<any>>;
    substract(matrix: IMatrix): Promise<IMatrix>;
    add(matrix: IMatrix): Promise<IMatrix>;
    multiply(matrix: IMatrix): Promise<IMatrix>;
}