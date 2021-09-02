import {block} from '../utils'
import { LinkBlock, ListBlock, TextBlock, TitleBlock } from './blocks'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
            block('list'),
            block('link')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock
        if (type === 'title') {
            newBlock = new TitleBlock(value, {styles})
        } else if (type === 'text') {
            newBlock = new TextBlock(value, {styles})
        } else if (type === 'list') {
            newBlock = new ListBlock(value, {styles})
        } else if (type === 'link') {
            newBlock = new LinkBlock(value, {styles})
        }

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}