import { IMatrix } from "./IMatrix";

export interface IMatrixFactory {
    createIdentical(size: number): IMatrix;
}