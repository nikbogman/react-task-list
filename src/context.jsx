import React from "react";

const initialGlobalState = {
    tasks: [],
};

// Create a Context for the (global) State
const GlobalState = React.createContext({});

export class GlobalStateProvider extends React.Component {
    constructor(props) {
        super(props);

        // Set the initial (global) State
        this.state = {
            globals: initialGlobalState || {},
        };
    }

    // Expose the setGlobals function to the Globals object
    componentDidMount() {
        GlobalState.set = this.setGlobalState;
    }

    setGlobalState = (data = {}) => {
        const { globals } = this.state;

        // Loop over the data items by key, only updating those which have changed
        Object.keys(data).forEach((key) => {
            globals[key] = data[key];
        });

        // Update the state with the new State
        this.setState(globals);
    };

    render() {
        const { globals } = this.state;
        const { Root } = this.props;

        return (
            // Pass the current value of GlobalState, based on this components' State, down
            <GlobalState.Provider value={globals}>
                <Root />
            </GlobalState.Provider>
        );
    }
}

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;
