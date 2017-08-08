import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../util/style-utils'

const rotate = keyframes`
  0% {transform: rotate(0deg);}
  25% {transform: rotate(180deg);}
  50% {transform: rotate(180deg);}
  75% {transform: rotate(360deg);}
  100% {transform: rotate(360deg);}
`

const fill = keyframes`
  0% {height: 0%;}
  25% {height: 0%;}
  50% {height: 100%;}
  75% {height: 100%;}
  100% {height: 0%;}
`

const LoaderWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`

const LoaderText = styled.span`
  font-family: 'Roboto Mono';
  font-weight: bold;
  font-size: 1.2em;
  color: ${colors.colorBackgroundDark};
  margin: 0 10px 0 -10px;
`

const Loader = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 4px solid ${colors.colorBackgroundDark};
  animation: ${rotate} 3s infinite ease;
`

const LoaderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: ${colors.colorBackgroundDark};
  animation: ${fill} 3s infinite ease-in;
`

export default () => {
  return (
    <LoaderWrapper>
      <LoaderText>Loading</LoaderText>
      <Loader>
        <LoaderInner />
      </Loader>
    </LoaderWrapper>
  )
}
