/*global navigator, location, document, $f */

(function () {
    'use strict';

    var APPLE_URL = 'http://www.y3ti.pl/streaming/warsawjs/iphone.html';
    var isAppleDevice = (/iphone|ipod|ipad/i).test(navigator.userAgent);
    var $button = document.querySelector('#player > .play-button');

    function setupNormalPlayer() {
        $f('player', 'http://releases.flowplayer.org/swf/flowplayer-3.2.11.swf', {
            clip: {
                url: 'warsawjs',
                live: true,
                // configure clip to use influxis as our provider, it uses our rtmp plugin
                provider: 'influxis'
            },
            // streaming plugins are configured under the plugins node
            plugins: {
                // here is our rtpm plugin configuration
                influxis: {
                    url: 'flowplayer.rtmp-3.2.10.swf',
                    // netConnectionUrl defines where the streams are found
                    netConnectionUrl: 'rtmp://octa01.streaming.y3ti.pl:1935/live'
                }
            }
        });
    }

    $button.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (isAppleDevice) {
            location.href = APPLE_URL;
        } else {
            setupNormalPlayer();
        }
    });

}());
