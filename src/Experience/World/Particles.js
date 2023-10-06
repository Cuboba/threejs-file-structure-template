import * as THREE from 'three'
export default class Particles
{
    constuctor()
    {
        
        /**
         *  SETUP
         */
        
        // Geometry

        this.count = 500
        this.positions = new Float32Array(this.count *3)

        // Material
        this.material = new THREE.PointsMaterial()

        this.setGeometry()
        this.setMaterial()

        // Points
        this.particles = new THREE.Points(this.geometry, this.material)
    }

    setGeometry()
    {
        for ( let i = 0; i < this.count * 3; i ++)
        {
            this.positions[ i * 3 + 0] = ( Math.random() - 0.5 ) * 10
            this.positions[ i * 3 + 1] = 4 * 0.5 - Math.random() * 4 * 12
            this.positions[ i * 3 + 2] = ( Math.random() - 0.5 ) * 10
        }

        this.geometry = new THREE.BufferGeometry()
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions,3))
    }

    setMaterial()
    {
        this.material({
            color: 0xffffff,
            sizeAttenuation: true,
            size: 0.03,
        })
    }
}