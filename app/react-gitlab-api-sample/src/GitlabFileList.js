import React, { Component } from 'react'; 
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import isEqual from 'lodash/isEqual';
import FolderIcon from '@material-ui/icons/Folder';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Grid from '@material-ui/core/Grid';

import CodeView from "./CodeView.js"

class GitlabFileList extends Component {
  constructor(props){
    super(props);

    this.state = {
      tree: [],
      codePath: null
    }

    this.defaultPath = '/';
    this.getFileTree = this.getFileTree.bind(this);
    this.createFileElement = this.createFileElement.bind(this);
  }

  getFileTree (path) {
    const gitlab = this.props.gitlab;
    const repositoyID = this.props.repositoyID
    const apiURL = 'https://' + gitlab + '/api/v4/projects/' + repositoyID + '/repository/tree?per_page=1000&path=' + path;

    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({ tree: responseJson })
      })
  }


  createFileElement(data) {
    if (data.type == 'tree') {
      return (
        <TableRow>
          <TableCell size="small"><FolderIcon /></TableCell>
          <TableCell align="left">
            <Link component="button" onClick={() => this.getFileTree(data.path) }> {data.name} </Link>
          </TableCell>
        </TableRow>
      )
    } else {
      return (
        <TableRow>
          <TableCell size="small"><TextFieldsIcon /></TableCell>
          <TableCell align="left">
            <Link component="button" onClick={() => this.setState({codePath: data.path}) }> {data.name} </Link>
          </TableCell>
        </TableRow>
      )
    }
  }

  componentDidMount() {
    this.getFileTree(this.defaultPath);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(isEqual(prevProps, this.props)) return;
    this.getFileTree(this.defaultPath);
  }

  render() {
    const tree = this.state.tree
    console.log(this.props)
    console.log('tree')
    console.log(tree)
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3} style={{height: window.innerHeight, overflowX: 'auto'}}>
            <Table>
              <TableBody>
                {tree.map(this.createFileElement)}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={9}>
            <CodeView gitlab={this.props.gitlab} repositoyID={this.props.repositoyID} codePath={this.state.codePath}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default GitlabFileList
