import machine

rtc = machine.RTC()

DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def isdst(month, day, wd):
    # Compute last sunday of march
    last_sunday_march = day - ((wd + 6) % 7) + 1
    if month == 3 and day < last_sunday_march:
        last_sunday_march -= 7
    while last_sunday_march + 7 <= DAYS_IN_MONTHS[month - 1]:
        last_sunday_march += 7

    # Compute last sunday of october
    last_sunday_october = day - ((wd + 6) % 7) + 1
    if month == 10 and day < last_sunday_october:
        last_sunday_october -= 7
    while last_sunday_october + 7 <= DAYS_IN_MONTHS[9]:
        last_sunday_october += 7

    # Check if we're in DST
    if month > 3 and month < 10:
        return True
    elif month == 3 and day >= last_sunday_march:
        return True
    elif month == 10 and day < last_sunday_october:
        return True
    else:
        return False


def get_time():
    year, month, day, wd, hour, minute, second, _ = rtc.datetime()
    # NTP synchronizes the time to UTC, this allows you to adjust the displayed time
    utc_offset = 1 if isdst(month, day, wd) else 0
    hour = hour + utc_offset
    if hour >= 24:
        hour = hour % 24
        wd = (wd + 1) % 7
        day += 1
    if day > DAYS_IN_MONTHS[month - 1]:
        day = 1
        month += 1
    if month > 12:
        month = 1
        year += 1
    return year, month, day, wd, hour, minute, second


def get_last_half_past_time(hours, minutes):
    if minutes >= 30:
        return [hours, 30]
    return [(hours - 1) % 24, minutes]
