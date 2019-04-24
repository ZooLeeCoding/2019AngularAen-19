import { trigger, transition, query, style, state, stagger, animate } from '@angular/animations'

export const ListAnimations = trigger('listAnimations', [
    transition(':enter', [
        query('li', [
            style({ opacity: 0, transform: 'translateX(200px)' }),
            stagger(-1000, [
                animate('500ms', style({ opacity: 1, transform: 'none' }))
            ])
        ])
    ])
]);

export const MakeMoreVisible = trigger('makeMoreVisible', [
    state('normal', style({
        backgroundColor: 'white',
        fontSize: "14px",
        color: "black"
    })),
    state('visible', style({
        backgroundColor: 'aqua',
        fontSize: '24px',
        color: 'red'
    })),
    transition('normal => visible', [
        animate('3s')
    ]),
    transition('visible => normal', [
        animate('1s')
    ])
]);
