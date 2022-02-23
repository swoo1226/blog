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

---

## [Menus](https://m3.material.io/components/menus/guidelines)

### Usage
메뉴는 사용자가 다수의 옵션 중에서 선택할 수 있도록 한다.
radio 버튼이나 choid chip 모음 보다 눈에 덜 띄고, 공간을 덜 차지한다.
메뉴는 사용자의 특정 요소(아이콘, 버튼, 입력창 등) 상호작용으로 열린다.
이 때, 다른 어떤 UI 요소들 보다 앞쪽에 보여주어야 한다.
![menus open](/images/menusOpen.png)

메뉴는 화면 또는 브라우저의 가장자리를 기준으로 배치한다.
보통은 요소의 아래나 옆에 표시한다.
만약 화면의 가장자리로 인해 열린 메뉴가 잘리는 경우, 메뉴는 대신에 왼쪽, 오른쪽, 위 등 다른 곳으로 표시할 수 있다.

또한 메뉴의 높이는 적어도 앱 UI 보다 한 행은 작아야 한다.
![menus one row](/images/menusOneRow.png)

### Anatomy
![menus anatomy](/images/menusAnatomy.jpg)
1. Container
2. List item (레이블 텍스트 및 선택적 선행 아이콘, 추적 아이콘 및 키보드 명령 포함)
3. Divider (optional)

#### Container
모든 메뉴 아이템을 품고 있다.

#### List items
메뉴는 옵션 목록(list item)을 보여준다.
옵션 중에서 현재 상태 기준으로 사용할 수 없는 옵션의 경우, 목록에서 삭제하는 것이 아니라 `disabled` 형태로 보여주는 것이 낫다.

#### Divider
list item을 그룹별로 분리할 때 사용할 수 있다.

### Responsive layout
맨 아래 시트는 모바일 기기에서 메뉴의 대안이 될 수 있다.
추가적인 아이템과 긴 레이블을 표시하기에 더 많은 공간을 갖기 떄문이다.
![menus bottom sheet](/images/menusBottomSheet.png)

---

## [Dialog](https://m3.material.io/components/dialogs/guidelines)

### Usage
Dialog는 앱 컨텐트 앞에 중요한 정보를 제공하거나 결정을 하도록 표시하는 모달창이다.
표시와 동시에 모든 앱 기능을 무력화하고, 특정 동작을 받기 전까지 남아있게 된다.
Dialog는 의도적으로 방해가 되기 떄문에 적당히 사용해야 한다.
사용자를 덜 방해하려면 menu를 대신 사용하는 방법도 있다.

![dialog or banner](/images/dialogOrBanner.jpg)

화면의 중앙 일부를 사용하거나, 화면 전체를 뒤덮으면서 사용하는 종류가 있다.

#### Baic
![dialog basic](/images/dialogBasic.jpg)
`1` container
`2` icon (optional)
`3` headline (optional)
`4` supporting text
`5` divider (optional)
`6` actions
`7` scrim

#### Full-Screen
![dialog full screen](/images/dialogFull.jpg)
`1` container
`2` header region
`3` close affordance
`4` headline (optional)
`5` action
`6` divider

#### Container and Scrim
container는 다른 화면 요소 위에 표시되며, dialog의 컨텐트들을 담고 있다.
dialog에 주의를 집중하기 위해 container 뒤의 표면은 막을 씌운 듯 만들어 눈에 덜 띄게 만든다. 

#### Headline
dialog의 목적이 headline이나 button들에 전달되어야 한다.
- 간단명료한 서술 또는 질문을 사용한다.
- 사과, 경고, 모호한 문구는 적지 않는다.

#### Button
dialog 액션은 대부분 버튼을 표시하고 사용자에게 무언가를 확인하거나 인식하도록 한다.
왼쪽에서 오른쪽으로 향하는 언어의 경우, 무언가를 확인할 때의 액션은 오른쪽에, 무언가를 해산시킬 때의 액션은 왼쪽에 위치시킨다. 
(cancel은 왼쪽, OK는 오른쪽)
dialog는 최대 두 개의 액션만 가지도록 한다.

#### Basic dialog
기본 대화 상자는 긴급한 정보, 세부 정보 또는 작업으로 사용자를 방해한다. 기본 대화 상자의 일반적인 사용 사례로는 알림, 빠른 선택 및 확인이 있다.
기본 대화 상자는 종종 알림 또는 목록으로 나타나지만 목록, 날짜 선택기 및 시간 선택기를 포함한 다양한 레이아웃 및 구성 요소 조합을 사용할 수도 있다.

#### Full-screen dialog
전체 화면 대화 상자가 전체 화면을 가득 채우며 일련의 작업을 완료해야 하는 작업이 포함된다. 이벤트 제목, 날짜, 위치 및 시간이 있는 일정관리 항목을 만드는 것이 한 예이다.

전체 화면을 차지하기 때문에 전체 화면 대화 상자는 다른 대화 상자를 표시할 수 있는 유일한 대화 상자다.

전체 화면 대화 상자가 저장되지 않고 닫히면 변경 내용을 저장하지 않고 선택 항목을 삭제해야 함을 확인하는 모달 대화 상자가 그 앞에 나타난다.

다음 조건 중 하나를 충족하는 내용 또는 태스크에 대해 전체 화면 대화 상자를 사용할 수 있다.

- 양식 필드와 같이 키보드 입력이 필요한 구성 요소를 포함하는 대화 상자
- 변경 내용이 즉시 저장되지 않은 경우
- 대화상자 내의 구성요소가 추가 대화상자를 여는 경우
전체 화면 대화 상자는 `모바일 장치 전용`이다. 
태블릿 또는 데스크톱의 경우 모달 대화 상자를 사용한다.

##### Saving selections
전체 화면 대화 상자에서 선택을 저장하기 위해, 사용자는 `Save`를 누르게 된다. 모든 변화를 지우고 나가기 위해서는 사용자가 `X` 아이콘 또는 `Back` 버튼을 누르게 된다.

#### Confirmation
모든 필수 입력 영역이 채워지기 전까지 confirmation 액션은 무력화되어 있다.
`Save`, `Send`, `Share`, `Create`, `Update` 같은 서술형 동사를 사용하자.
`Done`, `OK`, `Close` 같은 모호한 용어를 사용하지 말자.

### Behavior

#### Appearing
대화 상자는 사용자에게 현재 진행중인 작업을 멈출 것인지에 대해 묻지도, 경고를 하지도 않고 표시된다. 때문에 대화 상자는 모든 선택이나 설정 시에 무분별하게 사용해서는 안된다.

fade-transition 패턴을 사용하여 화면으로 들어가거나 나오는 대화 상자
- 대화 상자는 80%에서 100%(최종 크기) 크기로 커지면서 fade in 한다.
- 배경 흐림막은 앱 컨텐트 앞으로 fade in 한다. 

#### Scrolling
대부분의 대화 상자 컨텐트는 스크롤링을 피해야한다.
스크롤링이 필요한 경우에도, 대화 상자 제목은 상단에 고정되고 버튼은 하단에 고정되어야 한다. 
또한 대화 상자는 바깥의 요소들과 함께 스크롤 되면 안 된다.