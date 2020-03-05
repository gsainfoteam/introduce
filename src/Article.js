import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import gistory from './gistory.png';
import facebook from './facebook.png';
import nas from './NAS.jpg';

export const firstArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        인포팀이란?
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <ListItem>
        <ListItemText primary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="인포팀은 지스트대학 총학생회 특별기구입니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="주로 Python과 HTML, CSS, Javascript 등을 사용하여 지스트 학생들에게 도움이 되는 웹 서비스를 개발하는 업무를 수행하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="또한 '지스트 대학생' 페이스북 페이지 등을 운영하며 학생 커뮤니티도 관리하고 있습니다." />
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
        <ListItemText primary="" />
      </ListItem>
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

export const thirdArticle = (
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
        <ListItemText primary="" />
      </ListItem>
      <ListItem>
        <ListItemText primary="GISTORY는 지스트 대학생과 대학원생 모두가 이용할 수 있는 커뮤니티입니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="GIST 대학 공지, 자치기구 공지 등을 확인할 수 있으며 각 전공별 게시판, 익명 게시판과 같은 다양한 게시판도 운영하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="GIST 이메일을 통해 인증이 가능합니다." />
      </ListItem>
    </Grid>
  </Grid>
);

export const fourthArticle = (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography component="h1" variant="h4" align="center">
        페이스북 커뮤니티 운영
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
        <ListItemText primary="Facebook 비공개 그룹 '지스트 대학생'과 '지스트 - 택시 잡는 대학생들' 페이지를 운영하고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="지스트 대학생 그룹에서는 학교 생활을 하며 도움이 될만한 정보를 공유하거나 동아리 홍보, 물품 공동구매 등 다양한 활동이 이루어지고 있습니다." />
      </ListItem>
      <ListItem>
        <ListItemText primary="'지스트 - 택시 잡는 대학생들' 페이지는 주로 광주송정역과 유스퀘어 버스터미널까지 택시에 동승할 학생들을 찾기 위해 사용됩니다." />
      </ListItem>
    </Grid>
  </Grid>
);