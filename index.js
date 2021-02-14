class App extends React.Component {
    render () {
        return (
        <div>
            <Hello to="Jorge" from="Lena"/>
            <p>Let's play a game:)))</p>
            <NumPicker />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));