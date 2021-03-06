import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const validator = {
  name: /^[가-힣]{2,4}$/,
  studentId: /20[012][0-9]{5}/,
  phoneNumber: /01[0-9]-?[0-9]{3,4}-?[0-9]{4}/,
};

const PaymentForm = props => {
  const [name, setName] = React.useState('');
  const [studentId, setStudentId] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [previousDevCareer, setPreviousDevCareer] = React.useState('');
  const [message, setMessage] = React.useState('');

  const sendMessage = () => {
    const endpoint = 'https://application.gistory.me';
    const info = {
      project: '3ba268251715486098d287b69542b3e2',
      name: name,
      student_id: studentId,
      phone_number: phoneNumber,
      '개발에 참여하신 경험이 있으시면 적어주세요': previousDevCareer,
      '하고싶은 말있으시면 적어주세요': message,
    };

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
        const errorInfo = error.response.data.error;
        switch (errorInfo) {
          case 'application_not_opened':
            window.alert('아직 지원 기간이 아닙니다.');
            break;
          case 'application_closed':
            window.alert('지원이 마감되었습니다');
            break;
          case 'sutdent_id_from_not_valid':
            window.alert('학번이 잘못되었습니다.');
            break;
          case 'phone_number_form_not_valid':
            window.alert('휴대전화 서식이 잘못되었습니다.');
            break;
          case 'duplicate_input_data':
            window.alert('학번이나 휴대폰 번호가 중복되었습니다.');
            break;
          case 'sms_error':
            window.alert('SMS 전송과정에서 오류가 발생하였습니다.');
            break;
          case 'unknown_error':
            window.alert('알 수 없는 에러가 발생하였습니다.');
            break;
          default:
            window.alert('에러가 발생했습니다.');
            // 프론트 단에서 에러가 발생해서 아예 전송이 안되거나 할때
            break;
        }
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
            name="name"
            onChange={e => {
              setName(e.target.value);
            }}
            error={!validator['name'].test(name)}
            helperText="4글자까지 적어주세요."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="student_id"
            label="학번"
            value={studentId}
            name="studentId"
            onChange={e => {
              setStudentId(e.target.value);
            }}
            error={!validator['studentId'].test(studentId)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone_number"
            label="휴대폰 번호"
            value={phoneNumber}
            name="phoneNumber"
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
            error={!validator['phoneNumber'].test(phoneNumber)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="previous_dev_career"
            label="개발에 참여하신 경험이 있으시면 적어주세요"
            value={previousDevCareer}
            name="previousDevCareer"
            onChange={e => {
              setPreviousDevCareer(e.target.value);
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
            name="message"
            onChange={e => {
              setMessage(e.target.value);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={props.classes.buttons}>
        <Button onClick={props.handleBack} className={props.classes.button}>
          <i class="material-icons">arrow_back</i>
        </Button>
        {validator['phoneNumber'].test(phoneNumber) &&
        validator['studentId'].test(studentId) &&
        validator['name'].test(name) ? (
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            className={props.classes.button}
          >
            <i class="material-icons">send</i>
          </Button>
        ) : (
          <>
            <Button className={props.classes.button}>
              <i class="material-icons">close</i>
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentForm;
