import './App.css';

import RemoteApiBlogPosts from './components/RemoteApiBlogPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Starter API request</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <RemoteApiBlogPosts />
      <footer className="App-footer footer">
        <p>Starter created by <a href="https://github.com/salcode">salcode</a></p>
      </footer>
    </div>
  );
}

export default App;
