class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const isWin = (s1 === s2) && (s2 === s3);
        console.log(this.props);
        return(
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{isWin ? "You win!" : "You lose!"}</p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Machine />);