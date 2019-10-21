import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class FilterComponent extends Component {
  render() {
    return (
      <Grid style={{ padding: 2 }}>
        <div style={{ marginTop: 20 }}>
          <TextField
            onChange={this.props.handleChange}
            id='outlined-full-width'
            label={this.props.label}
            placeholder={`Search By ${this.props.label}`}
            helperText={`${this.props.label} search`}
            name={`${this.props.name}`}
            fullWidth
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
      </Grid>
    );
  }
}

export default FilterComponent;
