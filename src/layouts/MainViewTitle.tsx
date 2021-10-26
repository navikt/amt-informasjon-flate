import React from 'react';
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import './MainView.less';

interface MainViewTitleProps {
  title?: string;
  subTitle?: string;
}

function MainViewTitle(props: MainViewTitleProps) {
  const { title, subTitle } = props;
  return (
    <div className="main-view__title">
      {title && <Sidetittel>{title}</Sidetittel>}
      {subTitle && <Systemtittel>{subTitle}</Systemtittel>}
    </div>
  );
}

export default MainViewTitle;
