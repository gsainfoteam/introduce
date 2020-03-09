import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['유의사항', '지원서 양식'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleNext={handleNext}
            isUnderstadning={false}
            classes={classes}
          />
        );
      case 1:
        return (
          <PaymentForm
            handleNext={handleNext}
            handleBack={handleBack}
            classes={classes}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const goFirst = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Paper className={classes.paper}>
        <span
          id="sixth"
          style={{
            display: 'block',
            height: 112,
            marginTop: -112,
            visibility: 'hidden',
          }}
        />
        <Typography component="h1" variant="h4" align="center">
          인포팀에 지원하기
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                지원해 주셔서 감사합니다.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={goFirst}
                className={classes.button}
              >
                처음으로 돌아가기
              </Button>
            </>
          ) : (
            <>{getStepContent(activeStep)}</>
          )}
        </>
      </Paper>
    </>
  );
}
