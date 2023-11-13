//Example model from Thirumagal on TurboSquid https://www.turbosquid.com/Search/Artists/Thirumagal

import * as THREE from 'three'
import Experience from "../Experience";
import GetScroll from '../Utils/GetScroll';
import GetCursor from '../Utils/GetCursor';

export default class Vinayagar
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
            this.debugFolder = this.debug.ui.addFolder('Vinayagar')
        }

        // Setup
        this.resource = this.resources.items.vinayagar

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(1,1,1)
        this.model.position.set(0,-1.5,0)
        this.model.rotation.set(0,1.5,0)
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
}
