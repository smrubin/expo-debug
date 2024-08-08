import 'expo-router/entry';

import { Slot } from 'expo-router';
import * as React from 'react';

import SessionManager from '../components/SessionManager';


function RootLayout() {
    console.log(`RootLayout href: ${window.location.href}`);

    return (
        <>
            <SessionManager>
                    <Slot />
            </SessionManager>
        </>
    );
}

export default RootLayout;
