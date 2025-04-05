<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-4">
          언어를 무료로 배워보세요
        </h1>
        <p class="text-h6 mb-6">
          재미있고 효과적인 방법으로 새로운 언어를 학습하세요
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto" elevation="2">
          <v-card-title class="text-center">시작하기</v-card-title>
          <v-card-text>
            <v-select
              v-model="selectedLanguage"
              :items="languages"
              label="학습할 언어 선택"
              outlined
            ></v-select>
            <!-- 시작하기 버튼을 /languages로 이동하도록 수정 -->
            <v-btn
              color="primary"
              block
              size="large"
              to="/languages"
              class="mt-4"
            >
              무료로 시작하기
            </v-btn>
            <!-- 계정이 이미 있습니다 버튼은 /learn으로 이동 -->
            <v-btn
              color="secondary"
              block
              size="large"
              to="/learn"
              class="mt-4"
              variant="outlined"
            >
              계정이 이미 있습니다
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      selectedLanguage: '',
      languages: ['영어', '일본어', '중국어', '스페인어', '프랑스어']
    }
  }
}
</script>

<style scoped>
.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
}

.v-btn {
  text-transform: none;
  font-size: 1.1rem;
}
</style> 