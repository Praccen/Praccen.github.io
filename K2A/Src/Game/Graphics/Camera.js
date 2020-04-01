class Camera {
	constructor(gl) {
        //----View----
		this.posX = 0;
		this.posY = 0;
		this.posZ = 2;
		this.focX = 0;
		this.focY = 0;
		this.focZ = -1;
		this.upX = 0;
		this.upY = 1;
		this.upZ = 0;

		this.viewMatrix = new Matrix4();
		this.viewMatrix.setLookAt(this.posX, this.posY, this.posZ,
			this.focX, this.focY, this.focZ,
			this.upX, this.upY, this.upZ);
        //------------

        //----Projection----
        this.left = -4.0;
        this.right = 4.0;
        this.bottom = -2.25;
        this.top = 2.25;
        this.near = 0.01;
        this.far = 20.0;
        
		this.projectionMatrix = new Matrix4();
        this.projectionMatrix.setOrtho(this.left, this.right, this.bottom, this.top, this.near, this.far);
        //------------------
        
        //----GL----
        this.u_ViewProj = gl.getUniformLocation(gl.program, "u_ViewProj");
        this.gl = gl;
        //----------
        
        this.minPositions = {
            x: 0,
            y: 0
        }
        
        this.maxPositions = {
            x: 1000,
            y: 100
        }
        
        this.viewProjMatrix = new Matrix4();
        this.viewProjMatrix.set(this.projectionMatrix.multiply(this.viewMatrix));
        this.gl.uniformMatrix4fv(this.u_ViewProj, false, this.viewProjMatrix.elements);
	}
    
    setMinPositions(x, y) {
        this.minPositions.x = x;
        this.minPositions.y = y;
    }
    
    setMaxPositions(x, y) {
        this.maxPositions.x = x;
        this.maxPositions.y = y;
    } 

	setPosition(positionX, positionY) {
        this.posX = Math.min(Math.max(positionX, this.minPositions.x), this.maxPositions.x);
        this.posY = Math.min(Math.max(positionY, this.minPositions.y), this.maxPositions.y);
        this.focX = this.posX;
        this.focY = this.posY;
        
        var tempViewMatrix = new Matrix4();
        tempViewMatrix.setLookAt(this.posX, this.posY, this.posZ,
			this.focX, this.focY, this.focZ,
			this.upX, this.upY, this.upZ);
        this.viewMatrix = tempViewMatrix;
        
        var tempProjMatrix = new Matrix4();
        tempProjMatrix.setOrtho(this.left, this.right, this.bottom, this.top, this.near, this.far);
        this.projectionMatrix = tempProjMatrix;
        
        var tempViewProjMatrix = new Matrix4();
        tempViewProjMatrix.set(this.projectionMatrix.multiply(this.viewMatrix));
        this.viewProjMatrix = tempViewProjMatrix;
        
        this.gl.uniformMatrix4fv(this.u_ViewProj, false, this.viewProjMatrix.elements);
    }
}
