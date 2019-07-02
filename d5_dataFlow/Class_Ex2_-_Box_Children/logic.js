class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={this.props.mystyle}>{this.props.children}</div>
        );
    }
}
class App extends React.Component {
    render() {

        return (
            <div>
                <Box mystyle="frame">
                    <Box mystyle="box1">
                        <Box mystyle="box2">
                            <Box mystyle="box3">
                                <Box mystyle="twoboxes">
                                    <Box mystyle="box4"></Box>
                                    <Box mystyle="box5"></Box>
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>



            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);