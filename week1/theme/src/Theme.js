import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()



class ThemeProvider extends Component {
    state = {
        theme: "dark"
    }
    
    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    
    render() {
        return (
            <Provider value={this.state.theme}>
                {this.props.children}
                <button className={this.state.theme +'-theme'} onClick={this.toggleTheme}>Change Theme</button>
            </Provider>
        )
    }
}

export {ThemeProvider, Consumer as ThemeConsumer}
