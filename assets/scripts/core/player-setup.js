(function () {
    'use strict';

    var SOURCE = "http://srv01.whitestream.pl:1935/live/mp4:warsawjs_source/manifest.m3u8?DVR";
    var PLAYER_CONTAINER_SELECTOR = "#player";
    var PLAYER_WIDTH = 590;

    function setupPlayer() {
        new Clappr.Player({
            source: SOURCE,
            parentId: PLAYER_CONTAINER_SELECTOR,
            hideVolumeBar: true,
            disableVideoTagContextMenu: true,
            width: PLAYER_WIDTH
        });
    }

    document.addEventListener('DOMContentLoaded', setupPlayer);
}());
