import ReactDOM from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';




const supabase = createClient(
    "https://kpwxtqwmbqmmcppsmcmo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd3h0cXdtYnFtbWNwcHNtY21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NTIwMTUsImV4cCI6MTk5NTAyODAxNX0._5h9oL6HSmH53ARTwr2wwwLj1QWgKsEj1rsZuCFvIoE"
);

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SessionContextProvider supabaseClient={supabase}>
        <App />
    </SessionContextProvider>

);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
