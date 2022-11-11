import Vector3 from "../vector/vector3.ts";
import Vector4 from "../vector/vector4.ts";

export default class Matrix4 extends Float32Array{
    constructor(){
        super(16);
    }
    setIdentity(){        
        this[0] =  1; this[1] =  0; this[2] =  0; this[3] =  0;
        this[4] =  0; this[5] =  1; this[6] =  0; this[7] =  0;
        this[8] =  0; this[9] =  0; this[10] = 1; this[11] = 0;
        this[12] = 0; this[13] = 0; this[14] = 0; this[15] = 1;
    }

    fromTranslation(translation: Vector3){
        this[0] =  1; this[1] =  0; this[2] =  0; this[3] =  translation.x;
        this[4] =  0; this[5] =  1; this[6] =  0; this[7] =  translation.y;
        this[8] =  0; this[9] =  0; this[10] = 1; this[11] = translation.z;
        this[12] = 0; this[13] = 0; this[14] = 0; this[15] = 1;
    }

    fromRotationX(angle: number){
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        this[0] =  1; this[1] =  0; this[2] =  0; this[3] =  0;
        this[4] =  0; this[5] =  c; this[6] = -s; this[7] =  0;
        this[8] =  0; this[9] =  s; this[10] = c; this[11] = 0;
        this[12] = 0; this[13] = 0; this[14] = 0; this[15] = 1;
    }

    fromRotationY(angle: number){
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        this[0] =  c; this[1] =  0; this[2] =  s; this[3] =  0;
        this[4] =  0; this[5] =  1; this[6] =  0; this[7] =  0;
        this[8] = -s; this[9] =  0; this[10] = c; this[11] = 0;
        this[12] = 0; this[13] = 0; this[14] = 0; this[15] = 1;
    }

    fromRotationZ(angle: number){
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        this[0] =  c; this[1] = -s; this[2] =  0; this[3] =  0;
        this[4] =  s; this[5] =  c; this[6] =  0; this[7] =  0;
        this[8] =  0; this[9] =  0; this[10] = 1; this[11] = 0;
        this[12] = 0; this[13] = 0; this[14] = 0; this[15] = 1;
    }

    fromScale(scale: Vector3){
        this[0] =  scale.x; this[1] =        0; this[2] =        0; this[3] =  0;
        this[4] =        0; this[5] =  scale.y; this[6] =        0; this[7] =  0;
        this[8] =        0; this[9] =        0; this[10] = scale.z; this[11] = 0;
        this[12] =       0; this[13] =       0; this[14] =       0; this[15] = 1;
    }

    getValue(col: number, row: number){
        if (row < 0 || row >= 4 || col < 0 || col >= 4){
            throw new Error(`position out of bounds [${col},${row}]`)
        }
        return this[col * 4 + row];
    }
    
    setValue(col: number, row: number, value: number){
        if (row < 0 || row >= 4 || col < 0 || col >= 4){
            throw new Error(`position out of bounds [${col},${row}]`)
        }
        this[col * 4 + row] = value;
    }

    multiply(out: Matrix4, rhs: Matrix4){
        const a00 = this[0],  a01 = this[1],  a02 = this[2],  a03 = this[3],
              a10 = this[4],  a11 = this[5],  a12 = this[6],  a13 = this[7],
              a20 = this[8],  a21 = this[9],  a22 = this[10], a23 = this[11],
              a30 = this[12], a31 = this[13], a32 = this[14], a33 = this[15];

        const b00 = rhs[0],  b01 = rhs[1],  b02 = rhs[2],  b03 = rhs[3],
              b10 = rhs[4],  b11 = rhs[5],  b12 = rhs[6],  b13 = rhs[7],
              b20 = rhs[8],  b21 = rhs[9],  b22 = rhs[10], b23 = rhs[11],
              b30 = rhs[12], b31 = rhs[13], b32 = rhs[14], b33 = rhs[15];

        out[0] = a00*b00 + a01*b10 + a02*b20 + a03*b30;
        out[1] = a00*b01 + a01*b11 + a02*b21 + a03*b31;
        out[2] = a00*b02 + a01*b12 + a02*b22 + a03*b32;
        out[3] = a00*b03 + a01*b13 + a02*b23 + a03*b33;
        out[4] = a10*b00 + a11*b10 + a12*b20 + a13*b30;
        out[5] = a10*b01 + a11*b11 + a12*b21 + a13*b31;
        out[6] = a10*b02 + a11*b12 + a12*b22 + a13*b32;
        out[7] = a10*b03 + a11*b13 + a12*b23 + a13*b33;
        out[8] = a20*b00 + a21*b10 + a22*b20 + a23*b30;
        out[9] = a20*b01 + a21*b11 + a22*b21 + a23*b31;
        out[10] = a20*b02 + a21*b12 + a22*b22 + a23*b32;
        out[11] = a20*b03 + a21*b13 + a22*b23 + a23*b33;
        out[12] = a30*b00 + a31*b10 + a32*b20 + a33*b30;
        out[13] = a30*b01 + a31*b11 + a32*b21 + a33*b31;
        out[14] = a30*b02 + a31*b12 + a32*b22 + a33*b32;
        out[15] = a30*b03 + a31*b13 + a32*b23 + a33*b33;

        return out;
    }

    transformVec4(out: Vector4, rhs: Vector4){
        const a00 = this[0],  a01 = this[1],  a02 = this[2],  a03 = this[3],
              a10 = this[4],  a11 = this[5],  a12 = this[6],  a13 = this[7],
              a20 = this[8],  a21 = this[9],  a22 = this[10], a23 = this[11],
              a30 = this[12], a31 = this[13], a32 = this[14], a33 = this[15];

        const x = rhs.x, y = rhs.y, z = rhs.z, w = rhs.w;
        
        const x_ = x*a00 + y*a01 + z*a02 + w*a03;
        const y_ = x*a10 + y*a11 + z*a12 + w*a13;
        const z_ = x*a20 + y*a21 + z*a22 + w*a23;
        const w_ = x*a30 + y*a31 + z*a32 + w*a33;

        out.setValues(x_, y_, z_, w_);
    }
}