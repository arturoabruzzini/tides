# from picographics import PicoGraphics, DISPLAY_INKY_FRAME as DISPLAY      # 5.7"
# from picographics import PicoGraphics, DISPLAY_INKY_FRAME_4 as DISPLAY  # 4.0"
from picographics import PicoGraphics, DISPLAY_INKY_FRAME_7 as DISPLAY  # 7.3"

graphics = PicoGraphics(DISPLAY)

WIDTH, HEIGHT = graphics.get_bounds()

graphics.set_pen(1)
graphics.clear()

w = int(WIDTH / 8)


# Rainbow Gradient

half_height = int(HEIGHT / 4)

for x in range(WIDTH):
    h = x / float(WIDTH)
    for y in range(half_height):
        s = y / float(half_height)
        graphics.set_pen(graphics.create_pen_hsv(h, s, 1.0))
        graphics.pixel(x, y)

    for y in range(half_height):
        v = 1.0 - (y / float(half_height))
        graphics.set_pen(graphics.create_pen_hsv(h, 1.0, v))
        graphics.pixel(x, y + half_height)


# "Orangedient"

for x in range(WIDTH):
    g = int(x / float(WIDTH) * 255)
    graphics.set_pen(graphics.create_pen(255, g, 0))
    for y in range(30):
        graphics.pixel(x, 400 + y)


# Solid Colours
w = int(WIDTH / 8)

for p in range(8):
    graphics.set_pen(p)
    graphics.rectangle(w * p, 250, w, 50)

# get the rgb colour halfway between two rgb colours

# array of 8 colours
colours = [
    (0, 0, 0),  # black
    (255, 255, 255),  # white
    (0, 255, 0),  # green
    (0, 0, 255),  # blue
    (255, 0, 0),  # red
    (255, 255, 0),  # yellow
    (255, 100, 0),  # orange
]

for p in range(7):
    graphics.set_pen(graphics.create_pen(*colours[p]))
    graphics.rectangle(w * p, 300, w, 50)


def get_rgb_halfway_between(rgb1, rgb2):
    return (
        int((rgb1[0] + rgb2[0]) / 2),
        int((rgb1[1] + rgb2[1]) / 2),
        int((rgb1[2] + rgb2[2]) / 2),
    )


# graphics.set_pen(graphics.create_pen(0, 128, 128))
# graphics.rectangle(0, 300, 200, 100)
# graphics.set_pen(graphics.create_pen(200, 200, 200))


graphics.update()
