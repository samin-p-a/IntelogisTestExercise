import React, { useEffect } from 'react';

import { Card, CardHeader, CardContent, Typography,  } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorIndicator=(props)=>{
  const {
    level='',
    error:{
      name='Error',
      message='',
      stack='',
    }={},
    error,
  } = props;

  useEffect(()=>{
    console.log('debug ErrorIndicator',{level,name,message,stack})
  },[error])

  return (
    <Card>
      <CardHeader
        avatar={
          <ErrorIcon color="error"/>
        }
        title={
          <Typography variant="h6" gutterBottom color="error">{level}:{name}</Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" gutterBottom color="error">{message}</Typography>
        <Typography variant="caption" gutterBottom color="error" component="pre">{stack}</Typography>
      </CardContent>
    </Card>
  );

};

export default ErrorIndicator;
