import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

import GitlabFileList from "./GitlabFileList.js"


class GitlabAPIView extends Component {
  constructor(props){
    super(props);

    this.state = {
      gitlab: null,
      repositoyID: null
    };

    this.defaultRepositoyURL = "https://gitlab.com/gitlab-org/gitlab-ce";
  }

  getRepositoryID (repositoyURL) {
    const repositoy = repositoyURL.split('/');
    const gitlab = repositoy[2]
    const pathWithNamespace = encodeURIComponent(repositoy.slice(-2)[0] + '/' + repositoy.slice(-2)[1])

    this.setState({ gitlab: gitlab});

    const apiURL = 'https://' + gitlab + '/api/v4/projects/' + pathWithNamespace
    
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.id) this.setState({ repositoyID: responseJson.id })
      })
  }

  componentDidMount() {
    this.getRepositoryID (this.defaultRepositoyURL)
  }

  gitlabURLChanged(event) {
    const repositoyURL = event.target.value
    this.getRepositoryID(repositoyURL)
  }


  render() {
    const gitlab = this.state.gitlab
    const repositoyURL = this.defaultRepositoyURL;
    const repositoyID = this.state.repositoyID;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth={true}>
              <InputLabel>Gitlab Repository URL</InputLabel>
              <Input defaultValue={repositoyURL} onChange={this.gitlabURLChanged.bind(this)}/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {repositoyID && <GitlabFileList gitlab={gitlab} repositoyID={repositoyID}/>}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default GitlabAPIView


