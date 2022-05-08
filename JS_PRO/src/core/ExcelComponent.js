import {DomListener} from './DomListener'


export class ExcelComponent extends DomListener {
    constructor($root, options= {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }
    // возращает шаблон компонента
    toHtml() {
        return ''
    }
    init() {
        this.initDomListener()
    }
    destroy() {
        this.removeDomListener()
    }
}
