export default class Vector4 extends Float32Array{
    constructor(x = 0, y = 0, z = 0, w = 0){
        super(4);
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    get x(){
        return this[0];
    }

    set x(v){
        this[0] = v;
    }

    get y(){
        return this[1];
    }
    
    set y(v){
        this[1] = v;
    }
    
    get z(){
        return this[2];
    }

    set z(v){
        this[2] = v;
    }

    get w(){
        return this[3];
    }
    
    set w(v){
        this[3] = v;
    }


    get magnitudeSqr(){
        return this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w;
    }

    get magnitude(){
        return Math.sqrt(this.magnitudeSqr);
    }

    dot(other: Vector4){
        return this.x*other.x + this.y*other.y + this.z*other.z + this.w*other.w;
    }

    normalize(out?: Vector4){
        const l = this.magnitude;
        return this.divScalar(l,out);
    }

    add(rhs: Vector4, out?: Vector4){
        
        if (out){
            out.x = this.x + rhs.x;
            out.y = this.y + rhs.y;
            out.z = this.z + rhs.z;
            out.w = this.w + rhs.w;
            return out;
        }
        else{
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
            this.w += rhs.w;
            return this;
        }
    }

    sub(rhs: Vector4, out?: Vector4){
        
        if(out){
            out.x = this.x - rhs.x;
            out.y = this.y - rhs.y;
            out.z = this.z - rhs.z;
            out.w = this.w - rhs.w;
            return this;
        }
        else{
            this.x -= rhs.x;
            this.y -= rhs.y;
            this.z -= rhs.z;
            this.w -= rhs.w;
            return this;
        }
    }

    mulScalar(value: number, out?: Vector4){
       
        if(out){
            out.x = this.x * value;
            out.y = this.y * value;
            out.z = this.z * value;
            out.w = this.w * value;
            return out;
        }
        else{
            this.x *= value;
            this.y *= value;
            this.z *= value;
            this.w *= value;
            return this;
        }
    }

    divScalar(value: number, out?: Vector4){
        if (out){
            out.x = this.x / value;
            out.y = this.y / value;
            out.z = this.z / value;
            out.w = this.w / value;
            return out;
        }
        else{
            this.x /= value;
            this.y /= value;
            this.z /= value;
            this.w /= value;
            return this;
        }
    }

    copyFrom(other: Vector4){
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        this.w = other.w;
    }

    clone(){
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    setValues(x = 0, y = 0, z = 0, w = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}