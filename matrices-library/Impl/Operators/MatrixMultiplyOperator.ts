import { IMatrixOperator } from "../../Abstract/IMatrixOperator";
import { IMatrix } from "../../Abstract/IMatrix";
import { Matrix } from "../Matrix";

export class MatrixMultiplyOperator implements IMatrixOperator {

    public async operate(left: IMatrix, right: number): Promise<IMatrix>;
    public async operate(left: IMatrix, right: IMatrix): Promise<IMatrix>;
    public async operate(left: IMatrix, right: any): Promise<IMatrix> {

        var result: IMatrix = null;

        if (right.constructor.name == "Number") {
            result = await this.operateWithNumber(left, right);
        } else  {
            result = await this.operateWithMatrix(left, right);
        } 
        //else {
        //    throw new Error("cannot operate type of " + right.constructor.name);
        //}

        return result;
    }
    ////////////////////////////////////////////////////////////////////////////////////
    //         
    //  Cij =  Aij * right
    //
    ////////////////////////////////////////////////////////////////////////////////////       
    private async operateWithNumber(left: IMatrix, right: number): Promise<IMatrix> {

        var lm = left.toArray();
        var result = [];

        for (var i = 0; i < lm.length; i++) {
            var row = [];
            for (var j = 0; j < lm.length; j++) {
                var value = lm[i][j] * right;
                row.push(value);
            }
            result.push(row);
        }
        return new Matrix(result);

    }

    ////////////////////////////////////////////////////////////////////////////////////
    //         ___ n
    //  Cij =  \__      Aik * Bkj
    //         /__ k=1 
    ////////////////////////////////////////////////////////////////////////////////////         
    private async operateWithMatrix(left: IMatrix, right: IMatrix): Promise<IMatrix> {
        var lm = left.toArray();
        var rm = right.toArray();
        var result = [];

        for (var i = 0; i < lm.length; i++) {
            var row = [];
            for (var j = 0; j < rm[i].length; j++) {
                var value = 0;
                for (var k = 0; k < lm.length; k++) {
                    value += lm[i][k] * rm[k][j];
                }
                row.push(value);
            }
            result.push(row);
        }
        return new Matrix(result);
    }
} 