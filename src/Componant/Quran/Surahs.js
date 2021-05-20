import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { configure } from '@testing-library/react';
const useStyles = makeStyles((theme) => ({
  root: {
    margin:5,
    maxWidth: 345,
    float: "left",
    width:"24%"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Surahs = (props) => {
    console.log(props);
    const classes = useStyles();
    

    return (
      
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {props.sura.number}
          </Avatar>
        }
     
        title={props.sura.name}
        subheader={props.sura.englishName}
      />
     
    </Card>
    );
};

export default Surahs;
