import React from 'react';
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import { Row } from 'react-bootstrap';
import './MainView.less';

interface MainViewTitleProps {
  title?: string;
  subTitle?: string;
}

function MainViewTitle(props: MainViewTitleProps) {
  const { title, subTitle } = props;
  return (
    <Row className="main-view__title">
      {title && <Sidetittel>{title}</Sidetittel>}
      {subTitle && <Systemtittel>{subTitle}</Systemtittel>}
    </Row>
  );
}

export default MainViewTitle;
