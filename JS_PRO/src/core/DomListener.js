import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListener() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener)
            // Тоже самое что и addEventListener
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(
                    `Method ${method} is not implemented in ${name} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDomListener() {
        this.listeners.forEach((listener)=>{
            const method = getMethodName(listener)
            this.$root.of(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return `on` + capitalize(eventName)
}