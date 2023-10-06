import EventEmitter from "./EventEmitter"

export default class GetScroll extends EventEmitter
{
    constructor()
    {
        super()

        this.scrollY = window.scrollY
        this.getScroll()
    }

    getScroll()
    {
        window.addEventListener('scroll', () => 
        {
            this.scrollY = window.scrollY

            this.trigger('scroll')
        })
    }
}