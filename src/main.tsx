import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    createRoot(appElement).render(<App />);
  } else {
    console.error('Erreur : div #app introuvable dans le DOM.');
  }
});
