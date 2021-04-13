import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BlogContent } from './components/BlogContent/BlogCotent';

export function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <BlogContent random="random props"/>
        </main>
        

      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}
