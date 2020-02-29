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
  const [understood, setUnderstood] = React.useState(false);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm nowUnderstand={nowUnderstand} />;
      case 1:
        return <PaymentForm />;
      default:
        throw new Error('Unknown step');
    }
  }

  const sendMessage = () => {
    console.log('아직 미완성');
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      sendMessage();
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const goBack = () => {
    setUnderstood(false);
    setActiveStep(0);
  };

  const handleBack = () => {
    setUnderstood(false);
    setActiveStep(activeStep - 1);
  };

  const nowUnderstand = () => {
    setUnderstood(!understood);
    console.log('제대로 전달 됨?');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
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
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                지원해 주셔서 감사합니다.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={goBack}
                className={classes.button}
              >
                처음으로 돌아가기
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    <i class="material-icons">arrow_back</i>
                  </Button>
                )}
                {understood === true ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? (
                      <i class="material-icons">send</i>
                    ) : (
                      <i class="material-icons">arrow_forward</i>
                    )}
                  </Button>
                ) : (
                  <Button>
                    <i class="material-icons">close</i>
                  </Button>
                )}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </React.Fragment>
  );
}
