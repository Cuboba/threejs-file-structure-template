import Experience from "../Experience";
import Environment from "./Environment.js"
import Vinayagar from "./vinayagar.js";

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resouces
        this.resources.on('ready', () => 
        {
             // Setup
             this.environment = new Environment()
             this.vinayagar = new Vinayagar()
             
        })
    }
    update()
    {
    }
}