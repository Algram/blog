---
title: How to not add an SD card to the Raspberry Pi
date: 20:31 04/16/2016
category: raspberry pi
keywords: raspberry pi, sdcard, soldering, accident
layout: post
path: "/sd-card-raspberry-pi/"
---

A while ago I found out that my Raspberry Pi B+ was not broken after all.
I tried it with the SD card of my new RPi 2 and it worked great.
So I started searching for some spare SD cards – everyone has a ton of them lying around anyway, right? **Hah! Not me apparently.**
The only card I ended up with had a broken case and therefore didn't fit into the Raspberry. The SD even had an old image of Raspbian flashed on it already – apparently I used it in the past for some projects.

In my despair I decided to directly solder the SD card to the tray on the RPi.
The idea wasn't even half bad since I didn't care about the old Pi and just wanted it to work again *somehow*.

**And it did work!** I was very careful with the soldering and I even had to bridge one of the pins on the tray in order for it to work. The bootup went fine and I was in high spirits since I kind off felt like I wrecked the Pi in the process of soldering.
My excitement lasted exactly 8 more second until Raspbian asked me for the **password**.

This is where it gets really sad. Not even had I changed the default password on the old Raspbian install, I apparently even set a **good** one. I spent the next few hours trying different passwords, got an expert in ssh-brute forcing and finally gave up.
I had no way to flash a different image on the Pi since it was soldered to the board like the image shows.

What did I learn? Spend 6 more bucks and buy a decent SD card.
