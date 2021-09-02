import {TitleBlock, TextBlock, ListBlock, LinkBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Heelow World!', {
        tag: 'h2',
        styles: {
            color: '#000',
            'text-align': 'left',
            'font-weight': 'bold',
            'padding': '1.5rem'
        }
    }),
    new TextBlock('Lorem ipsum dolor sit amet', {
        styles: {
            color: '#000',
            padding: '1.5rem'
        }
    }),
    new ListBlock([
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one'
    ], {
        styles: {
            padding: '1.5rem',
            width: '500px'
        }
    }),
    new LinkBlock('http://stys.sty', {
        styles: {
            padding: '1.5rem',
            'font-size': '20px'
        }
    })
]