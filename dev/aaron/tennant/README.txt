version: varibale changes

david_lisa

1: stock
# Image size
IMAGE_SIZE = 500

# Loss Weights
CONTENT_WEIGHT = 0.025
STYLE_WEIGHT = 1.0
STYLE_SCALE = 1.0
TOTAL_VARIATION_WEIGHT = 8.5e-5
CONTENT_LOSS_TYPE = 0

# Training arguments
NUM_ITERATIONS = 10
MODEL = 'vgg19'
RESCALE_IMAGE = 'false'
MAINTAIN_ASPECT_RATIO = 'false'  # Set to false if OOM occurs

# Transfer Arguments
CONTENT_LAYER = 'conv' + '5_2'  # only change the number 5_2 to something in a similar format
INITIALIZATION_IMAGE = 'content'
POOLING_TYPE = 'max'

# Extra arguments
PRESERVE_COLOR = 'false'
MIN_IMPROVEMENT = 0.0



2: Total Variation Weight = 5E-05

3: Content Weight = 1.0

4: Content Weight = 0.01

5: Total Variation Weight = 5E-05
   Content Weight = 0.01



david_gogh

1: stock

2: Content Weight = 0.01
   Style Weight = 2.0

3: Content Weight = 0.001

4: Content Loss Type = 1

5: Content Loss Type = 2

6: NETWORK = 'Network.py"




david_nagel

1: stock

2: Content Weight = 0.01
   Total Variation Weight = 5E-5 




tennant_nagel

1: stock




background_fractal

1: stock

2: Style Scale = 10




mona_gogh

1: Total Weight Variation = 5e-5