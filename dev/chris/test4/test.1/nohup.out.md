```
Neural Doodle for semantic style transfer.
  - Using device `cpu` for processing the images.
  - Adding `home-sketch-with-sideload-garage_sem.png` as semantic map.
  - Loading `../test4/train-house.jpg` for style data.
  - Adding `../test4/train-house_sem.png` as semantic map.

Phase #0: resolution 211x80  scale 0.25
  - Style layer 3_1: (570, 260, 3, 3) patches in 1,333kb.
  - Style layer 4_1: (112, 516, 3, 3) patches in 520kb.

  0   loss 5.76e+03   style 3_1 1.03e+03  4_1 4.52e+03   quality  4.3%   time 5.5s
 10   loss 2.42e+03   style 3_1 6.82e+02  4_1 1.59e+03   quality 40.9%   time 47.6s
 20   loss 2.04e+03   style 3_1 6.18e+02  4_1 1.32e+03   quality 62.2%   time 47.2s
 30   loss 1.85e+03   style 3_1 5.79e+02  4_1 1.20e+03   quality 73.8%   time 47.8s

Phase #1: resolution 422x160  scale 0.5
  - Style layer 3_1: (2480, 260, 3, 3) patches in 5,803kb.
  - Style layer 4_1: (570, 516, 3, 3) patches in 2,647kb.

 40   loss 4.62e+03   style 3_1 8.61e+02  4_1 3.75e+03   quality  4.9%   time 21.0s
 50   loss 2.31e+03   style 3_1 5.02e+02  4_1 1.80e+03   quality 42.7%   time 195.5s
 60   loss 2.07e+03   style 3_1 4.44e+02  4_1 1.61e+03   quality 64.6%   time 198.1s
 70   loss 1.98e+03   style 3_1 4.11e+02  4_1 1.55e+03   quality 76.3%   time 198.7s

Phase #2: resolution 845x321  scale 1.0
  - Style layer 3_1: (10458, 260, 3, 3) patches in 24,471kb.
  - Style layer 4_1: (2480, 516, 3, 3) patches in 11,517kb.

 80   loss 3.44e+03   style 3_1 6.30e+02  4_1 2.81e+03   quality  5.0%   time 97.0s
 90   loss 1.59e+03   style 3_1 3.47e+02  4_1 1.24e+03   quality 43.5%   time 888.7s
100   loss 1.39e+03   style 3_1 3.06e+02  4_1 1.07e+03   quality 65.6%   time 847.7s
110   loss 1.30e+03   style 3_1 2.82e+02  4_1 1.01e+03   quality 78.4%   time 828.3s

Optimization finished in 4443.6s, average pixel error 5.7!
```

