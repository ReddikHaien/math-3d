import { assertEquals } from "https://deno.land/std@0.163.0/testing/asserts.ts";
import Vector3 from "../vector/vector3.ts";
import Matrix4 from "./matrix4.ts";



function checkMatrix(matrix: Matrix4, expected: Float32Array){
    for (let col = 0; col < 4; col++){
        for(let row = 0; row < 4; row++){
            assertEquals(matrix[col*4+row],expected[col*4+row], `wrong value at [${col},${row}]. Expected ${expected[col*4+row]}, but received ${matrix[col*4+row]}`);
        }
    }
}

Deno.test("matrix creation",() => {
    //ARRANGE
    const expectedLength = 16;

    //ACT
    const matrix = new Matrix4();

    //ASSERT
    assertEquals(matrix.length,expectedLength);
    assertEquals(matrix.reduce((nonZero,p) => nonZero || p != 0 ,false),false);
});

Deno.test("matrix identity", () => {
    //ARRANGE
    const matrix = new Matrix4();

    const IDENTITY = new Float32Array([
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1
    ]);

    //ACT
    matrix.setIdentity();

    //ASSERT
    checkMatrix(matrix,IDENTITY);
});

Deno.test("matrix translation", () => {
    //ARRANGE
    const translation = new Vector3(1,2,3);
    const matrix = new Matrix4();
    
    const expectedMatrix = new Float32Array([
        1,0,0,1,
        0,1,0,2,
        0,0,1,3,
        0,0,0,1
    ]);

    //ACT
    matrix.fromTranslation(translation);
    
    //ASSERT
    checkMatrix(matrix,expectedMatrix);
});

