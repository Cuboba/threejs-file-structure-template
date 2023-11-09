import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setSunLight()
        this.setFog()
        this.setParticles()
    }

    setSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3, 3, - 2.25)
        this.scene.add(this.sunLight)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightPositonX')
                .min(-5)
                .max(5)
                .step(0.001)
            
            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightPositonY')
                .min(-5)
                .max(5)
                .step(0.001) 
            
            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightPositonZ')
                .min(-5)
                .max(5)
                .step(0.001) 
        }
    }
    setFog()
    {
        this.fog = new THREE.Fog(0x0000ff, 2.5, 3.5)
        this.scene.fog = this.fog

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.fog, 'near')
                .name('fogNear')
                .min(-10)
                .max(8)
                .step(0.001)

            this.debugFolder
                .add(this.fog, 'far')
                .name('fogFar')
                .min(-100)
                .max(100)
                .step(0.001)
        }
    }
    setParticles()
    {
        //geometry
        this.particlesGeometry = new THREE.BufferGeometry(1,32,32);
        this.parameters = {};
        this.count = 20000
        this.parameters.count = 0

        this.positions = new Float32Array(this.count * 3);
        this.colors = new Float32Array(this.count * 3);

        for (let i = 0; i < this.count * 3; i++) 
        {
            this.positions[i] = (Math.random() - 0.5) * 10,
            this.colors[i] = Math.random()
        }

        this.particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.positions, 3),
        )

        this.particlesGeometry.setAttribute(
            'color',
            new THREE.BufferAttribute(this.colors, 3),
        )


        //material
        this.particlesMaterial = new THREE.PointsMaterial({
            color: 0xCDC4EE,
            size: 0.01,
            sizeAttenuation: true,
        })

        this.particlesMaterial.transparent = true;
        this.particlesMaterial.alphaMap = this.particleTexture;
        this.particlesMaterial.depthWrite = false;
        this.particlesMaterial.blending = THREE.AdditiveBlending;
        this.particlesMaterial.vertexColors = true;


        //points

        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial);

        this.scene.add(this.particles)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.particlesMaterial, 'size')
                .name('particlePointSize')
                .min(-0.001)
                .max(3)
                .step(0.0001)

                this.debugFolder
                .add(this.parameters, 'count')
                .name('particleCount')
                .min(10000)
                .max(100000)
                .step(10)
                .onChange( () =>
                {
                    this.parameters.count.set(this.count)
                }
                )
        }
        
    }
}