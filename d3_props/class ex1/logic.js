class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return ( <
            h1 style = {
                {
                    fontFamily: this.props.fonts
                }
            } > {
                this.props.text
            } < /h1>
        );
    }
}
class App extends React.Component {
    render() {

        return ( <
            div >
            <
            Title fonts = "cursive"
            text = "nla bla bab" / >
            <
            Title fonts = "Ariel"
            text = "hello world" / >
            <
            /div>
        );
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById("root")
);