# 모바일 청첩장 개발

## 기술스택

- Sveltekit
  - Svelte를 사용하여 웹 애플리케이션을 구축하기 위한 프레임워크
  - SvelteKit을 사용하면 서버 측 렌더링, 라우팅 및 API 호출을 쉽게 처리가능
  - Node.js, Deno 및 Lambda와 같은 다양한 백엔드와 함께 사용할 수 있음
- Vercel
  - Next.js 개발팀에서 만든 프론트엔드 호스팅 사이트
- MongoDB
  - MongoDB는 유연하고 확장 가능한 방식으로 데이터를 저장하고 검색하는 데 사용되는 인기 있는 오픈 소스 No SQL 데이터베이스
  - MongoDB atlas는 MongoDB의 완전 관리형 클라우드 데이터베이스 서비스
  - Vercel과의 연계성이 좋음

## 개발 이유?

결혼 준비 과정에서 직접 할 수 있는 부분은 없을 지 고민해봄
직접하게되면 완성도 면에서는 조금 떨어질 지 몰라도, 특별한 output이 나온다는 데에 의의가 있다고 생각함
프로포즈 영상, 웨딩 촬영, 모바일 청첩 등을 직접 제작을 하게 됨
모바일 청첩의 경우 최대한 다른 청첩장들을 참고하되, 하트를 누르면 애니메이션이 변경되는 효과를 적용하여 차별화를 둠

## TODO

- 별도의 청첩장 템플릿 레포지토리 개발
  - 현 레포지토리는 본인의 모바일 청첩 개발용 하드코딩된 레포지토리
  - 리소스(문구, 앨범 등) 변경을 스크립트를 통해 자동화 할 수 있도록 추가 예정
- 간단한 청첩장 에디터 구현
  - GUI 상에서 청첩장 에디팅이 가능한 프로젝트 개발
  - 배포기능도 제공

## Vercel hosting URL

- https://wedding-invi-one.vercel.app

## Developing

로컬 서버를 띄워보는 방법

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
