import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<App />);
