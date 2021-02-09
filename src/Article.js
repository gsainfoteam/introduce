import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import gistory from './gistory.png';
import facebook from './facebook.png';
import nas from './NAS.jpg';
import recruit from './recruit.jpg';

export const firstArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        GSA InfoTeam(인포팀)이란?
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <ListItem>
        <ListItemText primary="인포팀은 지스트대학 총학생회 특별기구입니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="주로 Python과 HTML, CSS, Javascript 등을 사용하여 지스트 학생들에게 도움이 되는 웹 서비스를 개발 및 관리합니다. 대표적으로 GISTORY와 자치회 · 동아리 신입 부원 모집  및 관리 페이지가 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="또한 '지스트 대학생'과 '지스트 - 택시 잡는 대학생들' 페이스북 페이지를 운영하고 총학생회의 저장 장소인 NAS를 관리하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="" />
      </ListItem>
    </Grid>
  </Grid>
);



export const secondArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        GISTORY 관리
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <Card>
        <CardActionArea href="https://www.gistory.me" target="_blank">
          <CardMedia
            component="img"
            alt="지스토리 메인 페이지"
            height="140"
            src={gistory}
            title="지스토리"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Gistory
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={12} sm={9}>
      <ListItem>
        <ListItemText primary="인포팀은 GISTORY를 개발 · 관리하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="GISTORY는 지스트인들의 이야기를 담은 공간이며 GIST 이메일을 통해 인증이 가능합니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="학내 공지를 비롯한 각종 자치회의 공지사항이 게시되고 이 외에도 자유게시판과 질문 게시판, 전공별 게시판 등이 마련되어 있어 정보를 공유하고 학생 간 소통할 수 있습니다." />
      </ListItem>
    </Grid>
  </Grid>
);

export const thirdArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        리크루팅 페이지 관리
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <Card>
        <CardActionArea href="https://recruit.gistory.me/" target="_blank">
          <CardMedia
            component="img"
            alt="리크루팅페이지"
            height="140"
            src={recruit}
            title="리크루팅"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              리크루팅 관리 페이지
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={12} sm={9}>
      <ListItem>
        <ListItemText primary="인포팀은 자치회와 동아리 등의 단체에서 신입 부원을 모집하고 관리하기 용이하도록 리크루팅 웹페이지를 개발하였습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="위 서비스를 통해 지원자 관리, 면접 시간 관리, 문자 일괄 발송 등이 가능합니다." />
      </ListItem>
    </Grid>
  </Grid>
);


export const fourthArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        페이스북 페이지 운영
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <Card>
        <CardActionArea
          href="https://www.facebook.com/groups/giststudent/"
          target="_blank"
        >
          <CardMedia
            component="img"
            alt="지스트 대학생"
            height="140"
            src={facebook}
            title="지스트 대학생 그룹"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              지스트 대학생
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={12} sm={9}>
      <ListItem>
        <ListItemText primary="인포팀은 Facebook 비공개 그룹 '지스트 대학생'과 '지스트 - 택시 잡는 대학생들' 페이지를 운영하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="지스트 대학생 그룹에는 지스트 재학생 신분이 확인된 분들만 가입 가능하며 페이지 내에서 학교 생활을 하며 도움이 될만한 정보를 공유하거나 동아리 홍보, 물품 나눔 및 판매 등 다양한 활동이 이루어지고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="'지스트 - 택시 잡는 대학생들' 페이지는 택시에 동승할 학생들을 찾기 위해 사용됩니다. 주로 [ GIST ] <-> [ 광주 송정역 / 유스퀘어 버스터미널 / 광주 공항 ] 경로가 자주 이용됩니다." />
      </ListItem>
    </Grid>
  </Grid>
);

export const fifthArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        NAS 관리
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Synology NAS"
            height="260"
            src={nas}
            title="NAS"
          />
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={12} sm={9}>
      <ListItem>
        <ListItemText primary="인포팀에서는 총학생회의 저장 장소인 NAS를 관리하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="모든 문서의 원본을 저장하고 관리하며 학생회와 다른 자치단체의 자료 위조 및 변조를 방지합니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="Synology NAS 저장소를 이용하고 있습니다." />
      </ListItem>
    </Grid>
  </Grid>
);

export const sixthArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        초보자는요?
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <ListItem>
        <ListItemIcon>
          <i class="material-icons">question_answer</i>
        </ListItemIcon>
        <ListItemText primary="저는 프로그래밍이나 디자인 하나도 모르는 알못인데 가능할까요?" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="일단 오세요." />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <i class="material-icons">question_answer</i>
        </ListItemIcon>
        <ListItemText primary="진짜 아무것도 모르는데요?" />
      </ListItem>
      <ListItem>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="일단 오시면 됩니다. 인포팀은 내부에서 서로 배우고 경험을 쌓으실 수 있습니다." />
      </ListItem>
    </Grid>
  </Grid>
);

