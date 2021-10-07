import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);

export const slider = trigger('routeAnimations', [
  transition('inicio => menu', slideTo('right')),
  transition('inicio => galeria', slideTo('right')),
  transition('inicio => contacto', slideTo('right')),
  transition('inicio => *', slideTo('right')),

  transition('menu => inicio', slideTo('left')),
  transition('menu => galeria', slideTo('right')),
  transition('menu => contacto', slideTo('right')),
  transition('menu => *', slideTo('right')),

  transition('galeria => inicio', slideTo('left')),
  transition('galeria => menu', slideTo('left')),
  transition('galeria => contacto', slideTo('right')),
  transition('galeria => *', slideTo('right')),

  transition('contacto => inicio', slideTo('left')),
  transition('contacto => menu', slideTo('left')),
  transition('contacto => galeria', slideTo('left')),
  transition('contacto => *', slideTo('right')),
]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
