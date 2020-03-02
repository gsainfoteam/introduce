import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const endpoint = 'http://application.gistory.me';

const PaymentForm = props => {
  const [name, setName] = React.useState('');
  const [studentId, setStudentId] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [previousDevCareer, setPreviousDevCareer] = React.useState('');
  const [message, setMessage] = React.useState('');

  const sendMessage = () => {
    const info = {
      name: name,
      student_id: studentId,
      phone_number: phoneNumber,
      previous_dev_career: previousDevCareer,
      message: message,
    };
    console.log(info);
    axios({
      url: endpoint + '/api/application',
      method: 'POST',
      data: info,
    })
      .then(function(response) {
        if (response.data.success) {
          window.alert('문자가 발송되었습니다');
          props.handleNext();
        } else {
          window.alert(response.data.sms_error);
        }
      })
      .catch(function(error) {
        window.alert('오류가 발생했습니다');
        window.alert(error.response.data);
      });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        지원자 정보
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        * 표시는 필수로 입력해주세요.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            label="이름"
            value={name}
            onChange={e => {
              setName(e.target.value);
              console.log(name);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="student_id"
            label="학번"
            value={studentId}
            onChange={e => {
              setStudentId(e.target.value);
              console.log(studentId);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone_number"
            label="휴대폰 번호"
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value);
              console.log(phoneNumber);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="previous_dev_career"
            label="개발에 참여하신 경험이 있으시면 적어주세요"
            value={previousDevCareer}
            onChange={e => {
              setPreviousDevCareer(e.target.value);
              console.log(previousDevCareer);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="message"
            label="하고싶은 말있으시면 적어주세요"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
              console.log(message);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={props.classes.buttons}>
        <Button onClick={props.handleBack} className={props.classes.button}>
          <i class="material-icons">arrow_back</i>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessage}
          className={props.classes.button}
        >
          <i class="material-icons">send</i>
        </Button>
      </div>
    </>
  );
};

export default PaymentForm;
