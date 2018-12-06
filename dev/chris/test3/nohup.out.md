```
Neural Doodle for semantic style transfer.
  - Using device `cpu` for processing the images.
  - Adding `content-thomas-tank-engine_sem.png` as semantic map.
  - Loading `style-space-illustrated.png` for style data.
  - Adding `style-space-illustrated_sem.png` as semantic map.

Phase #0: resolution 184x135  scale 0.25
  - Style layer 3_1: (900, 260, 3, 3) patches in 2,106kb.
  - Style layer 4_1: (196, 516, 3, 3) patches in 910kb.

  0   loss 5.60e+03   style 3_1 9.90e+02  4_1 4.40e+03   quality  4.8%   time 9.6s
 10   loss 2.71e+03   style 3_1 6.91e+02  4_1 1.87e+03   quality 41.7%   time 97.0s
 20   loss 2.24e+03   style 3_1 6.05e+02  4_1 1.54e+03   quality 63.2%   time 96.5s
 30   loss 2.05e+03   style 3_1 5.46e+02  4_1 1.44e+03   quality 74.8%   time 96.1s

Phase #1: resolution 368x270  scale 0.5
  - Style layer 3_1: (3844, 260, 3, 3) patches in 8,994kb.
  - Style layer 4_1: (900, 516, 3, 3) patches in 4,179kb.

 40   loss 4.03e+03   style 3_1 7.95e+02  4_1 3.23e+03   quality  4.9%   time 42.8s
 50   loss 2.06e+03   style 3_1 5.23e+02  4_1 1.53e+03   quality 42.8%   time 435.1s
 60   loss 1.82e+03   style 3_1 4.52e+02  4_1 1.36e+03   quality 65.1%   time 426.8s
 70   loss 1.72e+03   style 3_1 4.13e+02  4_1 1.29e+03   quality 77.3%   time 480.9s

Phase #2: resolution 736x540  scale 1.0
  - Style layer 3_1: (15876, 260, 3, 3) patches in 37,149kb.
  - Style layer 4_1: (3844, 516, 3, 3) patches in 17,851kb.

 80   loss 3.24e+03   style 3_1 7.15e+02  4_1 2.52e+03   quality  5.1%   time 240.8s
 90   loss 1.50e+03   style 3_1 4.11e+02  4_1 1.08e+03   quality 43.6%   time 2212.3s
100   loss 1.30e+03   style 3_1 3.50e+02  4_1 9.41e+02   quality 66.3%   time 1874.8s
110   loss 1.22e+03   style 3_1 3.21e+02  4_1 8.89e+02   quality 79.3%   time 1981.9s

Optimization finished in 10129.0s, average pixel error 4.9!
```

