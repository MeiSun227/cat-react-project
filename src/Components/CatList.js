import React from 'react'
import Cat from './Cat'
import useStyles from './Style'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CatList = (props) => {
    const cats = props.cats
    const classes = useStyles()
    return (
      
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={4}>
            {cats.map((cat) => (
              <Grid item xs={4}>
                <Paper className={classes.paper}><Cat key={cat.id} cat={cat} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid >

    )
  }
export default CatList