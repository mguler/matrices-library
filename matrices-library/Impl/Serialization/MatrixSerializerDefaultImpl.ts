import { IMatrixSerializer } from "../../Abstract/IMatrixSerializer";
import { IMatrix } from "../../Abstract/IMatrix";

export class MatrixSerializerDefaultImpl implements IMatrixSerializer {
   public serialize(matrix: IMatrix): string {

        var m = matrix.toArray();
        var longest = 0;
        for (var y = 0; y < m.length; y++) {
            for (var x = 0; x < m.length; x++) {
                var val =""+ Math.round((m[y][x] + Number.EPSILON) * 100) / 100;
                if (val.length > longest) {
                    longest = val.length + 1;
                }
            }
       }

       var result = "--" + this.padleft("", (1+(longest + 1) * m.length) - 2) + "--\r\n";
       var end = result;
       for (var y = 0; y < m.length; y++) {
            val = "| ";
           for (var x = 0; x < m.length; x++) {
               var current = Math.round((m[y][x] + Number.EPSILON) * 100) / 100; 
                val += this.padleft(current+"", longest) + ",";
            }
            result = result + val.substring(0, val.length - 1) + " |\r\n";
       }

       return result + end;
    }

    private padleft(val: string, size: number,char:string = " "): string {
        let s = val + "";
        while (s.length < size) s = char + s;
        return s;
    }
}