import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const AdminComponent = props => {
  const spacerStyles = {
    margin: '10px 0'
  };
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  const page = (
    <div>
      {props.reports
        ? props.reports.map(function(item, index) {
            // let photo = item.photoRefs ? item.photoRefs[0].toString() : '';
            const tmpArr = item.combinedArticles
              ? Object.keys(item.combinedArticles)
              : [];
            // console.log(
            //   tmpArr.map(vals => {
            //     return item.combinedArticles[vals].label;
            //   })
            // );
            return (
              <Card key={index} style={{ margin: '40px 0 25px 0' }}>
                <CardActionArea>
                  {/* {item.photoRefs ? (
                    <CardMedia
                      component='img'
                      alt='Work Image'
                      height='140'
                      src={photo}
                      title='Work Image'
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    ''
                  )} */}

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h1'
                      style={{ textAlign: 'center' }}
                    >
                      Zone: {item.bidZone}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h1'>
                      ID: {item.jobId}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Date: {item.date}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Tech: {item.name}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Location: {item.jobLocation}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Time in: {tConvert(item.inTime)}
                    </Typography>
                    <Divider style={spacerStyles} />
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Time out: {tConvert(item.outTime)}
                    </Typography>
                    {item.pending ? (
                      <div>
                        <Divider style={spacerStyles} />
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          <span style={{ color: 'green' }}> Pending:</span>{' '}
                          {item.pending}
                        </Typography>
                      </div>
                    ) : (
                      ''
                    )}
                    <Divider style={spacerStyles} />
                    {item.materialCosts ? (
                      <div>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Material Costs: {item.materialCosts}
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    {item.delay ? (
                      <div>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          <span style={{ color: 'red' }}> Delay:</span>{' '}
                          {item.delay}
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    {item.emergency ? (
                      <div>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          <span style={{ color: 'red' }}> Emergency:</span> Yes
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      USA Removal: Yes
                    </Typography>
                    <Divider style={spacerStyles} />
                    {item.jobComplete ? (
                      <div>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Job Complete: Yes
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    {item.tripCharge ? (
                      <div>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Trip Charge: 'Yes'
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    {item.standByTime ? (
                      <div style={{margin:'5px 0'}}>
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Stand-by in: {tConvert(item.standbyStart)}
                        </Typography>
                        <Divider style={spacerStyles} />
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Stand-by out: {tConvert(item.standbyEnd)}
                        </Typography>
                        <Divider style={spacerStyles} />
                        <Typography
                          gutterBottom
                          variant='subtitle2'
                          component='h4'
                        >
                          Reason: {item.standbyReason}
                        </Typography>
                        <Divider style={spacerStyles} />
                      </div>
                    ) : (
                      ''
                    )}
                    {tmpArr.length !== 0  ? (
                      <Paper style={{ margin: '20px 0' }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Id</TableCell>
                              <TableCell>Label</TableCell>
                              <TableCell>Qty</TableCell>
                              <TableCell>UOM</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {tmpArr.map((key, idx) => {
                              return (
                                <TableRow key={idx}>
                                  <TableCell component='th' scope='row'>
                                    {key}
                                  </TableCell>
                                  <TableCell component='th' scope='row'>
                                    {item.combinedArticles[key].label}
                                  </TableCell>
                                  <TableCell component='th' scope='row'>
                                    {item.combinedArticles[key].qty}
                                  </TableCell>
                                  <TableCell component='th' scope='row'>
                                    {item.combinedArticles[key].uom}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Paper>
                    ) : (
                      ''
                    )}
                    <Typography variant='subtitle2' component='h4'>
                      Remarks: <br></br>
                      {item.jobSummary}
                      <br /> <br />
                    </Typography>
                    {item.photoRefs ? <Divider style={spacerStyles} /> : ''}
                    {item.photoRefs
                      ? item.photoRefs.map((e, i) => {
                          return (
                            <a
                              href={e}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <img
                                key={i}
                                alt='job photos'
                                style={{
                                  ObjectFit: 'scale-down',
                                  height: 200,
                                  width: 180
                                }}
                                src={e}
                              />
                            </a>
                          );
                        })
                      : ''}
                  </CardContent>
                </CardActionArea>
                {/* <CardActions></CardActions> */}
              </Card>
            );
          })
        : 'No Work Orders'}
    </div>
  );
  return page;
};

export default AdminComponent;
