import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TableHd(props) {
  return (
        <TableHead>
          <TableRow>
            <CustomTableCell>SL No:</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Created On</CustomTableCell>
            <CustomTableCell>Delete</CustomTableCell>
          </TableRow>
        </TableHead>
  );
}
export default (TableHd);