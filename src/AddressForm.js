import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const AddressForm = props => {
  const [understood, setUnderstood] = React.useState(props.isUnderstading);
  const handleClick = e => {
    setUnderstood(!understood);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        유의사항
      </Typography>
      <ListItem
        style={{
          color: '#B00020',
        }}
      >
        <ListItemIcon>
          <i class="material-icons" style={{ color: '#B00020' }}>
            report
          </i>
        </ListItemIcon>
        <ListItemText primary="인포팀은 문행위/하우스/학생회와 공동지원이 불가능 합니다"></ListItemText>
      </ListItem>
      <Typography variant="h6" gutterBottom>
        지원 요건
      </Typography>
      <ListItem>
        <ListItemIcon>
          <i class="material-icons">keyboard_arrow_right</i>
        </ListItemIcon>
        <ListItemText primary="21학번이 아니어도 환영합니다." />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <i class="material-icons">keyboard_arrow_right</i>
        </ListItemIcon>
        <ListItemText primary="다음 사람들을 우대합니다" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="· Python 및 웹 프로그래밍 경험이 있으신 분" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="· 안드로이드 앱 개발 경험이 있으신 분" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="· 성실하게 1~2년 동안 꾸준히 참가 가능하신 분" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="· 디자인 경험이 있거나 디자인이 가능하신 분" />
      </ListItem>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox color="secondary" name="saveCard" onClick={handleClick} />
          }
          label="문화행사위원회/하우스/학생회와 공동지원이 불가능하다는 걸 이해했으며, 인포팀에 지원하겠습니다."
        />
      </Grid>
      <div className={props.classes.buttons}>
        {understood ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={props.handleNext}
              className={props.classes.button}
            >
              <i class="material-icons">arrow_forward</i>
            </Button>
          </>
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

export default AddressForm;
