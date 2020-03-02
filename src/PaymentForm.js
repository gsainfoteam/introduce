import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  Typography,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

export default function PaymentForm() {
  const [state, setState] = React.useState({
    frontend: false,
    backend: false,
    design: false,
  });

  const [studentName, setStudentName] = React.useState("")
  const [studentNumber, setStudentNumber] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { frontend, backend, design } = state;
  const error = [frontend, backend, design].filter(v => v).length === 0;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        지원자 정보
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        * 표시는 필수로 입력해주세요.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="Name" label="이름" fullWidth onchange={ (e) => {setStudentName(e.target.vaule)}} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="studentNumber" label="학번" fullWidth onchange={ (e) => {setStudentNumber(e.target.vaule)}}/>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="phone" label="휴대폰 번호" fullWidth onchange={ (e) => {setPhoneNumber(e.target.vaule)}}/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="exp"
            label="개발에 참여하신 경험이 있으시면 적어주세요"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="etc"
            label="하고싶은 말있으시면 적어주세요"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
