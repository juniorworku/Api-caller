import type { Component } from 'solid-js';
import { lazy} from 'solid-js';
import { HashRouter, Route } from "@solidjs/router";

import Navbar from './components/Navbar';
import RequestById from './pages/Request/[id]';

// lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));




const App: Component = () => {
  return (
    <>
      <div class="flex flex-col h-full min-h-screen">
        <Navbar />
        <main class="px-8 py-4 flex-1 flex flex-col h-full">
          <HashRouter>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            <Route path="/:id" component={RequestById} />
          </HashRouter>
        </main>
        
      </div>
      
    </>
  );
};

export default App;
