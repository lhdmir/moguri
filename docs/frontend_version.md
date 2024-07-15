### 1. nvm 설치

OS에 맞는 nvm 설치

### 2. Vite와 React 프로젝트 생성

먼저, Vite를 사용하여 새로운 React 프로젝트를 생성합니다.

```bash
# 프로젝트 디렉토리로 이동
cd frontend

# Vite 프로젝트 생성
npm create vite@latest

# 프로젝트 이름 입력 (frontend 입력)
# 프레임워크 선택: React
# 언어 선택: JavaScript or TypeScript

cd frontend
```

위 명령어를 실행하면 Vite와 React를 사용하는 새로운 프로젝트가 생성됩니다.

### 3. `.nvmrc` 파일 생성

프로젝트 디렉토리로 이동한 후, `.nvmrc` 파일을 생성하여 사용할 Node.js 버전을 지정합니다. 예를 들어 Node.js 16 버전을 사용한다고 가정합니다.

```bash
echo "16" > .nvmrc
```

### ~~4. `.npmrc` 파일 생성 (선택 사항)~~

~~npm 설정을 프로젝트 단위로 관리할 수 있는 `.npmrc` 파일을 생성합니다. 예를 들어, 패키지 설치 시 정확한 버전을 저장하도록 설정할 수 있습니다.~~

```bash
echo "save-exact=true" > .npmrc
```

### 5. `package.json` 파일 수정

`package.json` 파일을 열어 `engines` 필드를 추가하여 프로젝트에서 요구하는 Node.js 버전을 명시합니다. 이를 통해 개발자들이 올바른 Node.js 버전을 사용하도록 권장할 수 있습니다.

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "engines": {
    "node": "16.x"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "vite": "^2.6.4",
    "@vitejs/plugin-react": "^1.0.0"
  }
}
```

### 6. Node.js 버전 설치 및 사용

프로젝트 디렉토리로 이동한 후, nvm을 사용하여 `.nvmrc` 파일에 명시된 Node.js 버전을 설치하고 사용합니다.

```bash
nvm install
nvm use
```

이 명령어들은 `.nvmrc` 파일에 명시된 Node.js 버전을 설치하고 그 버전을 사용하도록 설정합니다.

### 7. 패키지 설치

이제 프로젝트의 의존성을 설치합니다.

```bash
npm install
```
