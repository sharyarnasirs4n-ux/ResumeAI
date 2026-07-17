import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./auth/AuthContext.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <GoogleOAuthProvider
        clientId="883428402534-ul2r283tk5f34ladhj7ssm93g1et0mlf.apps.googleusercontent.com"
    >

        <AuthProvider>

            <App />

        </AuthProvider>

    </GoogleOAuthProvider>

</StrictMode>
)