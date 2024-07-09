import { useState } from 'react';

const domNode = document.getElementById('main-hero');
const rootThing = ReactDOM.createRoot(domNode);

export default function Form() {
    // Pages can be 'home' and 'images'
    const [page, setPage] = useState('home')
}