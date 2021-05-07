import { IMatrix } from "../../Abstract/IMatrix";
import { IMatrixInversion } from "../../Abstract/IMatrixInversion";
import { Matrix } from "../Matrix";

export class MatrixInversionBareissImpl implements IMatrixInversion {

    public inverse(matrix: IMatrix): IMatrix {

        var m = matrix.toArray();
        var i = matrix.createIdentical().toArray();

        var next = [];
        var nexti = [];
 
        for (var y = 0, x = 0; y < m.length; x++, y++) {

            var previousPivot = pivot;

            if (y == 0) {
                previousPivot = 1;
            } else {
                previousPivot = pivot;
            }

            console.log(new Matrix(m).toString());
            console.log(pivot);

            for (var y2 = 0; y2 < m.length; y2++) {

                if (y2 == y) {
                    next.push(m[y2]);
                    nexti.push(i[y2]);
                    continue;
                }
                var row = [];
                var rowi = [];

                for (var x2 = 0; x2 < m.length; x2++) {

                    var pivot = m[y][x];
                    var currentValue = m[y2][x2];
                    var rowValue = m[y2][x];
                    var colValue = m[y][x2];

                    var currentValuei = i[y2][x2];
                    var colValuei = i[y][x2]; 

                    var result = (pivot * currentValue - rowValue * colValue) / previousPivot;
                    var resulti = (pivot * currentValuei - rowValue * colValuei) / previousPivot;

                    row.push(result);
                    rowi.push(resulti);
                }
                next.push(row);
                nexti.push(rowi);
            }
            m = next;
            i = nexti;
            next = [];
            nexti = [];
        }
        console.log(new Matrix(m).toString());
        console.log(new Matrix(i).toString());

        var determinant = m[m.length - 1][m.length - 1];
        if (determinant == 0) {
            throw new Error("Cannot inverse the matrix when determinant is equals to zero");
        }
        return new Matrix(i);
    }
}