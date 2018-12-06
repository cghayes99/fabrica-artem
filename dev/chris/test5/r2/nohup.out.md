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

  0   loss 7.16e+03   content 4_2 8.72e+02   style 3_1 1.10e+03  4_1 5.15e+03   quality  0.0%   time 1.4s
 10   loss 3.73e+03   content 4_2 5.67e+02   style 3_1 9.10e+02  4_1 2.22e+03   quality 21.5%   time 10.1s
 20   loss 3.32e+03   content 4_2 5.73e+02   style 3_1 8.15e+02  4_1 1.91e+03   quality 38.8%   time 10.9s
 30   loss 3.17e+03   content 4_2 5.86e+02   style 3_1 7.74e+02  4_1 1.78e+03   quality 51.6%   time 12.6s

Phase #1: resolution 107x102  scale 0.25
  - Style layer 3_1: (744, 260, 3, 3) patches in 1,740kb.
  - Style layer 4_1: (154, 516, 3, 3) patches in 715kb.
  - Content layer conv4_2: 512 features in 79kb.

 40   loss 5.16e+03   content 4_2 9.91e+02   style 3_1 1.12e+03  4_1 3.04e+03   quality  3.1%   time 6.8s
 50   loss 3.55e+03   content 4_2 6.90e+02   style 3_1 9.03e+02  4_1 1.95e+03   quality 36.9%   time 58.1s
 60   loss 3.31e+03   content 4_2 6.89e+02   style 3_1 8.35e+02  4_1 1.78e+03   quality 57.9%   time 41.6s
 70   loss 3.21e+03   content 4_2 6.98e+02   style 3_1 7.97e+02  4_1 1.70e+03   quality 67.8%   time 46.5s

Phase #2: resolution 215x205  scale 0.5
  - Style layer 3_1: (3264, 260, 3, 3) patches in 7,637kb.
  - Style layer 4_1: (744, 516, 3, 3) patches in 3,455kb.
  - Content layer conv4_2: 512 features in 332kb.

 80   loss 4.85e+03   content 4_2 9.42e+02   style 3_1 9.01e+02  4_1 3.00e+03   quality  4.7%   time 20.8s
 90   loss 3.41e+03   content 4_2 7.20e+02   style 3_1 6.76e+02  4_1 2.01e+03   quality 41.0%   time 172.0s
100   loss 3.16e+03   content 4_2 6.92e+02   style 3_1 6.26e+02  4_1 1.84e+03   quality 62.0%   time 171.2s
110   loss 3.05e+03   content 4_2 6.86e+02   style 3_1 5.98e+02  4_1 1.76e+03   quality 72.4%   time 160.6s

Phase #3: resolution 430x411  scale 1.0
  - Style layer 3_1: (13755, 260, 3, 3) patches in 32,186kb.
  - Style layer 4_1: (3264, 516, 3, 3) patches in 15,158kb.
  - Content layer conv4_2: 512 features in 1,383kb.

120   loss 3.59e+03   content 4_2 7.88e+02   style 3_1 7.06e+02  4_1 2.10e+03   quality  5.0%   time 83.8s
130   loss 2.66e+03   content 4_2 6.11e+02   style 3_1 5.56e+02  4_1 1.49e+03   quality 42.9%   time 775.6s
140   loss 2.46e+03   content 4_2 6.01e+02   style 3_1 5.08e+02  4_1 1.35e+03   quality 64.8%   time 808.9s
150   loss 2.37e+03   content 4_2 5.97e+02   style 3_1 4.81e+02  4_1 1.29e+03   quality 77.1%   time 818.7s

Optimization finished in 4192.8s, average pixel error 7.0!
```
