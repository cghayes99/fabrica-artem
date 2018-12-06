```
Neural Doodle for semantic style transfer.
  - Using device `cpu` for processing the images.
  - Adding `content-sketch-house-more_sem.png` as semantic map.
  - Loading `train-more-house.png` for style data.
  - Adding `train-more-house_sem.png` as semantic map.

Phase #0: resolution 211x86  scale 0.25
  - Style layer 3_1: (570, 260, 3, 3) patches in 1,333kb.
  - Style layer 4_1: (112, 516, 3, 3) patches in 520kb.

  0   loss 5.57e+03   style 3_1 9.52e+02  4_1 4.40e+03   quality  4.4%   time 4.9s
 10   loss 2.27e+03   style 3_1 6.37e+02  4_1 1.49e+03   quality 40.6%   time 48.6s
 20   loss 1.82e+03   style 3_1 5.71e+02  4_1 1.14e+03   quality 61.9%   time 48.6s
 30   loss 1.61e+03   style 3_1 5.17e+02  4_1 1.01e+03   quality 73.0%   time 49.2s

Phase #1: resolution 422x172  scale 0.5
  - Style layer 3_1: (2480, 260, 3, 3) patches in 5,803kb.
  - Style layer 4_1: (570, 516, 3, 3) patches in 2,647kb.

 40   loss 4.37e+03   style 3_1 8.75e+02  4_1 3.48e+03   quality  4.9%   time 20.8s
 50   loss 2.20e+03   style 3_1 5.29e+02  4_1 1.66e+03   quality 42.6%   time 206.5s
 60   loss 1.96e+03   style 3_1 4.72e+02  4_1 1.47e+03   quality 64.2%   time 208.5s
 70   loss 1.87e+03   style 3_1 4.47e+02  4_1 1.41e+03   quality 75.7%   time 206.4s

Phase #2: resolution 845x345  scale 1.0
  - Style layer 3_1: (10458, 260, 3, 3) patches in 24,471kb.
  - Style layer 4_1: (2480, 516, 3, 3) patches in 11,517kb.

 80   loss 3.65e+03   style 3_1 6.69e+02  4_1 2.97e+03   quality  5.0%   time 94.2s
 90   loss 1.90e+03   style 3_1 4.28e+02  4_1 1.47e+03   quality 43.4%   time 916.3s
100   loss 1.69e+03   style 3_1 3.84e+02  4_1 1.30e+03   quality 65.7%   time 905.5s
110   loss 1.62e+03   style 3_1 3.66e+02  4_1 1.24e+03   quality 78.3%   time 912.4s

Optimization finished in 4705.1s, average pixel error 5.7!
```

