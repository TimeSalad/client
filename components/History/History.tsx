import React, { ReactElement } from 'react';
import styled from '@emotion/native';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import { ko } from 'date-fns/locale';

export type Props = {
  title: string;
  startedtAt: Date;
  endedAt: Date;
};

export function History({ title, startedtAt, endedAt }: Props): ReactElement {
  return (
    <Container>
      <Icon />
      <Contents>
        <Main>
          <Title>{title}</Title>
          <Term>
            {formatDuration(
              intervalToDuration({ start: startedtAt, end: endedAt }),
              { locale: ko },
            )}
          </Term>
        </Main>
        <Sub>
          <Category>저녁</Category>
          <StartedAt>
            {format(startedtAt, 'aa hh:mm', { locale: ko })}
          </StartedAt>
        </Sub>
      </Contents>
    </Container>
  );
}

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 20px;
`;

const Icon = styled.View`
  background-color: blue;
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;

const Contents = styled.View`
  display: flex;
  flex: 1;
`;

const Main = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  line-height: 18px;
`;

const Term = styled.Text`
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
`;

const Sub = styled.View`
  display: flex;
  flex-direction: row;
`;

const Category = styled.Text`
  flex: 1;
  font-size: 12px;
  line-height: 14px;
  color: #898e98;
`;

const StartedAt = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #898e98;
`;
