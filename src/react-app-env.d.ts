/// <reference types="react-scripts" />

import type { Translate } from 'react-declarative';

declare global {
    interface Window {
        Translate: Translate;
    }
};

