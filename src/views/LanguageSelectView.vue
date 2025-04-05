<template>
  <v-container class="language-select-container">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-bold mb-6">학습할 언어를 선택하세요</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="language in languages"
        :key="language.code"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          :to="{ name: 'learn', params: { lang: language.code }}"
          class="language-card"
          elevation="2"
          height="100%"
        >
          <v-card-item>
            <div class="language-flag mb-4">
              <span :class="['fi', `fi-${language.countryCode}`]"></span>
            </div>
            <v-card-title class="text-h5 mb-2">
              {{ language.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ language.learners }}만 명이 학습 중
            </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-chip
              :color="getDifficultyColor(language.difficulty)"
              class="mb-2"
              size="small"
            >
              {{ language.difficulty }}
            </v-chip>
            <div class="text-body-2 text-grey">
              예상 학습 시간: {{ language.estimatedTime }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'flag-icons/css/flag-icons.min.css'

export default {
  name: 'LanguageSelectView',
  data() {
    return {
      languages: [
        {
          code: 'en',
          name: '영어',
          countryCode: 'us',
          learners: 387,
          difficulty: '쉬움',
          estimatedTime: '2-3개월'
        },
        {
          code: 'vi',
          name: '베트남어',
          countryCode: 'vn',
          learners: 167,
          difficulty: '보통',
          estimatedTime: '3-4개월'
        },
        {
          code: 'ja',
          name: '일본어',
          countryCode: 'jp',
          learners: 256,
          difficulty: '보통',
          estimatedTime: '3-4개월'
        },
        {
          code: 'zh',
          name: '중국어',
          countryCode: 'cn',
          learners: 189,
          difficulty: '어려움',
          estimatedTime: '4-5개월'
        },
        {
          code: 'es',
          name: '스페인어',
          countryCode: 'es',
          learners: 234,
          difficulty: '쉬움',
          estimatedTime: '2-3개월'
        },
        {
          code: 'fr',
          name: '프랑스어',
          countryCode: 'fr',
          learners: 178,
          difficulty: '보통',
          estimatedTime: '3-4개월'
        },
        {
          code: 'de',
          name: '독일어',
          countryCode: 'de',
          learners: 156,
          difficulty: '보통',
          estimatedTime: '3-4개월'
        }
      ]
    }
  },
  methods: {
    getDifficultyColor(difficulty) {
      switch (difficulty) {
        case '쉬움':
          return 'success'
        case '보통':
          return 'warning'
        case '어려움':
          return 'error'
        default:
          return 'grey'
      }
    }
  }
}
</script>

<style scoped>
.language-select-container {
  max-width: 1200px;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.language-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.language-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.language-flag {
  font-size: 3rem;
  text-align: center;
}

.language-flag .fi {
  font-size: 3rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 