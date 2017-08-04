---
title: Automatically download Podcasts with the Raspberry Pi
date: 2016-04-24 21:51
category: raspberry pi
keywords: raspberry pi, podcasts, automatic downloading, automation, bash, script
layout: post
path: "/raspberry-pi-podcast-downloader/"
hero: hero.png
---
As a regular listener to podcasts you will know the pain of not having
them available right when you need them most. There are tons of apps for your
smartphone that handle that but fewer programs for your computer. When it comes
to something that can download podcasts to all your devices it gets tricky.

This was the struggle that led me to the script I will show you now - **The Podcast Automator**.
Basically I had my Raspberry Pi doing nothing all day and I wanted to use it for
something productive. I also have a fairly big Dropbox which I can access from
almost every device I own.

The script I wrote checks if a new podcast is available and downloads it to your
Raspberry which in turn uploads it to your Dropbox. I kept everything fairly modular,
so you can interchange Dropbox with practically anything – Samba, OwnCloud or
even keep them on your Pi locally.

How does the Pi know where to look for new podcasts you might ask? Well, almost
every one of those has a RSS-Feed that the script will parse and extract the
download links for you. If you want to know how an example of such a feed looks,
check out the one from [Bad Voltage](http://www.badvoltage.org/feed/mp3/).

In the next few paragraphs I will explain all the steps necessary to get the
podcast automation going. You can find the [full script at the GitHub repo here](https://github.com/Algram/PodcastAutomator).

## Setup
For those who chose not to use Dropbox as a storage medium, ignore/adapt accordingly{.notice .notice--info}

The first part of the script is the configuration part. It should be self explanatory.
You add the paths to the locations of the different folders and scripts. The `url`
variable holds all the feeds in a comma separated list.
You can get the `dropbox_uploader.sh` with the `dropbox_uploader.conf` from [this GitHub Repo](https://github.com/andreafabrizi/Dropbox-Uploader).

```bash
#!/bin/bash

SAVE_DIR=/home/user/some-dir/
UPLOAD_DIR=/some-dir-in-your-dropbox/
DROPBOX_UPLOADER=/path/to/your/dropbox_uploader.sh
DROPBOX_UPLOADER_CONFIG=/path/to/your/dropbox_uploader.conf

# Feeds to monitor
urls="feed-url1,feed-url2,..."
```

Next up is the interesting part – Okay, not quite. First the feed string gets converted into an array. Then the first request to the Dropbox gets made (This happens via the script mentioned earlier). The request returns a list of all the files that are in your `UPLOAD_DIR`.

After that the script checks if there are new podcasts available. It basically iterates over the feed-list and compares it to the already downloaded files – Pretty easy, huh?
A quick fix to the encoding (always trouble with that..) and we come to the last part of this section:

> If a feed from the feed list has a new podcast and isn't in your Dropbox yet, download it

The block above explains the entire logic of this part. All podcasts get downloaded to your `SAVE_DIR` – in my case that is the Pi's local storage.

```bash
# Split urls to monitor into an array
IFS=',' read -r -a urlArr <<< "$urls"

# Retrieve list of currently downloaded files with dropbox_uploader.sh
listStr=$($DROPBOX_UPLOADER -f $DROPBOX_UPLOADER_CONFIG list $UPLOAD_DIR)

# Check if new podcasts are available and download them to local pi storage
# Will need to split that up at some point since files could potentially be too big for the pis storage
for url in "${urlArr[@]}"
do
  str=$(wget -P $SAVE_DIR -q -O- $url | grep -o '<enclosure [^>]*url="[^"]*' | grep -o '[^"]*$' | head -n 1)
  str=${str##*/}

  # Replace url encoding spaces with real ones
  str=${str//%20/ }
  if [[ "$listStr" != *"$str"* ]]
  then
	# File isnt in dropbox yet, so download
	wget -P $SAVE_DIR -q -O- $url | grep -o '<enclosure [^>]*url="[^"]*' | grep -o '[^"]*$' | head -n 1 | xargs wget -c -P $SAVE_DIR > /dev/null
  fi
done
```

This part is only for those who want to use Dropbox or any other *cloud* service. All the files in the local directory on the Pi get uploaded to Dropbox (again via the upload script mentioned above).

Don't forget to clean up the local directory as the last step. Otherwise this will get clogged up pretty quickly.

```bash
# Upload the downloaded files to dropbox using dropbox_uploader.sh
for file in $SAVE_DIR*
do
  $DROPBOX_UPLOADER -f $DROPBOX_UPLOADER_CONFIG -s upload "${file}" "${UPLOAD_DIR}"
done

# Clean tmp folder
rm -rf $SAVE_DIR*
```

I hope you enjoy this little helper as much as I do. I even made a **Telegram bot** for it that tells me when a new podcast was downloaded to my Dropbox - If you want to know more about it, let me know.

I also need feedback on my syntax theme. Do you like it?
