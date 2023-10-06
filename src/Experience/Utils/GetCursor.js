import EventEmitter from "./EventEmitter";
import Sizes from "./Sizes";

export default class GetCursor extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.sizes = new Sizes()
       
        this.cursor = {}
        this.cursor.x = 0;
        this.cursor.y = 0;

        this.GetCursor()
    }    

    GetCursor()
    {
        window.addEventListener('mousemove', (event) => 
        {
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = event.clientY / this.sizes.height - 0.5

            this.trigger('mouseMove')
        })
    }

}
