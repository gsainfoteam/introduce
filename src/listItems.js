import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';

function sendEmail() {
  window.location = 'mailto:admin@gistory.me';
}

export const firstListItems = (
  <div>
    <Link href="#first" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <i class="material-icons">info</i>
        </ListItemIcon>
        <ListItemText primary="인포팀이란?" />
      </ListItem>
    </Link>
  </div>
);

export const secondListItems = (
  <div>
    <ListSubheader inset>인포팀에서 하는 일</ListSubheader>
    <Link href="#second" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <i class="material-icons">developer_board</i>
        </ListItemIcon>
        <ListItemText primary="NAS 관리" />
      </ListItem>
    </Link>
    <Link href="#third" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <i class="material-icons">public</i>
        </ListItemIcon>
        <ListItemText primary="GISTORY 관리" />
      </ListItem>
    </Link>
    <Link href="#fourth" color="inherit" underline="none">
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
    </Link>
  </div>
);

export const thirdListItems = (
  <div>
    <Link href="#fifth" color="inherit" underline="none">
      <ListItem button>
        <ListItemIcon>
          <i class="material-icons">drafts</i>
        </ListItemIcon>
        <ListItemText primary="지원하기" />
      </ListItem>
      <ListItem button onClick={sendEmail}>
        <ListItemIcon>
          <i class="material-icons">help_outline</i>
        </ListItemIcon>
        <ListItemText primary="문의사항" />
      </ListItem>
    </Link>
  </div>
);
