import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import AppLayout from "@/app/layout/AppLayout.tsx";
import 'devicon/devicon.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout/>
  </StrictMode>,
)
