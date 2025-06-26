import ToDo from './components/Todo';
import Input from './components/Input';
import Button from './components/Button';


function App() {
    return (
        <div>
            <div className='container'>
                <div className='inpbtn'>
                    <Input />
                    <Button />
                </div>
                <ToDo />
            </div>
        </div>
    );
}

export default App;
