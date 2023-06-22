import { Navbar } from './components/Navbar';
import './styles/global.css';

export function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="flex justify-center items-center w-screen h-[calc(100vh-112px)] bg-bg-100">
          <div className="text-4xl w-screen h-96 border-2 ">Hello World!</div>
        </div>
      </main>
    </div>
  );
}