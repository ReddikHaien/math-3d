export default class Vector2 extends Float32Array{

    static ZERO = new Vector2(0,0);
    static POSX = new Vector2(1,0);
    static NEGX = new Vector2(-1,0);
    static POSY = new Vector2(0,1);
    static NEGY = new Vector2(0,-1);

    constructor(x = 0, y = 0){
        super(2);
        this[0] = x;
        this[1] = y;
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
    
    get magnitudeSqr(){
        return this.x*this.x + this.y*this.y;
    }

    get magnitude(){
        return Math.sqrt(this.magnitudeSqr);
    }

    dot(other: Vector2){
        return this.x*other.x + this.y*other.y;
    }

    normalize(out?: Vector2){
        const l = this.magnitude;
        return this.divScalar(l,out);
    }

    add(rhs: Vector2, out?: Vector2){
        
        if (out){
            out.x = this.x + rhs.x;
            out.y = this.y + rhs.y;
            return out;
        }
        else{
            this.x += rhs.x;
            this.y += rhs.y;
            return this;
        }
    }

    sub(rhs: Vector2, out?: Vector2){
        
        if(out){
            out.x = this.x - rhs.x;
            out.y = this.y - rhs.y;
            return out;
        }
        else{
            this.x -= rhs.x;
            this.y -= rhs.y;
            return this;
        }
    }

    mulScalar(value: number, out?: Vector2){
       
        if(out){
            out.x = this.x * value;
            out.y = this.y * value;
            return out;
        }
        else{
            this.x *= value;
            this.y *= value;
            return this;
        }
    }

    divScalar(value: number, out?: Vector2){
        if (out){
            out.x = this.x / value;
            out.y = this.y / value;
            return out;
        }
        else{
            this.x /= value;
            this.y /= value;
            return this;
        }
    }

    copyFrom(other: Vector2){
        this.x = other.x;
        this.y = other.y;
    }

    clone(){
        return new Vector2(this.x, this.y);
    }

    setValues(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}