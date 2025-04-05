<template>
  <v-app>
    <div class="learn-page">
      <!-- 왼쪽 사이드바 -->
      <v-navigation-drawer permanent class="sidebar">
        <v-list>
          <v-list-item
            prepend-icon="mdi-home"
            title="학습"
            value="learn"
            class="active-item"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-volume-high"
            title="소리내어 말하기"
            value="speaking"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-refresh"
            title="복습"
            value="review"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-trophy"
            title="리더보드"
            value="leaderboard"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-store"
            title="상점"
            value="store"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- 메인 콘텐츠 -->
      <v-main>
        <div class="main-content">
          <!-- 상단 헤더 -->
          <v-app-bar flat class="px-4">
            <v-btn icon="mdi-arrow-left" variant="text" to="/languages"></v-btn>
            <v-toolbar-title class="ml-2">{{ selectedLanguage }} 학습하기</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="mdi-book" variant="text">학습 가이드</v-btn>
          </v-app-bar>

          <!-- 학습 트리 -->
          <div class="learning-path px-4">
            <div v-for="(unit, unitIndex) in learningUnits" :key="unitIndex" class="unit-section">
              <h2 class="text-h5 mb-4">{{ unit.title }}</h2>
              
              <div class="levels-grid">
                <v-card
                  v-for="(level, levelIndex) in unit.levels"
                  :key="levelIndex"
                  :class="['level-card', { 'locked': level.locked }]"
                  :disabled="level.locked"
                  @click="startLevel(unit.id, level.id)"
                >
                  <v-card-item>
                    <div class="level-icon mb-2">
                      <v-icon :color="level.locked ? 'grey' : level.iconColor" size="32">
                        {{ level.icon }}
                      </v-icon>
                    </div>
                    <v-card-title>{{ level.title }}</v-card-title>
                    <v-card-subtitle>
                      <v-chip
                        :color="level.locked ? 'grey' : 'primary'"
                        size="small"
                        class="mr-2"
                      >
                        {{ level.xp }}XP
                      </v-chip>
                      {{ level.description }}
                    </v-card-subtitle>
                    
                    <v-progress-linear
                      v-if="!level.locked"
                      :model-value="level.progress"
                      color="success"
                      height="8"
                      rounded
                      class="mt-2"
                    ></v-progress-linear>
                  </v-card-item>
                </v-card>
              </div>
            </div>
          </div>
        </div>
      </v-main>

      <!-- 오른쪽 사이드바 -->
      <v-navigation-drawer location="right" permanent width="300" class="right-sidebar">
        <!-- 프로필 섹션 -->
        <v-card class="ma-2" flat>
          <v-card-item>
            <v-avatar size="64" class="mb-2">
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
            <v-card-title>사용자</v-card-title>
            <v-card-subtitle>
              <v-icon color="warning">mdi-fire</v-icon>
              0일 연속 학습 중
            </v-card-subtitle>
          </v-card-item>
        </v-card>

        <!-- XP 진행도 -->
        <v-card class="ma-2" flat>
          <v-card-item>
            <v-card-title class="text-subtitle-1">
              <v-icon color="warning" class="mr-2">mdi-star</v-icon>
              오늘의 목표
            </v-card-title>
            <v-progress-linear
              model-value="30"
              color="warning"
              height="20"
              rounded
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            <div class="text-caption mt-2">30/100 XP</div>
          </v-card-item>
        </v-card>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'LearnView',
  data() {
    return {
      selectedLanguage: '영어',
      learningUnits: [
        {
          id: 1,
          title: 'Unit 1 - 기초',
          levels: [
            {
              id: 1,
              title: '인사하기',
              description: '기본적인 인사말 배우기',
              icon: 'mdi-hand-wave',
              iconColor: 'primary',
              xp: 20,
              progress: 0,
              locked: false
            },
            {
              id: 2,
              title: '소개하기',
              description: '자신과 타인 소개하기',
              icon: 'mdi-account',
              iconColor: 'primary',
              xp: 20,
              progress: 0,
              locked: true
            },
            {
              id: 3,
              title: '숫자',
              description: '1-10까지의 숫자',
              icon: 'mdi-numeric',
              iconColor: 'primary',
              xp: 20,
              progress: 0,
              locked: true
            }
          ]
        },
        {
          id: 2,
          title: 'Unit 2 - 일상생활',
          levels: [
            {
              id: 4,
              title: '음식',
              description: '음식과 음료 이름',
              icon: 'mdi-food',
              iconColor: 'success',
              xp: 30,
              progress: 0,
              locked: true
            },
            {
              id: 5,
              title: '장소',
              description: '장소와 방향',
              icon: 'mdi-map-marker',
              iconColor: 'success',
              xp: 30,
              progress: 0,
              locked: true
            }
          ]
        }
      ]
    }
  },
  methods: {
    startLevel(unitId, levelId) {
      this.$router.push(`/lesson/${unitId}/${levelId}`)
    }
  }
}
</script>

<style scoped>
.learn-page {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.sidebar {
  width: 280px !important;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.active-item {
  background-color: #e8f5e9;
}

.unit-section {
  margin-bottom: 40px;
}

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.level-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.level-card:not(.locked):hover {
  transform: translateY(-4px);
}

.level-card.locked {
  opacity: 0.7;
}

.level-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin: 0 auto;
}

.right-sidebar {
  background-color: #fff;
}
</style> 