import type { ExpoConfig } from 'expo/config';

const expoConfig = (): ExpoConfig => ({
    owner: 'smrubin',
    name: 'expo-degug',
    slug: 'expo-debug',
    assetBundlePatterns: ['**/*'],
    web: {
        bundler: 'metro',
    },
    plugins: [
        [
            'expo-router',
            {
                // Enable async routes: https://docs.expo.dev/router/reference/async-routes/
                asyncRoutes: {
                    web: true,
                    default: 'development',
                },
            },
        ],
    ],
});


export default expoConfig;
