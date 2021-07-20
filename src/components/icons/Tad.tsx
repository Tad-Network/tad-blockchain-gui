import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as TadIcon } from './images/tad.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={TadIcon} viewBox="05 15 140 50" {...props} />;
}
