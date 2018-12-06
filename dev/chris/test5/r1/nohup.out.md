```
Neural Doodle for semantic style transfer.
  - Using device `cpu` for processing the images.
  - Loading `../content-ali.jpg` for content data.
  - Adding `../content-ali_sem.png` as semantic map.
  - Loading `../style-nagel.jpg` for style data.
  - Adding `../style-nagel_sem.png` as semantic map.

Phase #0: resolution 53x51  scale 0.125
  - Style layer 3_1: (154, 260, 3, 3) patches in 360kb.
  - Style layer 4_1: (24, 516, 3, 3) patches in 111kb.
  - Content layer conv4_2: 512 features in 18kb.

  0   loss 1.43e+04   content 4_2 8.32e+02   style 3_1 2.55e+03  4_1 1.07e+04   quality  0.0%   time 1.0s
 10   loss 7.55e+03   content 4_2 6.30e+02   style 3_1 1.89e+03  4_1 4.88e+03   quality 14.9%   time 11.9s
 20   loss 6.37e+03   content 4_2 6.57e+02   style 3_1 1.72e+03  4_1 3.87e+03   quality 27.6%   time 9.9s
 30   loss 5.92e+03   content 4_2 6.66e+02   style 3_1 1.61e+03  4_1 3.55e+03   quality 37.2%   time 10.1s

Phase #1: resolution 107x102  scale 0.25
  - Style layer 3_1: (744, 260, 3, 3) patches in 1,740kb.
  - Style layer 4_1: (154, 516, 3, 3) patches in 715kb.
  - Content layer conv4_2: 512 features in 79kb.

 40   loss 9.98e+03   content 4_2 1.04e+03   style 3_1 2.40e+03  4_1 6.53e+03   quality  3.0%   time 5.5s
 50   loss 6.29e+03   content 4_2 8.17e+02   style 3_1 1.75e+03  4_1 3.71e+03   quality 34.3%   time 70.4s
 60   loss 5.80e+03   content 4_2 8.36e+02   style 3_1 1.61e+03  4_1 3.35e+03   quality 51.3%   time 48.3s
 70   loss 5.56e+03   content 4_2 8.44e+02   style 3_1 1.52e+03  4_1 3.17e+03   quality 59.8%   time 37.8s

Phase #2: resolution 215x205  scale 0.5
  - Style layer 3_1: (3264, 260, 3, 3) patches in 7,637kb.
  - Style layer 4_1: (744, 516, 3, 3) patches in 3,455kb.
  - Content layer conv4_2: 512 features in 332kb.

 80   loss 8.92e+03   content 4_2 1.03e+03   style 3_1 1.91e+03  4_1 5.97e+03   quality  4.5%   time 15.1s
 90   loss 5.76e+03   content 4_2 8.28e+02   style 3_1 1.26e+03  4_1 3.67e+03   quality 38.3%   time 171.0s
100   loss 5.31e+03   content 4_2 8.26e+02   style 3_1 1.15e+03  4_1 3.32e+03   quality 56.6%   time 156.5s
110   loss 5.04e+03   content 4_2 8.29e+02   style 3_1 1.09e+03  4_1 3.12e+03   quality 66.9%   time 160.8s

Phase #3: resolution 430x411  scale 1.0
  - Style layer 3_1: (13755, 260, 3, 3) patches in 32,186kb.
  - Style layer 4_1: (3264, 516, 3, 3) patches in 15,158kb.
  - Content layer conv4_2: 512 features in 1,383kb.

120   loss 6.08e+03   content 4_2 8.38e+02   style 3_1 1.27e+03  4_1 3.97e+03   quality  4.9%   time 85.6s
130   loss 4.36e+03   content 4_2 7.06e+02   style 3_1 9.48e+02  4_1 2.71e+03   quality 41.8%   time 752.5s
140   loss 4.04e+03   content 4_2 7.06e+02   style 3_1 8.57e+02  4_1 2.48e+03   quality 63.2%   time 784.5s
150   loss 3.87e+03   content 4_2 7.09e+02   style 3_1 8.00e+02  4_1 2.36e+03   quality 74.1%   time 769.3s

Optimization finished in 4019.5s, average pixel error 10.3!
```
