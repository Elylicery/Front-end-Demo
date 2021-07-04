import React from "react";

class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		//   value:''
		// }
		// this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// handleChange(event){
	//   this.setState({
	//     value:event.target.value
	//   })
	// }
	handleSubmit(event) {
		// alert(this.state.value);
    // alert(this.textInput.value);
    this.props.onAddComment(this.textInput.value);
		event.preventDefault();
	}
	render() {
    // console.log(this.props);
		return (
			<form className="p-5" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>留言内容</label>
					<input
						type="text"
						className="form-control"
						placeholder="请输入内容"
						// value={this.state.value}
						// onChange={this.handleChange}
						ref={(textInput) => {this.textInput = textInput}}
					></input>
				</div>
				<button type="submit" className="btn btn-primary">
					留言
				</button>
        <p>已有{this.props.CommentsLength}条评论</p>
			</form>
		);
	}
}

export default CommentBox;
