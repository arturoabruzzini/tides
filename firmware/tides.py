import gc
import jpegdec
from urllib import urequest
from ujson import load
import machine
import uos
import sdcard
import time_helper as th

gc.collect()

graphics = None
WIDTH = None
HEIGHT = None

FILENAME = "/sd/tides.jpg"

rtc = machine.RTC()

sd_spi = machine.SPI(0, sck=machine.Pin(18, machine.Pin.OUT), mosi=machine.Pin(
    19, machine.Pin.OUT), miso=machine.Pin(16, machine.Pin.OUT))
sd = sdcard.SDCard(sd_spi, machine.Pin(22))
uos.mount(sd, "/sd")
gc.collect()  # Claw back some RAM!

# Length of time between updates in minutes.
# Frequent updates will reduce battery life!
# TODO make the updates at specific times, not just every 60 min from startup
UPDATE_INTERVAL = 60


def show_error(text):
    graphics.set_pen(4)
    graphics.rectangle(0, 10, WIDTH, 35)
    graphics.set_pen(1)
    graphics.text(text, 5, 16, 400, 2)


def update():
    current_time = th.get_time()

    print("Current time", current_time)

    [hours, minutes] = th.get_last_half_past_time(
        current_time[4], current_time[5])

    URL = f"https://arturoabruzzini.github.io/tides/{hours}-{minutes}.jpg"

    try:
        print("Getting image from ", URL)
        # Grab the image
        socket = urequest.urlopen(URL)

        gc.collect()

        data = bytearray(1024)
        with open(FILENAME, "wb") as f:
            while True:
                if socket.readinto(data) == 0:
                    break
                f.write(data)
        socket.close()
        del data
        gc.collect()

        print("Image downloaded")
    except OSError as e:
        print(e)
        show_error("Unable to download image")


def draw():
    jpeg = jpegdec.JPEG(graphics)
    gc.collect()  # For good measure...

    graphics.set_pen(1)
    graphics.clear()

    print("Rendering")
    try:
        jpeg.open_file(FILENAME)
        jpeg.decode()
    except OSError:
        graphics.set_pen(4)
        graphics.rectangle(0, (HEIGHT // 2) - 20, WIDTH, 40)
        graphics.set_pen(1)
        graphics.text("Unable to display image!", 5,
                      (HEIGHT // 2) - 15, WIDTH, 2)
        graphics.text("Check your network settings in secrets.py",
                      5, (HEIGHT // 2) + 2, WIDTH, 2)

    gc.collect()
    print("Updating display")
    graphics.update()
