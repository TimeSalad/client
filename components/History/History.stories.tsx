import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { History } from '.';
import CenterView from '../stories/CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <History
      title="하은선생님의 클라이밍교실"
      startedtAt={new Date('2022-04-18T12:00:00')}
      endedAt={new Date('2022-04-18T14:20:00')}
    />
  ));
