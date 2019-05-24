import React, { Component } from 'react';
import './NamesList.css';
import AppBarComp from '../../components/AppBar/index';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import TableHd from '../../components/Tableheader/index'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const theme = createMuiTheme({
    palette: {
      primary: pink,
    },
  });

const styles = theme => ({
    container: {
      flexWrap: 'wrap',
      marginLeft:'auto',
      marginRight:'auto'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    root: {
      width: '80%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      marginLeft:'auto',
      marginRight:'auto'
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


class NameList extends Component {
  state = {
    namesList:[],
    name:''
  };

  handleChange = name => event => {
    this.setState({
      name: event.target.value,
    });
  };

  deleleEntry = (ts,e) => {
    let list = Object.assign([], this.state.namesList);
    list= list.filter(e => e.timestamp !== ts);
    let list2 =[];
    list.forEach((e,i) => {
         list2.push({
          slNo: i+1,
          name: e.name,
          timestamp : e.timestamp
         }) 

    })
    this.setState({namesList:list2})

  }

  submitNameToTable = (event) => {
    if(this.state.namesList.length === 0){
      this.setState({
        namesList:[{
        slNo: 1,
        name: this.state.name,
        timestamp : new Date().getTime()
        }]
      });
    }else{
      const namesList = Object.assign([], this.state.namesList);
      let len = this.state.namesList.length;
      namesList.push({
        slNo: len + 1,
        name: this.state.name,
        timestamp : new Date().getTime()
      })
      this.setState({namesList:namesList})
    }
  };

    render() {
      const { classes } = this.props;
      return (
        <div>
          <AppBarComp></AppBarComp>
            <Typography className="inputMargin">
            <form className={classes.container} noValidate autoComplete="off">
                <MuiThemeProvider theme={theme}>
                  <TextField color="primary"
                    id="name"
                    placeholder="Enter Name:"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                  />
                  <Button variant="outlined" color="secondary" onClick={this.submitNameToTable}>
                    Submit
                  </Button>
                  </MuiThemeProvider>
              </form>
            </Typography>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHd>
                </TableHd>
                <TableBody>
                  {this.state.namesList.map((n,index) => {
                    return (
                      <TableRow className={classes.row} key={n.timestamp}>
                        <CustomTableCell>{n.slNo}</CustomTableCell>
                        <CustomTableCell component="th" scope="row">
                          {n.name}
                        </CustomTableCell>
                          <CustomTableCell>{n.timestamp}</CustomTableCell>
                        <CustomTableCell  onClick={this.deleleEntry.bind(this, n.timestamp)}><DeleteIcon/></CustomTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
         </Paper>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(NameList);