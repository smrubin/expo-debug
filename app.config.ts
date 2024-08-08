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
                asyncRoutes: {
                    web: true, // DEBUG: Disabling async routes will fix the issue.
                    default: 'development',
                },
            },
        ],
    ],
});


export default expoConfig;
