/* eslint-disable @typescript-eslint/no-var-requires */

/* See https://docs.expo.dev/versions/latest/config/metro/ */

module.exports = (() => {
    const { getDefaultConfig } = require('expo/metro-config');
    return getDefaultConfig(__dirname);
})();
