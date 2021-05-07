import { IMatrix } from "./IMatrix";

export interface IDeterminantCalculator {
    calculate(matrix: IMatrix): number;
}
