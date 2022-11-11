export default class Vector3 extends Float32Array{
    static ZERO = new Vector3(0,0,0);
    static POSX = new Vector3(1,0,0);
    static NEGX = new Vector3(-1,0,0);
    static POSY = new Vector3(0,1,0);
    static NEGY = new Vector3(0,-1,0);
    static POSZ = new  Vector3(0,0,1);
    static NEGZ = new Vector3(0,0,-1);

    constructor(x = 0, y = 0, z = 0){
        super(3);
        this.x = x;
        this.y = y;
        this.z = z;   
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


    get magnitudeSqr(){
        return this.x*this.x + this.y*this.y + this.z*this.z;
    }

    get magnitude(){
        return Math.sqrt(this.magnitudeSqr);
    }

    dot(other: Vector3){
        return this.x*other.x + this.y*other.y + this.z*other.z;
    }

    cross(out: Vector3, rhs: Vector3){
        const x_ = this.y*rhs.z - this.z*rhs.y;
        const y_ = this.z*rhs.x - this.x*rhs.z;
        const z_ = this.x*rhs.y - this.y*rhs.x;
        out.x = x_;
        out.y = y_;
        out.z = z_;
    }

    normalize(out?: Vector3){
        const l = this.magnitude;
        return this.divScalar(l,out);
    }

    add(rhs: Vector3, out?: Vector3){
        
        if (out){
            out.x = this.x + rhs.x;
            out.y = this.y + rhs.y;
            out.z = this.z + rhs.z;
            return out;
        }
        else{
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
            return this;
        }
    }

    sub(rhs: Vector3, out?: Vector3){
        
        if(out){
            out.x = this.x - rhs.x;
            out.y = this.y - rhs.y;
            out.z = this.z - rhs.z;
            return this;
        }
        else{
            this.x -= rhs.x;
            this.y -= rhs.y;
            this.z -= rhs.z;
            return this;
        }
    }

    mulScalar(value: number, out?: Vector3){
       
        if(out){
            out.x = this.x * value;
            out.y = this.y * value;
            out.z = this.z * value;
            return out;
        }
        else{
            this.x *= value;
            this.y *= value;
            this.z *= value;
            return this;
        }
    }

    divScalar(value: number, out?: Vector3){
        if (out){
            out.x = this.x / value;
            out.y = this.y / value;
            out.z = this.z / value;
            return out;
        }
        else{
            this.x /= value;
            this.y /= value;
            this.z /= value;
            return this;
        }
    }

    copyFrom(other: Vector3){
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
    }

    clone(){
        return new Vector3(this.x, this.y, this.z);
    }

    setValues(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}