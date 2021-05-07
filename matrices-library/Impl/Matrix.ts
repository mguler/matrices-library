import { IMatrix } from "../Abstract/IMatrix";
import { IDeterminantCalculator } from "../Abstract/IDeterminantCalculator";
import { IMatrixInversion } from "../Abstract/IMatrixInversion";
import { IMatrixTranspoze } from "../Abstract/IMatrixTranspoze";
import { IMatrixSerializer } from "../Abstract/IMatrixSerializer";
import { IMatrixFactory } from "../Abstract/IMatrixFactory";
import { IMatrixOperator } from "../Abstract/IMatrixOperator";
import { IMatrixNormalization } from "../Abstract/IMatrixNormalization";
import { DeterminantCalculatorBareissImpl } from "./Determinant/DeterminantCalculatorBareissImpl";
import { MatrixInversionBareissImpl } from "./Inversion/MatrixInversionBareissImpl";
import { MatrixTranspozeDefaultImpl } from "./Transpoze/MatrixTranspozeDefaultImpl";
import { MatrixSerializerDefaultImpl } from "./Serialization/MatrixSerializerDefaultImpl";
import { MatrixFactoryDefaultImpl } from "./Factory/MatrixFactoryDefaultImpl";
import { MatrixSumOperator } from "./Operators/MatrixSumOperator";
import { MatrixMultiplyOperator } from "./Operators/MatrixMultiplyOperator";
import { MatrixNormalizationDefaultImpl } from "./Normalization/MatrixNormalizationDefaultImpl";
import { MatrixSubtractOperator } from "./Operators/MatrixSubtractOperator";

export class Matrix implements IMatrix {

    private _matrix: Array<Array<any>>;
    private readonly _determinantCalculator: IDeterminantCalculator = new DeterminantCalculatorBareissImpl();
    private readonly _matrixInversion: IMatrixInversion = new MatrixInversionBareissImpl();
    private readonly _matrixTranspoze: IMatrixTranspoze = new MatrixTranspozeDefaultImpl();
    private readonly _matrixNormalize: IMatrixNormalization = new MatrixNormalizationDefaultImpl();
    private readonly _matrixSerializer: IMatrixSerializer = new MatrixSerializerDefaultImpl();
    private readonly _matrixFactory: IMatrixFactory = new MatrixFactoryDefaultImpl();
    private readonly _matrixSumOperator: IMatrixOperator = new MatrixSumOperator();
    private readonly _matrixSubtractOperator: IMatrixOperator = new MatrixSubtractOperator();
    private readonly _matrixMultiplyOperator: IMatrixOperator = new MatrixMultiplyOperator();

    public get height() { return this._matrix.length; }
    public get width() { return this._matrix.length; }

    constructor(array: Array<Array<any>>) {
        this._matrix = array;
    }

    public inverse(): IMatrix {
        var inverted = this._matrixInversion.inverse(this);
        return inverted;
    }

    public transpoze(): IMatrix {
        var transpozed = this._matrixTranspoze.transpoze(this);
        return transpozed;
    }
    public async normalize(): Promise<IMatrix> {
        var normalized = await this._matrixNormalize.normalize(this);
        return normalized;
    }
    public determinant(): number {
        var determinant = this._determinantCalculator.calculate(this);
        return determinant;
    }
    public createIdentical(): IMatrix {
        var identical = this._matrixFactory.createIdentical(this._matrix.length);
        return identical;
    }
    public toArray(): Array<Array<any>> {
        return this._matrix;
    }
    public toString(): string {
        var serialized = this._matrixSerializer.serialize(this);
        return serialized;
    }
    public async substract(matrix: IMatrix): Promise<IMatrix> {
        var result = this._matrixSubtractOperator.operate(this, matrix);
        return result;
    }
    public async add(matrix: IMatrix): Promise<IMatrix> {
        var result = await this._matrixSumOperator.operate(this, matrix);
        return result;
    }
    public async multiply(matrix: IMatrix): Promise<IMatrix> {
        var result = this._matrixMultiplyOperator.operate(this, matrix);
        return result;
    }
}
