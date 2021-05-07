import { IMatrix } from "./IMatrix";

export interface IMatrixSerializer {
    serialize(matrix: IMatrix): string;
}