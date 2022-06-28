import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {risizeHandler} from '@/components/table/table.resize';
import {shootResize} from './table.functions';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            // listeners: ['mousedown', 'mousemove', 'mouseup']
         listeners: ['mousedown']
        });
    }
    toHtml() {
        return createTable(20)
    }
    onMousedown(event, de) {
        if (shootResize(event)) {
            risizeHandler(this.$root, event)
        }
    }
  }


// 102 мсСценарии
// 175 мсОтрисовка
// 50 мсОтображение
// 210 мсСистема
// 10096 мсБездействует
// 10633 мсВсего