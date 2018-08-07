import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
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


function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>SL No:</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Created On</CustomTableCell>
            <CustomTableCell>Delete</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell>{n.id}</CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell>{n.timestamp}</CustomTableCell>
                <CustomTableCell  onClick={props.delObj}><DeleteIcon/></CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);