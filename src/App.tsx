import type { Component } from 'solid-js';
import { lazy} from 'solid-js';
import { HashRouter, Route } from "@solidjs/router";

import Navbar from './components/Navbar';
import { fetchSelectedRequest } from './data-functions/fetch-selected-request';

// lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const RequestById = lazy(() => import('./pages/Request/[id]'));
const RequestIndex  = lazy(() => import('./pages/Request/Index'));




const App: Component = () => {
  return (
    <>
      <div class="flex flex-col h-full min-h-screen">
        <Navbar />
        <main class="px-8 py-4 flex-1 flex flex-col h-full">
          <HashRouter>
            <Route path="/about" component={About} />
            <Route path="/" component={Home}>            
              <Route path="/" component={RequestIndex} />
              <Route path="/:id" component={RequestById}  />  
            </Route>        
          </HashRouter>
        </main>
        
      </div>
      
    </>
  );
};

export default App;
