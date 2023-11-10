import * as THREE from 'three'
import Experience from "../Experience";
import GetScroll from '../Utils/GetScroll';
import GetCursor from '../Utils/GetCursor';

export default class TribusLogo
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.GetScroll = new GetScroll()
        this.GetCursor = new GetCursor()

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Tribus Logo')
        }

        // Setup
        this.resource = this.resources.items.tribusLogo

        this.setModel()
        // this.animateOnScroll()
        // this.animateOnMouseMove()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(1,1,1)
        this.model.position.set(0,0,0)
        this.model.rotation.set(0,0,0)
        this.scene.add(this.model)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
                .add(this.model.position, 'x')
                .name('modelPositionX')
                .min(-4)
                .max(4)
                .step(0.01)
 
            this.debugFolder
                .add(this.model.position, 'y')
                .name('modelPositionY')
                .min(-4)
                .max(4)
                .step(0.01)
 
             this.debugFolder
                .add(this.model.position, 'z')
                .name('modelPositionZ')
                .min(-4)
                .max(4)
                .step(0.01)

                this.debugFolder
                .add(this.model.rotation, 'x')
                .name('modelRotationX')
                .min(-4)
                .max(4)
                .step(0.01)
 
            this.debugFolder
                .add(this.model.rotation, 'y')
                .name('modelRotationY')
                .min(-4)
                .max(4)
                .step(0.01)
 
             this.debugFolder
                .add(this.model.rotation, 'z')
                .name('modelRotationZ')
                .min(-4)
                .max(4)
                .step(0.01)
        }
    }

    animateOnScroll()
    {
        this.GetScroll.on('scroll', () =>
        {
            this.scrollY = this.GetScroll.scrollY
            this.model.rotation.z = this.scrollY * 0.005
        }
        )
    }

    animateOnMouseMove()
    {
        this.GetCursor.on('mouseMove', () => 
        {
            this.cursor = this.GetCursor.cursor
            this.model.rotation.x = this.cursor.x
            this.model.rotation.y = this.cursor.y
        })
    }

    update()
    {
    }
}
