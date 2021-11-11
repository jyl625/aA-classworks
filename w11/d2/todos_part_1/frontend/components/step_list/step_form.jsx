import React from 'react';


class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: StepForm.uniqueId(),
      title: "",
      body: "",
      done: false
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static uniqueId() {
    return new Date().getTime();
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.receiveTodo(this.state)

    this.setState({
      id: StepForm.uniqueId(),
      title: "",
      body: "",
      done: false
    })
  }

  render() {
    return (
      // what is htmlFor?
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" onChange={this.handleTitleChange} value={this.state.title} />
        <label htmlFor="body">Body:</label>
        <input type="text" id="body" onChange={this.handleBodyChange} value={this.state.body} />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </div>

      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor="title">Title:</label>
      //   <input type="text" id="title" onChange={this.handleTitleChange} value={this.state.title} />
      //   <label htmlFor="body">Body:</label>
      //   <input type="text" id="body" onChange={this.handleBodyChange} value={this.state.body} />
      //   <input type="submit" value="submit" />
      // </form>
    );
  }

}

export default StepForm;