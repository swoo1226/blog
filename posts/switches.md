---
title: "Material Design Guidelines for Components"
date: "2020-02-21"
---

# How "Material Design Guidelines Explains Components"

## [Switches](https://material.io/components/switches)

### Usage
주로 모바일 환경에서 설정값을 조정할 때 선호되는 것이 스위치이다.
- 모바일과 태블릿에서 특정 아이템을 켜거나 끌 때
- 무언가를 즉시 활성화/비활성화 할 때

#### Principles
1. 친숙하게 : 예상 가능한 모습의 형태를 가져야 한다.
2. 눈에 띄게 : 스위치가 선택되면 한 눈에 보여야 하고, 선택되지 않은 것 보다 더 두드러져 보여야 한다.
3. 효율적이게 : 가능한 옵션들을 비교하기 쉽도록 해야한다.

#### Platform Differences
플랫폼별로 표준에 맞게끔 적응시킨다.

![platform differences](/images/switchesDiffPlatform.jpg)

### Behavior
스위치가 사용자 상호작용으로 인해 한 쪽 끝으로 이동하면 성공적으로 토글된 것이다.

#### Text Label
스위치 옵션에 대한 내용은 inline label 형태로 보여주어야 한다.
단, 스위치가 자체적으로 on/off 라는 문자를 포함하지 않게 한다.
스위치의 그래픽 요소만으로도 충분하다.

### Display processing status
스위치가 어떤 것의 실제 상태를 보여주기 때문에, 때때로 상태 변화 시에 지연이 있을 수 있다.
그럴 경우, 처리 상태 애니메이션이 사용될 수 있다.
진행 지표의 표시 방법은, 스위치 내부에 하는 것이 아니라 전체화면과 같이 잘 보이고 이해하기 쉽게 만들도록 한다.

### States
스위치는 on 또는 off 될 수 있다. 
추가적으로 enabled, disabled, hover, focused, pressed 상태를 가질 수 있다.
![switch states](/images/switchesStates.jpg)