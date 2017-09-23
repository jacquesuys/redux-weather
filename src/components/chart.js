import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  return (
    <div>
      <Sparklines width={180} height={120} data={props.data}>
        <SparklinesLine color={props.color} type="avg" />
      </Sparklines>
      <div>{avg(props.data)} {props.units}</div>
    </div>
  );  
}

const avg = (data) => _.round(_.sum(data) / data.length);