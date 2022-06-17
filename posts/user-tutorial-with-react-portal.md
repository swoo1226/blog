---
title: "React.Portal로 사용자 튜토리얼 만들기"
date: "2022-06-15"
---

우리는 종종 새로운 서비스를 처음 접하거나 기존 서비스에 신규 기능이 추가되는 경우에 튜토리얼을 진행해본 경험이 있을 것이다.  
사용자는 튜토리얼을 통하여 특정 위치의, 특정 요소가 가지는 역할에 대해서 차례대로 하나씩 인지하게 된다.  
\[다양한 서비스의 튜토리얼 진행 과정 레퍼런스 첨부하기\]  
\[튜토리얼 진행 과정 녹화본 첨부하기\]

![DoctorStrangePortal](https://blog.kakaocdn.net/dn/cRdhG8/btrENu9zhyC/e9CUvdWWluIW1b5P3P81s0/img.gif)

\[기본적인 React Portal 기능 및 특성 설명\]  
\- Portal

\[튜토리얼 컴포넌트 구상\]  
\- getBoundingClientRect로 설명하려는 parent 위치 찾기  
\- 튜토리얼 툴팁 컴포넌트  
\- 툴팁 속성 (props) 구성  
\- img 포함에 따른 표시 방식  
\- position  
\- size (fixed width and height unit)  
\[튜토리얼 컴포넌트 개선 및 보완\]  
\- window.resize event (and debounced) listener for repositionting  
\- fixed size => flexible size by rem units for resizing and responsive design  
\- 튜토리얼 단계로 설명하려는 parent 밑으로 포탈을 열 경우의 문제점  
\- CSS 상속으로 인하여 정상적인 표시 어려움 (https://jeonghwan-kim.github.io/2022/06/02/react-portal)  
\- #modal 요소를 별도로 생성하여 튜토리얼 포탈들의 탈출점을 우회  
\[튜토리얼 컴포넌트 디자인\]  
\- design (glassmorphism => neubrutalism)  
\- why neubrutalism?
