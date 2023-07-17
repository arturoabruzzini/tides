"""
MIT License

Copyright (c) 2021 Pimoroni Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

import machine
import ntptime

# Length of time between updates in minutes.
UPDATE_INTERVAL = 15
graphics = None

rtc = machine.RTC()
time_string = None
words = ["it", "d", "is", "m", "about", "l", "half", "c", "quarter", "b", "to", "u", "past", "n", "one",
         "two", "three", "four", "five", "six", "eleven", "ten", "nine", "eight", "seven", "rm", "twelve", "rt", "O'Clock", "q"]


def approx_time(hours, minutes):
    nums = {0: "twelve", 1: "one", 2: "two",
            3: "three", 4: "four", 5: "five", 6: "six",
            7: "seven", 8: "eight", 9: "nine", 10: "ten",
            11: "eleven", 12: "twelve"}

    if hours == 12:
        hours = 0
    if minutes > 0 and minutes < 8:
        return "it is about " + nums[hours] + " O'Clock"
    elif minutes >= 8 and minutes < 23:
        return "it is about quarter past " + nums[hours]
    elif minutes >= 23 and minutes < 38:
        return "it is about half past " + nums[hours]
    elif minutes >= 38 and minutes < 53:
        return "it is about quarter to " + nums[hours + 1]
    else:
        return "it is about " + nums[hours + 1] + " O'Clock"


def update():
    global time_string
    # grab the current time from the ntp server and update the Pico RTC
    try:
        ntptime.settime()
    except OSError:
        print("Unable to contact NTP server")

    current_t = rtc.datetime()
    time_string = approx_time(
        current_t[4] - 12 if current_t[4] > 12 else current_t[4], current_t[5])

    # Splits the string into an array of words for displaying later
    time_string = time_string.split()

    print(time_string)


def draw():
    global time_string
    graphics.set_font("bitmap8")

    WIDTH, HEIGHT = graphics.get_bounds()

    # Clear the screen
    graphics.set_pen(1)
    graphics.clear()
    graphics.set_pen(6)

    # Values for the layout and spacing
    if WIDTH == 640:  # Inky Frame 4.0"
        default_x = 5
        x = default_x
        y = 10
        line_space = 70
        letter_space = 40
    elif WIDTH == 800:
        default_x = 5
        x = default_x
        y = 70
        line_space = 60
        letter_space = 50
    else:  # Inky Frame 5.7"
        default_x = 20
        x = default_x
        y = 40
        line_space = 65
        letter_space = 35

    scale = 5
    spacing = 2

    for word in words:

        if word in time_string:
            graphics.set_pen(0)
        else:
            graphics.set_pen(graphics.create_pen(220, 220, 220))

        for letter in word:
            text_length = graphics.measure_text(letter, scale, spacing)
            if not x + text_length <= WIDTH:
                y += line_space
                x = default_x

            graphics.text(letter.upper(), x, y, 640, scale, spacing)
            x += letter_space

    graphics.update()
