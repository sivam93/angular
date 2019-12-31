import { 
    trigger,
    transition, 
    state, 
    animate, 
    style, 
    group
} 
from '@angular/animations';

export const slideDownUp = [
    trigger('slideDownUp', [
        transition('void => *', [
            style({height: '0',opacity: 0}),

            group([
                animate('0.45s cubic-bezier(0.445, 0.05, 0.55, 0.95)', style({height: '*'})),
            ])

        ]),
        state("slideUp",style({
                height:0,
                padding:'0 30px',
                transform: 'translateY(-100%)'
            })),
        state("slideDown",style({
            height:'*',
            transform: 'translateY(0%)'
        })),
        transition('slideUp => slideDown',[animate('0.45s cubic-bezier(0.445, 0.05, 0.55, 0.95)')]),
        transition('slideDown => slideUp',[animate('0.45s cubic-bezier(0.445, 0.05, 0.55, 0.95)')])
    ])
]
