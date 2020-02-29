import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

function sendEmail() {
  window.location = 'mailto:admin@gistory.me';
}

export const firstListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <i class="material-icons">info</i>
      </ListItemIcon>
      <ListItemText primary="인포팀이란?" />
    </ListItem>
  </div>
);

export const secondListItems = (
  <div>
    <ListSubheader inset>인포팀에서 하는 일</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <i class="material-icons">developer_board</i>
      </ListItemIcon>
      <ListItemText primary="NAS 관리" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <i class="material-icons">public</i>
      </ListItemIcon>
      <ListItemText primary="Gistory 관리" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <i
          class="fab fa-facebook"
          style={{
            fontSize: '22.5px',
            lineHeight: '1',
            letterSpacing: 'normal',
            textTransform: 'none',
            display: 'inline-block',
            whiteSpace: 'normal',
            direction: 'ltr',
            MozFontFeatureSettings: 'liga',
            alignContent: 'center',
          }}
        ></i>
      </ListItemIcon>
      <ListItemText primary="페이스북 커뮤니티" />
    </ListItem>
  </div>
);

export const thirdListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <i class="material-icons">drafts</i>
      </ListItemIcon>
      <ListItemText primary="지원하기" />
    </ListItem>
    <ListItem button onClick = {sendEmail}>
      <ListItemIcon>
        <i class="material-icons">help_outline</i>
      </ListItemIcon>
      <ListItemText primary="문의사항" />
    </ListItem>
  </div>
);
