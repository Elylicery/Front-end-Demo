import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import LikesButton from "./components/LikesButton";
import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";
import { Component } from "react";
import CommentList from "./components/CommentList";
// const tags = ["恐龙", "足球小子"];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: ["this is my first reply"],
		};
    this.addComment = this.addComment.bind(this)
	}
  addComment(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
	render() {
		const { comments } = this.state;
		return (
			<div className="App">
				{/* <h1>实例</h1>
      <hr></hr>
      <h4>Props实例</h4>
      <NameCard name="viking" number={12323456789} isHuman tags={tags}/>
      <h4>State示例</h4>
      <LikesButton />
      <h4>生命周期示例</h4>
      <DigitalClock/>
      <h4>Forms示例</h4>
      <CommentBox/> */}

				<CommentList comments={this.state.comments} />
				<CommentBox CommentsLength={comments.length} onAddComment={this.addComment}/>
			</div>
		);
	}
}

export default App;
