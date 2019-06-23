class HelloWorldComponenet extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>Hello World! This is the Title</h1>
                <p>this is paragragh</p> */}
                <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                    <li>fourth</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorldComponenet />,
    document.getElementById("root")
);