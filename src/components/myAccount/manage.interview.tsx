'use client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

interface IProps {
  listManage: IManage[] | undefined;
}
const ManageInterview = (props: IProps) => {

  const { listManage } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Job Title</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Date Interview</TableCell>
            <TableCell align="left">Meet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listManage && listManage.length > 0 && listManage.map((item) => (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">{item._id}</TableCell> */}
              <TableCell align="left">{item.jobTitle}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="left">{item.dateInterview}</TableCell>
              <TableCell align="left">
                <Link href={item.linkMeet} target='_blank'>
                  Link interview
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ManageInterview