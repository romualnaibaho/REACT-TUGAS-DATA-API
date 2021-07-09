import Content from "./Components/Content"
import store from './store/'

function App() {
    return (
        <div>
            <Content store={store} />
        </div>
    );
}

export default App;
