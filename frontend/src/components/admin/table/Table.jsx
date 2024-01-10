// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     id,
//     property_name,
//     property_type,
//     price,
//     checkin,
//     checkout,
//     status,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData(1, 'Lekki Villa', 'Villa', '150,000', '20/01/2024', '25/01/2024', 'accepted'),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function OrderTable() {
//   return (
//     <TableContainer component={Paper} style={{backgroundColor: '#1e293b', borderRadius: '0px'}} className=''>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell className='border'>Id</TableCell>
//             <TableCell align="right">Property Name</TableCell>
//             <TableCell align="right">Property Type</TableCell>
//             <TableCell align="right">Price</TableCell>
//             <TableCell align="right">Checkin Date</TableCell>
//             <TableCell align="right">Checkout Date</TableCell>
//             <TableCell align="right">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }





























import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// Function to create random data
function createData(id, property_name, property_type, price, checkin, checkout, status) {
  return {
    id,
    property_name,
    property_type,
    price,
    checkin,
    checkout,
    status,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment className="border border-red-500" style={{border: '1px solid red'}}>
//       <TableRow sx={{ '& > *': {  } }} className='border border-red-500'>
//         <TableCell className='border border-red-500'>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row" className='border border-red-500'>
//           {row.id}
//         </TableCell>
//         <TableCell align="right" className='border border-red-500'>{row.property_name}</TableCell>
//         <TableCell align="right">{row.property_type}</TableCell>
//         <TableCell align="right">{row.price}</TableCell>
//         <TableCell align="right">{row.checkin}</TableCell>
//         <TableCell align="right">{row.checkout}</TableCell>
//         <TableCell align="right">{row.status}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }




function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': {
            border: 'none', // Set border to 'none' to remove all borders
          },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right" className='border-0' style={{border: 'none'}}>{row.property_name}</TableCell>
        <TableCell align="right">{row.property_type}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.checkin}</TableCell>
        <TableCell align="right">{row.checkout}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases" className='border border-red-500'>
                <TableHead>
                  <TableRow>
                    <TableCell className='border border-red-500'>Date</TableCell>
                    <TableCell className='border border-red-500'>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    {/* <TableCell className='border border-red-500' align="right">Total price ($)</TableCell> */}
                    <TableCell sx={{ borderBottom: '1px solid red' }} align="right">
          {row.property_name}
        </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{border: '1px solid red'}}>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date} className='border border-red-500'>
                      <TableCell component="th" scope="row" className='border border-red-500'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell className='border border-red-500'>{historyRow.customerId}</TableCell>
                      <TableCell className='border border-red-500' align="right">{historyRow.amount}</TableCell>
                      <TableCell className='border border-red-500 blue_border' align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    property_name: PropTypes.string.isRequired,
    property_type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    checkin: PropTypes.string.isRequired,
    checkout: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

// Example rows with random data
const rows = [
  createData(1, 'Lekki Villa', 'Villa', 150000, '20/01/2024', '25/01/2024', 'accepted'),
  createData(2, 'Ice cream sandwich', 'Dessert', 4.99, '21/01/2024', '25/01/2024', 'pending'),
  // Add more createData entries for additional rows
];

export default function OrderTable() {
  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#1e293b', borderRadius: '0px', color: 'white' }}>
      <Table aria-label="collapsible table">
        <TableHead className=''>
          <TableRow>
            <TableCell />
            <TableCell className='text-white' style={{ color: '#fff' }}>Id</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Property Name</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Property Type</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Price</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Checkin Date</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Checkout Date</TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className=''>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}