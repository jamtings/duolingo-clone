<template>
  <v-app>
    <v-main class="home-view">
      <!-- 헤더 -->
      <v-app-bar flat color="white">
        <v-container class="d-flex align-center">
          <div class="d-flex align-center">
            <v-img
              src="@/assets/logo.svg"
              max-width="150"
              class="mr-4"
              alt="Duolingo"
            ></v-img>
          </div>
        </v-container>
      </v-app-bar>

      <v-container class="fill-height">
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" md="6" class="text-center">
            <!-- 왼쪽 일러스트레이션 -->
            <div class="character-group mb-8">
              <div class="owl-character">
                <svg
                  width="240"
                  height="240"
                  viewBox="0 0 240 240"
                  class="owl-svg"
                >
                  <!-- 몸통 (더 부드러운 곡선) -->
                  <path
                    d="M120,20 
                       C180,20 220,80 220,140
                       C220,190 180,220 120,220
                       C60,220 20,190 20,140
                       C20,80 60,20 120,20
                       Z"
                    class="owl-body"
                  />
                  
                  <!-- 눈 테두리 (타원형) -->
                  <ellipse cx="80" cy="100" rx="38" ry="35" class="owl-eye-outer" />
                  <ellipse cx="160" cy="100" rx="38" ry="35" class="owl-eye-outer" />
                  
                  <!-- 눈 -->
                  <ellipse cx="80" cy="100" rx="28" ry="25" class="owl-eye" />
                  <ellipse cx="160" cy="100" rx="28" ry="25" class="owl-eye" />
                  
                  <!-- 눈동자 -->
                  <circle cx="80" cy="100" r="12" class="owl-pupil">
                    <animate
                      attributeName="cy"
                      values="100;98;100"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="160" cy="100" r="12" class="owl-pupil">
                    <animate
                      attributeName="cy"
                      values="100;98;100"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <!-- 부리 (더 자연스러운 곡선) -->
                  <path
                    d="M110,130 
                       C115,132 125,132 130,130
                       C125,145 115,145 110,130"
                    class="owl-beak"
                  />
                  
                  <!-- 날개 (부드러운 곡선) -->
                  <path
                    d="M40,100 
                       C30,120 25,140 35,160
                       C45,180 60,160 65,140
                       C70,120 60,100 40,100"
                    class="owl-wing left-wing"
                  />
                  <path
                    d="M200,100
                       C210,120 215,140 205,160
                       C195,180 180,160 175,140
                       C170,120 180,100 200,100"
                    class="owl-wing right-wing"
                  />
                  
                  <!-- 발 (곡선) -->
                  <path
                    d="M90,190 Q120,210 150,190"
                    class="owl-feet"
                    stroke-width="8"
                    fill="none"
                  />
                </svg>
              </div>
              <div class="floating-characters">
                <span class="character" style="animation-delay: 0s">🎓</span>
                <span class="character" style="animation-delay: 0.5s">📚</span>
                <span class="character" style="animation-delay: 1s">💡</span>
                <span class="character" style="animation-delay: 1.5s">✨</span>
              </div>
            </div>
          </v-col>
          
          <v-col cols="12" md="6" class="text-center pa-8">
            <!-- 오른쪽 콘텐츠 -->
            <h1 class="text-h3 font-weight-bold mb-6">
              재미있고 효과적인<br>무료 언어 공부!
            </h1>
            
            <v-btn
              color="success"
              size="x-large"
              rounded="pill"
              class="px-8 mb-4 text-h6 start-button"
              to="/languages"
              elevation="2"
            >
              시작하기
            </v-btn>
            
            <div class="text-body-1">
              <v-btn
                variant="text"
                color="primary"
                class="text-body-1"
                to="/learn"
              >
                계정이 이미 있습니다
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- 하단 언어 슬라이더 -->
      <v-sheet class="py-4 bg-grey-lighten-4">
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="auto">
              <v-btn icon="mdi-chevron-left" variant="text"></v-btn>
            </v-col>
            <v-col cols="auto" v-for="(lang, i) in languages" :key="i">
              <v-btn
                variant="text"
                :to="'/learn/' + lang.code"
                class="px-4 language-button"
              >
                <span :class="['fi', `fi-${lang.countryCode}`, 'mr-2']"></span>
                {{ lang.name }}
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon="mdi-chevron-right" variant="text"></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import 'flag-icons/css/flag-icons.min.css'

export default {
  name: 'HomeView',
  data() {
    return {
      languages: [
        { name: '영어', code: 'en', countryCode: 'us' },
        { name: '베트남어', code: 'vi', countryCode: 'vn' },
        { name: '일본어', code: 'ja', countryCode: 'jp' },
        { name: '중국어', code: 'zh', countryCode: 'cn' },
        { name: '스페인어', code: 'es', countryCode: 'es' },
        { name: '프랑스어', code: 'fr', countryCode: 'fr' },
      ]
    }
  }
}
</script>

<style scoped>
.home-view {
  background-color: white;
  min-height: 100vh;
}

.v-btn {
  text-transform: none !important;
}

h1 {
  color: #4b4b4b;
  line-height: 1.3;
}

.start-button {
  background-color: #58cc02 !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 0 #58a700 !important;
  transition: filter 0.2s !important;
}

.start-button:hover {
  filter: brightness(1.1);
}

.language-button {
  font-size: 1.1rem;
  transition: background-color 0.2s;
}

.language-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.character-group {
  position: relative;
  display: inline-block;
}

.floating-characters {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.character {
  position: absolute;
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.character:nth-child(1) { left: 20%; }
.character:nth-child(2) { left: 40%; }
.character:nth-child(3) { left: 60%; }
.character:nth-child(4) { left: 80%; }

.owl-character {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.owl-svg {
  animation: bounce 2s ease-in-out infinite;
}

.owl-body {
  fill: #58cc02;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.owl-eye-outer {
  fill: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.owl-eye {
  fill: #ffd900;
}

.owl-pupil {
  fill: #4b4b4b;
}

.owl-beak {
  fill: #ffd900;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}

.owl-wing {
  fill: #4b8b3b;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
}

.owl-feet {
  stroke: #ffd900;
  stroke-linecap: round;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}

.left-wing {
  animation: flapLeft 3s ease-in-out infinite;
  transform-origin: right center;
}

.right-wing {
  animation: flapRight 3s ease-in-out infinite;
  transform-origin: left center;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes flapLeft {
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-15deg) translateX(-5px);
  }
}

@keyframes flapRight {
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(15deg) translateX(5px);
  }
}

.language-button .fi {
  font-size: 1.2rem;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style> 