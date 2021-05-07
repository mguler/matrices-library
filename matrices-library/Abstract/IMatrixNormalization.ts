import { IMatrix } from "./IMatrix";

export interface IMatrixNormalization {
    normalize(matrix: IMatrix): Promise<IMatrix>;
} 