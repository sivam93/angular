import { 
    trigger,
    transition, 
    state, 
    animate, 
    style, 
    group
} 
from '@angular/animations';

export const fadeInOut = [
    trigger('fadeInOut',[
        transition('void => *', [
            style({opacity: '0',transform:'scale3D(0.98, 1, 1.7)'}),
            animate('0.3s 0.55s cubic-bezier(0.645, 0.045, 0.355, 1)'),
        ]),
        state("fadeOut",style({
            opacity:0,
            transform:'scale3D(0.98, 1, 1.7)'
        })),
        state("fadeIn",style({
            opacity:1,
            transform:'scale3D(1,1,1)'
        })),
        transition('fadeOut => fadeIn',[animate('0.3s 0.55s cubic-bezier(0.645, 0.045, 0.355, 1)')]),
        transition('fadeIn => fadeOut',[animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)')])
    ])
]