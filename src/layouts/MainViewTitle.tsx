import React from 'react';
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import { Row } from 'react-bootstrap';
import './MainView.less';

interface MainViewTitleProps {
  title?: string;
  subTitle?: string;
  dataTestId?: string;
}

function MainViewTitle({ title, subTitle, dataTestId }: MainViewTitleProps) {
  return (
    <Row className="main-view__title">
      {title && <Sidetittel data-testid={dataTestId}>{title}</Sidetittel>}
      {subTitle && <Systemtittel>{subTitle}</Systemtittel>}
    </Row>
  );
}

export default MainViewTitle;
