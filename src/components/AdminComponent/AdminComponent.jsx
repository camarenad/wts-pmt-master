import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const AdminComponent = props => {
  const page = (
    <div>
      {props.reports
        ? props.reports.map(function(item, index) {
            // let photo = item.photoRefs ? item.photoRefs[0].toString() : '';
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
                    <Typography gutterBottom variant='h5' component='h2'>
                      Bid Zone: {item.bidZone}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      ID: {item.jobId}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Date: {item.date}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Tech: {item.name}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Location: {item.jobLocation}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Time In: {item.inTime}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Time Out: {item.outTime}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Pending: {item.pending}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Material Costs: {item.materialCosts}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      Delay: {item.delay}
                    </Typography>
                    {item.emergency ? (
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='h4'
                      >
                        Emergency: Yes
                      </Typography>
                    ) : (
                      ''
                    )}
                    <Typography gutterBottom variant='subtitle2' component='h4'>
                      USA Removal: Yes
                    </Typography>
                    {item.jobComplete ? (
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='h4'
                      >
                        Job Complete: Yes
                      </Typography>
                    ) : (
                      ''
                    )}
                    {item.tripCharge ? (
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='h4'
                      >
                        Trip Charge: {item.tripCharge.toString()}
                      </Typography>
                    ) : (
                      ''
                    )}
                    <Typography variant='subtitle2' component='h4'>
                      Remarks: <br></br>
                      {item.jobSummary}
                      <br /> <br />
                    </Typography>
                    {item.photoRefs
                      ? item.photoRefs.map((e, i) => {
                          return (
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
