<!--
  KI-Schulung Layout: Quiz-Folie
  ===============================
  Interaktive Multiple Choice Fragen mit Feedback

  Verwendung:
  ---
  layout: ki-quiz
  question: Was ist ein LLM?
  options:
    - text: Large Language Model
      correct: true
      explanation: Richtig! LLMs sind große Sprachmodelle.
    - text: Low Level Machine
      correct: false
      explanation: Falsch. LLM steht für Large Language Model.
    - text: Local Learning Method
      correct: false
      explanation: Falsch. LLM steht für Large Language Model.
  ---
-->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface QuizOption {
  text: string
  correct: boolean
  explanation?: string
}

const props = defineProps({
  question: { type: String, default: 'Quiz-Frage' },
  options: { type: Array as () => QuizOption[], default: () => [] },
  showExplanation: { type: Boolean, default: true },
  allowRetry: { type: Boolean, default: true },
})

const isLoaded = ref(false)
const selectedIndex = ref<number | null>(null)
const hasAnswered = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const selectOption = (index: number) => {
  if (hasAnswered.value && !props.allowRetry)
    return

  selectedIndex.value = index
  hasAnswered.value = true
}

const resetQuiz = () => {
  selectedIndex.value = null
  hasAnswered.value = false
}

const selectedOption = computed(() => {
  if (selectedIndex.value === null)
    return null
  return props.options[selectedIndex.value]
})

const isCorrect = computed(() => {
  return selectedOption.value?.correct === true
})
</script>

<template>
  <div class="ki-quiz-layout" :class="{ loaded: isLoaded }">
    <!-- Quiz Container -->
    <div class="quiz-container">
      <!-- Question -->
      <div class="question-section">
        <span class="question-label">Frage</span>
        <h2 class="question-text">{{ question }}</h2>
      </div>

      <!-- Options -->
      <div class="options-section">
        <button
          v-for="(option, index) in options"
          :key="index"
          class="option-button"
          :class="{
            selected: selectedIndex === index,
            correct: hasAnswered && option.correct,
            incorrect: hasAnswered && selectedIndex === index && !option.correct,
            revealed: hasAnswered,
          }"
          :disabled="hasAnswered && !allowRetry"
          @click="selectOption(index)"
        >
          <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
          <span class="option-text">{{ option.text }}</span>
          <span v-if="hasAnswered" class="option-icon">
            <template v-if="option.correct">✓</template>
            <template v-else-if="selectedIndex === index">✗</template>
          </span>
        </button>
      </div>

      <!-- Feedback -->
      <transition name="feedback">
        <div v-if="hasAnswered && showExplanation" class="feedback-section" :class="{ correct: isCorrect, incorrect: !isCorrect }">
          <div class="feedback-header">
            <span class="feedback-icon">{{ isCorrect ? '🎉' : '💡' }}</span>
            <span class="feedback-title">{{ isCorrect ? 'Richtig!' : 'Nicht ganz...' }}</span>
          </div>
          <p v-if="selectedOption?.explanation" class="feedback-text">
            {{ selectedOption.explanation }}
          </p>
          <button v-if="allowRetry && !isCorrect" class="retry-button" @click="resetQuiz">
            Erneut versuchen
          </button>
        </div>
      </transition>
    </div>

    <!-- Progress indicator -->
    <div v-if="hasAnswered" class="progress-indicator">
      <div class="progress-dot" :class="{ success: isCorrect, error: !isCorrect }"></div>
    </div>
  </div>
</template>

<style scoped>
.ki-quiz-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 3rem;
  background: linear-gradient(180deg, #FAFAFA 0%, #F5F5F7 100%);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-quiz-layout.loaded {
  opacity: 1;
}

/* Quiz Container */
.quiz-container {
  width: 100%;
  max-width: 700px;
}

/* Question Section */
.question-section {
  text-align: center;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: questionIn 0.5s ease-out 0.1s forwards;
}

@keyframes questionIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.question-label {
  display: inline-block;
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.question-text {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
  line-height: 1.3;
}

/* Options Section */
.options-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.25rem;
  background: white;
  border: 2px solid #E8E8ED;
  border-radius: 0.75rem;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-out;
  opacity: 0;
  transform: translateX(-20px);
  animation: optionIn 0.4s ease-out forwards;
}

.option-button:nth-child(1) { animation-delay: 0.2s; }
.option-button:nth-child(2) { animation-delay: 0.3s; }
.option-button:nth-child(3) { animation-delay: 0.4s; }
.option-button:nth-child(4) { animation-delay: 0.5s; }

@keyframes optionIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.option-button:hover:not(:disabled) {
  border-color: #0071E3;
  background: rgba(0, 113, 227, 0.05);
  transform: translateX(4px);
}

.option-button:disabled {
  cursor: default;
}

.option-button.selected:not(.revealed) {
  border-color: #0071E3;
  background: rgba(0, 113, 227, 0.1);
}

.option-button.revealed.correct {
  border-color: #34C759;
  background: rgba(52, 199, 89, 0.1);
}

.option-button.revealed.incorrect {
  border-color: #FF3B30;
  background: rgba(255, 59, 48, 0.1);
}

.option-button.revealed:not(.correct):not(.incorrect) {
  opacity: 0.6;
}

/* Option elements */
.option-letter {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F5F7;
  border-radius: 0.5rem;
  font-weight: 600;
  color: var(--color-text-secondary, #6E6E73);
  transition: all 0.2s ease-out;
}

.option-button:hover:not(:disabled) .option-letter {
  background: #0071E3;
  color: white;
}

.option-button.correct .option-letter {
  background: #34C759;
  color: white;
}

.option-button.incorrect .option-letter {
  background: #FF3B30;
  color: white;
}

.option-text {
  flex: 1;
  color: var(--color-text-primary, #1D1D1F);
}

.option-icon {
  font-weight: 700;
  font-size: 1.125rem;
}

.option-button.correct .option-icon { color: #34C759; }
.option-button.incorrect .option-icon { color: #FF3B30; }

/* Feedback Section */
.feedback-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
}

.feedback-section.correct {
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(50, 215, 75, 0.1));
  border: 1px solid rgba(52, 199, 89, 0.3);
}

.feedback-section.incorrect {
  background: linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(255, 179, 64, 0.1));
  border: 1px solid rgba(255, 149, 0, 0.3);
}

.feedback-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.feedback-icon {
  font-size: 1.5rem;
}

.feedback-title {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-text-primary, #1D1D1F);
}

.feedback-text {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0 0 1rem 0;
}

.retry-button {
  padding: 0.625rem 1.5rem;
  background: #0071E3;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.retry-button:hover {
  background: #005bb5;
  transform: scale(1.02);
}

/* Feedback transition */
.feedback-enter-active {
  animation: feedbackIn 0.4s ease-out;
}

.feedback-leave-active {
  animation: feedbackIn 0.3s ease-out reverse;
}

@keyframes feedbackIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Progress Indicator */
.progress-indicator {
  position: absolute;
  bottom: 2rem;
  display: flex;
  gap: 0.5rem;
}

.progress-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: dotPulse 0.5s ease-out;
}

.progress-dot.success {
  background: #34C759;
}

.progress-dot.error {
  background: #FF9500;
}

@keyframes dotPulse {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 768px) {
  .ki-quiz-layout {
    padding: 2rem;
  }

  .question-text {
    font-size: 1.375rem;
  }

  .option-button {
    padding: 0.875rem 1rem;
  }
}
</style>
