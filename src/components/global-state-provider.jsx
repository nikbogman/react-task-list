import { Component } from "react";
import GlobalState from "../context";

const initialGlobalState = {
    tasks: [],
};

export class GlobalStateProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globals: initialGlobalState || {},
        };
    }

    componentDidMount() {
        GlobalState.set = this.setGlobalState;
    }

    setGlobalState = (data = {}) => {
        const { globals } = this.state;

        Object.keys(data).forEach((key) => {
            globals[key] = data[key];
        });

        this.setState(globals);
    };

    render() {
        const { globals } = this.state;
        const { Root } = this.props;

        return (
            <GlobalState.Provider value={globals}>
                <Root />
            </GlobalState.Provider>
        );
    }
}