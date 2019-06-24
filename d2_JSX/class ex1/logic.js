class Factorial extends React.Component {
    clac(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {

            result *= i;
        }
        return result;
    }
    render() {
        let factorial = this.clac(5);
        return (
            <div><span>the factorial of 5 is: </span>{factorial}</div>
        );
    }
}

ReactDOM.render(
    <Factorial />,
    document.getElementById("root")
);