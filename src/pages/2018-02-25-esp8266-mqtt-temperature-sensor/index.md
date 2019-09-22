---
title: My Hyper Terminal Setup
date: 2018-02-25 10:32
category: development
keywords: electron, hyper, terminal, config, theme, nodejs, pretty
layout: post
path: '/esp8266-mqtt-temperature-sensor/'
hero: hero.png
githubIssue: '3'
---

header image from esp with sensor
First: esp8266 great device, dth22 very cheap temp/humidity sensor --> links
Home automation main standard mqtt --> esp should be able to directly publish an mqtt topic with message
(mqtt broker like mosquito already setup)
first of all add following libraries in arduino ide

- lib1
- lib2
  image on where to add the library

<p class="notice notice--info">tldr; <a href="https://github.com/Algram/dotfiles/blob/master/.hyper.js">Here</a> is the link to the GitHub repo.</p>

code example
basically slap in wifi ssid and pw and define a topic name and interval
code example
hit compile and transfer to your ESP8266
image from transfer

Now you will get messages to your defined topics and can continue to use the provided data in your projects
image from cli nodejs, grafana

In this post I will show you my current **Hyper** terminal setup. It combines some useful plugins with awesome themes and some custom css styling.

![Htop running in hyperterm](hero.png 'Htop running in hyperterm')

[Hyper](https://hyper.is/) itself is fairly new in the terminal emulator market, but it is definitely the prettiest. Since it is written in Electron (basically HTML and Javascript) it can be slow sometimes. Overall I would still say it is well worth it though.

## 2 The config

<p class="notice notice--info">If you just want to check out my config then you find it <a href="https://github.com/Algram/dotfiles/blob/master/.hyper.js">here</a>.</p>

In the follwing I will go over the changes I made to the default config to perfectly adapt Hyper to my needs. To configure it you need to change the `.hyper.js`-File that lies in your home directory.

First I changed to font to Roboto Mono because I think it works very well. In fact even the syntax highlighting in this blog post is using Roboto Mono.

```javascript
fontFamily: '"Roboto Mono", monospace'
```

Next there are the plugins I use in Hyper.

```cpp
// Including the ESP8266 WiFi library
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include "DHT.h"

#define DHTTYPE DHT22

#define mqtt_server ""

#define humidity_topic "sensor/humidity"
#define temperature_topic "sensor/temperature"

// Replace with your network details
const char* wifi_ssid = "ssid";
const char* wifi_password = "password!";

// Timer
long previousMillis = 0;
long interval = 60000;

// Variables
static char temperature[7];
static char humidity[7];

// Web Server on port 80
WiFiServer server(80);

// DHT Sensor
const int DHTPin = 2;
DHT dht(DHTPin, DHTTYPE);

// Temporary variables
static char celsiusTemp[7];
static char fahrenheitTemp[7];
static char humidityTemp[7];

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  // Initializing serial port for debugging purposes
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  dht.begin();
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);

  WiFi.begin(wifi_ssid, wifi_password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
    // Loop until we're reconnected
    while (!client.connected()) {
      Serial.print("Attempting MQTT connection...");
      // Attempt to connect
      // If you do not want to use a username and password, change next line to
      if (client.connect("ESP8266Client")) {
      // if (client.connect("ESP8266Client", mqtt_user, mqtt_password)) {
        Serial.println("connected");
      } else {
        Serial.print("failed, rc=");
        Serial.print(client.state());
        Serial.println(" try again in 5 seconds");
        // Wait 5 seconds before retrying
        delay(5000);
      }
    }
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  long currentMillis = millis();
  if(currentMillis - previousMillis > interval) {
    // Save the last time
    previousMillis = currentMillis;

    // Read sensor data
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    float hic = dht.computeHeatIndex(t, h, false);

    dtostrf(hic, 6, 2, temperature);
    dtostrf(h, 6, 2, humidity);

    client.publish(temperature_topic, temperature, true);
    client.publish(humidity_topic, humidity, true);
  }
}
```

```javascript
plugins: [
  'hyper-statusline',
  'hyperterm-chesterish',
  'hypercwd',
  'hyper-dark-scrollbar',
]
```

- `hyper-statusline` Adds information about the current directory like git-branch and folder name on the bottom of the terminal
- `hyperterm-chesterish` A gorgeous theme for hyper
- `hypercwd` New tabs open in the same directory as the last tab
- `hyper-dark-scrollbar` ← What it says

If you want to get helpful plugins, check out the [Awesome Hyper GitHub Repo](https://github.com/bnb/awesome-hyper).

## 3 Optional

If you want your Hyper to look exactly like in the screenshot at the top you will also have to add some custom styling to the config. This basically removes the top bar with the window controls (Remember you will only be able to move the window around with the keyboard).

```javascript
// Custom CSS to remove header/window-controls and adjust styling
css: `
  .terms_19b1ydh {
    margin-top: 20px;
  }
  .header_windowHeader {
    display: none;
  }
  .tabs_nav {
    top: 0;
  }
  .terms_terms {
    margin-top: 0;
  }
  .terms_termsShifted {
    margin-top: 30px;
  }
`
```

I hope this post was helpful for some of you. If you have some awesome Hyper suggestions yourself, feel free to leave a comment on my new comment engine _powered by GitHub_.
