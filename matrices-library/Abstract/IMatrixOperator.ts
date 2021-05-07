import { IMatrix } from "./IMatrix";

export interface IMatrixOperator {
    operate(left: IMatrix, right: number): Promise<IMatrix>;
    operate(left: IMatrix, right: IMatrix): Promise<IMatrix>;
    operate(left: IMatrix, right: any): Promise<IMatrix>;
}