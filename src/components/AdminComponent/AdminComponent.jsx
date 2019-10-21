import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class AdminComponent extends Component {
  render() {
    return (
      <div>
        {this.props.reports
          ? this.props.reports.map(function(item, index) {
              return (
                <Card key={index}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Work Image'
                      height='140'
                      src={item.photoRefs.toString()}
                      title='Work Image'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {item.bidZone}
                      </Typography>
                      <br></br>
                      <Typography gutterBottom variant='subtitle2' component='h4'>
                        ID: {item.jobId}
                      </Typography>
                      <br></br>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='h3'
                      >
                        {item.jobLocation}
                      </Typography>

                      <br></br>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        Remarks: <br></br>
                        {item.jobSummary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions></CardActions> */}
                </Card>
              );
            })
          : ''}
      </div>
    );
  }
}

export default AdminComponent;
