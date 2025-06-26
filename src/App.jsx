import Input from './components/Input';
import Button from './components/Button';
import Lists from "./components/Lists";


function App() {
    return (
        <div>
            <div className='container'>
                <div className='inpbtn'>
                    <Input />
                    <Button />
                </div>
                <Lists />
            </div>
        </div>
    );
}

export default App;
