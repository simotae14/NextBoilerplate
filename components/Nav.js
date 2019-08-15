import React from 'react';
import Link from 'next/link';
import Btn from './Btn';

export default () => (
    <div>
        <Link href="/" passHref><Btn>Index</Btn></Link>
        <Link href="/second" passHref><Btn>Second</Btn></Link>
    </div>
)