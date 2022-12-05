const App = () => {

    const handleButtonClick = () => {
        alert('Foi clicado')
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Clique Aqui</button>
        </div>
    );
}

export default App;