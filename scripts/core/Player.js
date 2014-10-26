/*global navigator, location, document, $f */

(function () {
    'use strict';

    var isAppleDevice = (/iphone|ipod|ipad/i).test(navigator.userAgent),
        $qualityButtons = document.querySelectorAll('#player-wrapper .links a'),
        videoUrlVersions = {
          '1080p': 'http://octa01.streaming.y3ti.pl:1935/dvr/mp4:warsawjs_source/manifest.f4m?DVR',
          '720p': 'http://octa01.streaming.y3ti.pl:1935/dvr/mp4:warsawjs_720p/manifest.f4m?DVR',
          '360p': 'http://octa01.streaming.y3ti.pl:1935/dvr/mp4:warsawjs_360p/manifest.f4m?DVR'
        };

    /*
     *  Called for the first time is setup the player.
     *  Any other call will start the playback.
     */
    function setupSWFPlayer(quality) {
        quality = quality || '1080p';

        $f('player', '/scripts/vendors/flowplayer/flowplayer-3.2.18.swf', {
            clip: {
                url: videoUrlVersions[quality],
                autoPlay: true,
                urlResolvers: ['f4m'],
                provider: 'httpstreaming',
                scaling: 'fit'
            },
            // streaming plugins are configured under the plugins node
            plugins: {
                f4m: {
                    url: "/scripts/vendors/flowplayer/flowplayer.f4m-3.2.10.swf",
                    dvrBufferTime: 12,
                    liveBufferTime: 12
                },
                httpstreaming: {
                    url: "/scripts/vendors/flowplayer/flowplayer.httpstreaming-3.2.11.swf"
                }
            }
        });
    }

    function setupHTMLPlayer() {
        var url = 'http://octa01.streaming.y3ti.pl:1935/dvr/warsawjs/playlist.m3u8?DVR',
            $video = document.createElement('video'),
            $wrapper = document.querySelector('#player-wrapper');

        $video.setAttribute('controls', true);
        $video.setAttribute('src', url);
        $video.setAttribute('id', 'player');
        $wrapper.innerHTML = '';
        $wrapper.appendChild($video);
    }

    function setupQualityLinks() {
        [].forEach.call($qualityButtons, function (button) {
            button.addEventListener('click', function (evt) {
                var quality = button.dataset.quality;

                evt.preventDefault();
                setupSWFPlayer(quality);
            });
        });
    };

    function setupPlayer() {
        if (isAppleDevice) {
            setupHTMLPlayer();
        } else {
            setupQualityLinks();
            setupSWFPlayer();
        }
    }

    document.addEventListener('DOMContentLoaded', setupPlayer);
}());

