<template>
  <v-app>
    <v-main class="lesson-view">
      <!-- 상단 진행 바 -->
      <v-app-bar flat color="primary" class="px-4">
        <v-btn icon="mdi-close" variant="text" color="white" to="/learn"></v-btn>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-icon color="red" class="mr-1">mdi-heart</v-icon>
          <span class="text-white">{{ hearts }}</span>
        </div>
      </v-app-bar>

      <v-progress-linear
        :model-value="progress"
        color="success"
        height="8"
      ></v-progress-linear>

      <!-- 문제 영역 -->
      <v-container class="py-8">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <div v-if="currentExercise" class="text-center">
              <h2 class="text-h5 mb-6">{{ currentExercise.question }}</h2>
              
              <v-row class="mb-4">
                <v-col 
                  v-for="(option, index) in currentExercise.options" 
                  :key="index"
                  cols="6"
                >
                  <v-btn
                    block
                    :color="getOptionColor(option)"
                    :disabled="isAnswered"
                    @click="checkAnswer(option)"
                    class="pa-4"
                    size="x-large"
                  >
                    {{ option }}
                  </v-btn>
                </v-col>
              </v-row>

              <v-btn
                v-if="isAnswered"
                color="primary"
                block
                size="large"
                class="mt-6"
                @click="nextExercise"
              >
                계속하기
              </v-btn>
            </div>

            <!-- 레슨 완료 화면 -->
            <div v-else class="text-center">
              <v-icon
                color="success"
                size="64"
                class="mb-4"
              >
                mdi-check-circle
              </v-icon>
              <h2 class="text-h4 mb-4">레슨 완료!</h2>
              <p class="text-h6 mb-6">획득한 XP: {{ earnedXP }}</p>
              <v-btn
                color="primary"
                block
                size="large"
                to="/learn"
              >
                학습 계속하기
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LessonView',
  data() {
    return {
      hearts: 5,
      currentExerciseIndex: 0,
      isAnswered: false,
      selectedAnswer: null,
      earnedXP: 0,
      exercises: [
        {
          type: 'word-select',
          question: '다음 중 "사과"를 선택하세요',
          options: ['사과', '바나나', '오렌지', '포도'],
          correctAnswer: '사과'
        },
        {
          type: 'word-select',
          question: '다음 중 "학교"를 선택하세요',
          options: ['병원', '학교', '공원', '식당'],
          correctAnswer: '학교'
        },
        {
          type: 'word-select',
          question: '다음 중 "물"을 선택하세요',
          options: ['주스', '커피', '물', '우유'],
          correctAnswer: '물'
        }
      ]
    }
  },
  computed: {
    currentExercise() {
      return this.exercises[this.currentExerciseIndex]
    },
    progress() {
      return (this.currentExerciseIndex / this.exercises.length) * 100
    }
  },
  methods: {
    checkAnswer(answer) {
      this.isAnswered = true
      this.selectedAnswer = answer
      
      if (answer === this.currentExercise.correctAnswer) {
        this.earnedXP += 10
      } else {
        this.hearts--
        if (this.hearts <= 0) {
          // TODO: 게임 오버 처리
        }
      }
    },
    nextExercise() {
      this.isAnswered = false
      this.selectedAnswer = null
      this.currentExerciseIndex++
    },
    getOptionColor(option) {
      if (!this.isAnswered) return 'default'
      if (option === this.currentExercise.correctAnswer) return 'success'
      if (option === this.selectedAnswer && option !== this.currentExercise.correctAnswer) return 'error'
      return 'default'
    }
  }
}
</script>

<style scoped>
.lesson-view {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style> 