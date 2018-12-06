```
Neural Doodle for semantic style transfer.
  - Using device `cpu` for processing the images.
  - Loading `content-ali.jpg` for content data.
  - Adding `content-ali_sem.png` as semantic map.
  - Loading `style-nagel.jpg` for style data.
  - Adding `style-nagel_sem.png` as semantic map.

Phase #0: resolution 53x51  scale 0.125
  - Style layer 3_1: (154, 260, 3, 3) patches in 360kb.
  - Style layer 4_1: (24, 516, 3, 3) patches in 111kb.
  - Content layer conv4_2: 512 features in 18kb.

  0   loss 7.49e+03   content 4_2 8.10e+02   style 3_1 1.25e+03  4_1 5.21e+03   quality  1.8%   time 1.0s
 10   loss 4.07e+03   content 4_2 5.51e+02   style 3_1 9.55e+02  4_1 2.42e+03   quality 24.3%   time 9.1s
 20   loss 3.48e+03   content 4_2 5.43e+02   style 3_1 8.62e+02  4_1 1.99e+03   quality 40.6%   time 9.2s
 30   loss 3.20e+03   content 4_2 5.65e+02   style 3_1 8.02e+02  4_1 1.78e+03   quality 52.7%   time 9.3s

Phase #1: resolution 107x102  scale 0.25
  - Style layer 3_1: (744, 260, 3, 3) patches in 1,740kb.
  - Style layer 4_1: (154, 516, 3, 3) patches in 715kb.
  - Content layer conv4_2: 512 features in 79kb.

 40   loss 5.39e+03   content 4_2 1.02e+03   style 3_1 1.18e+03  4_1 3.19e+03   quality  2.8%   time 3.7s
 50   loss 3.46e+03   content 4_2 7.13e+02   style 3_1 8.50e+02  4_1 1.89e+03   quality 37.1%   time 35.4s
 60   loss 3.24e+03   content 4_2 7.15e+02   style 3_1 7.91e+02  4_1 1.73e+03   quality 58.0%   time 36.2s
 70   loss 3.15e+03   content 4_2 7.16e+02   style 3_1 7.52e+02  4_1 1.67e+03   quality 66.9%   time 35.5s

Phase #2: resolution 215x205  scale 0.5
  - Style layer 3_1: (3264, 260, 3, 3) patches in 7,637kb.
  - Style layer 4_1: (744, 516, 3, 3) patches in 3,455kb.
  - Content layer conv4_2: 512 features in 332kb.

 80   loss 4.89e+03   content 4_2 9.48e+02   style 3_1 9.13e+02  4_1 3.03e+03   quality  4.7%   time 15.4s
 90   loss 3.43e+03   content 4_2 7.08e+02   style 3_1 6.40e+02  4_1 2.08e+03   quality 41.1%   time 145.9s
100   loss 3.20e+03   content 4_2 6.85e+02   style 3_1 5.97e+02  4_1 1.92e+03   quality 60.6%   time 144.5s
110   loss 3.09e+03   content 4_2 6.78e+02   style 3_1 5.77e+02  4_1 1.83e+03   quality 71.0%   time 148.9s

Phase #3: resolution 430x411  scale 1.0
  - Style layer 3_1: (13755, 260, 3, 3) patches in 32,186kb.
  - Style layer 4_1: (3264, 516, 3, 3) patches in 15,158kb.
  - Content layer conv4_2: 512 features in 1,383kb.

120   loss 3.46e+03   content 4_2 7.59e+02   style 3_1 6.21e+02  4_1 2.08e+03   quality  5.0%   time 68.9s
130   loss 2.56e+03   content 4_2 5.87e+02   style 3_1 4.69e+02  4_1 1.51e+03   quality 42.9%   time 665.0s
140   loss 2.38e+03   content 4_2 5.77e+02   style 3_1 4.21e+02  4_1 1.38e+03   quality 64.7%   time 644.6s
150   loss 2.28e+03   content 4_2 5.77e+02   style 3_1 3.97e+02  4_1 1.31e+03   quality 77.5%   time 663.5s

Optimization finished in 3489.7s, average pixel error 6.7!
``
