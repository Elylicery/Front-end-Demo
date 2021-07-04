import logo from "./logo.svg";
import "./App.css";
import ThemeContext from "./theme-context";
import ThemedBar from "./compoenents/ThemedBar";
import React, { Component } from "react";

const themes = {
	light: {
		classNames: "btn btn-primary",
		bgColor: "#eeeeee",
		color: "#000",
	},
	dark: {
		classNames: "btn btn-light",
		bgColor: "#222222",
		color: "#fff",
	},
};

class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      theme:'light'
    }
    this.changeTheme = this.changeTheme.bind(this);
	}
  //修改主题
  changeTheme(theme) {
    //console.log("不能切换主题", theme);
    this.setState({
        theme
    })
}
	render() {
		return (
			<ThemeContext.Provider value={themes[this.state.theme]}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h4 className="App-title">一个切换主题的例子</h4>
						<ul className={"nav nav-tabs"}>
							<li>
								<a
									href="#theme-switcher"
									className={"btn btn-light active"}
									onClick={() => this.changeTheme("light")}
								>
									白天模式
								</a>
							</li>
							<li className={"nav-item"}>
								<a
									href="#theme-switcher"
									className={"btn btn-secondary"}
									onClick={() => this.changeTheme("dark")}
								>
									暗夜模式
								</a>
							</li>
						</ul>
					</header>
					<ThemedBar />
				</div>
			</ThemeContext.Provider>
		);
	}
}

export default App;
