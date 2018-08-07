import React, { Component } from 'react';
import './NamesList.css';
import AppBarComp from '../../components/AppBar/index';
import CustomizedTable from '../../components/Table/index';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

  deleleEntry = (e) => {
    console.log(e.target);

  }

  submitNameToTable = (event) => {
    if(this.state.namesList === []){
      this.setState({
        namesList:[{
        id: 1,
        name: this.state.name,
        timestamp : new Date().getTime()
        }]
      });
      console.log(this.state.namesList);
    }else{
      const namesList = Object.assign([], this.state.namesList);
      let len = namesList.length;
      namesList.push({
        id: len,
        name: this.state.name,
        timestamp : new Date().getTime()
      })
      this.setState({namesList:namesList})
      console.log(this.state.namesList);
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
          <CustomizedTable data={this.state.namesList} delObj={this.deleleEntry.bind(this)}></CustomizedTable>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(NameList);