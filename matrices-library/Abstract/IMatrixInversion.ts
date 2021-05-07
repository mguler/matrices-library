import { IMatrix } from "./IMatrix";

export interface IMatrixInversion {
    inverse(matrix: IMatrix): IMatrix;
} 