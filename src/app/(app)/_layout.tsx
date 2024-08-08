import { Slot } from 'expo-router';
import * as React from 'react';

export default function AppLayout() {
    console.log(`AuthedAppLayout href: ${window.location.href}`);
    return <Slot />;
}
