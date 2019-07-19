import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import SyntaxHighlighter from 'react-syntax-highlighter';

class CodeView extends Component {
  constructor(props){
    super(props);

    this.state = {
      code: ''
    }

    this.getCode = this.getCode.bind(this);
  }


  getCode(path){
    const gitlab = this.props.gitlab;
    const repositoyID = this.props.repositoyID
    const encodedPath = encodeURIComponent(path)
    const apiURL = 'https://' + gitlab + '/api/v4/projects/' + repositoyID + '/repository/files/'+ encodedPath + '/raw?ref=master';

    console.log(apiURL)

    fetch(apiURL)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({ code: responseText })
      })
  }

 componentDidUpdate(prevProps, prevState, snapshot) {
    if(isEqual(prevProps, this.props)) return;
    console.log(this.props)
    this.props.codePath && this.getCode(this.props.codePath)
  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <SyntaxHighlighter>{this.state.code}</SyntaxHighlighter>
      </div>
    )
  }
}

export default CodeView

