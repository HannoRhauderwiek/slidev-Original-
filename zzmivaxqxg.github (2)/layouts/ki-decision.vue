<!--
  KI-Schulung Layout: Fallunterscheidung-Folie
  =============================================
  Zentrale Frage mit verschiedenen Szenarien/Branches

  Verwendung:
  ---
  layout: ki-decision
  title: Wann KI einsetzen?
  question: Ist die Aufgabe repetitiv?
  ---

  ::branch-yes::
  ### Ja → KI empfohlen
  Automatisierung spart Zeit

  ::branch-no::
  ### Nein → Manuell prüfen
  Kreative Aufgaben brauchen Menschen

  ::branch-maybe::
  ### Vielleicht → Hybrid
  Kombination aus beidem
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Entscheidungsbaum' },
  question: { type: String, default: 'Welcher Weg ist der richtige?' },
  layout: { type: String, default: 'horizontal' }, // horizontal, vertical, radial
  animated: { type: Boolean, default: true },
})

const isLoaded = ref(false)
const activeBranch = ref<string | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})

const toggleBranch = (branch: string) => {
  activeBranch.value = activeBranch.value === branch ? null : branch
}
</script>

<template>
  <div class="ki-decision-layout" :class="[{ loaded: isLoaded }, `layout-${layout}`]">
    <!-- Header -->
    <header class="header">
      <h1 class="title">{{ title }}</h1>
    </header>

    <!-- Decision Tree -->
    <div class="decision-tree">
      <!-- Central Question -->
      <div class="question-node">
        <div class="question-box">
          <span class="question-icon">❓</span>
          <p class="question-text">{{ question }}</p>
        </div>

        <!-- Connecting Lines -->
        <div class="connectors">
          <svg class="connector-lines" viewBox="0 0 600 60" preserveAspectRatio="none">
            <path
              class="connector-path connector-yes"
              d="M300,0 L100,60"
              fill="none"
              stroke="#34C759"
              stroke-width="2"
            />
            <path
              class="connector-path connector-no"
              d="M300,0 L500,60"
              fill="none"
              stroke="#FF3B30"
              stroke-width="2"
            />
            <path
              v-if="$slots['branch-maybe']"
              class="connector-path connector-maybe"
              d="M300,0 L300,60"
              fill="none"
              stroke="#FF9500"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>

      <!-- Branches -->
      <div class="branches" :class="{ 'three-way': $slots['branch-maybe'] }">
        <!-- Yes Branch -->
        <div
          class="branch branch-yes"
          :class="{ active: activeBranch === 'yes', expanded: activeBranch === 'yes' }"
          @click="animated ? toggleBranch('yes') : null"
        >
          <div class="branch-header">
            <span class="branch-icon">✓</span>
            <span class="branch-label">Ja</span>
          </div>
          <div class="branch-content">
            <slot name="branch-yes" />
          </div>
        </div>

        <!-- Maybe Branch (optional) -->
        <div
          v-if="$slots['branch-maybe']"
          class="branch branch-maybe"
          :class="{ active: activeBranch === 'maybe', expanded: activeBranch === 'maybe' }"
          @click="animated ? toggleBranch('maybe') : null"
        >
          <div class="branch-header">
            <span class="branch-icon">◐</span>
            <span class="branch-label">Vielleicht</span>
          </div>
          <div class="branch-content">
            <slot name="branch-maybe" />
          </div>
        </div>

        <!-- No Branch -->
        <div
          class="branch branch-no"
          :class="{ active: activeBranch === 'no', expanded: activeBranch === 'no' }"
          @click="animated ? toggleBranch('no') : null"
        >
          <div class="branch-header">
            <span class="branch-icon">✗</span>
            <span class="branch-label">Nein</span>
          </div>
          <div class="branch-content">
            <slot name="branch-no" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer slot -->
    <div class="footer-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ki-decision-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 3rem;
  background: var(--color-background, #FAFAFA);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.ki-decision-layout.loaded {
  opacity: 1;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.title {
  font-family: "Inter", "SF Pro Display", -apple-system, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0;
}

/* Decision Tree */
.decision-tree {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Question Node */
.question-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.question-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #0071E3, #AF52DE);
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0, 113, 227, 0.3);
  opacity: 0;
  transform: scale(0.9);
  animation: questionIn 0.5s ease-out 0.1s forwards;
}

@keyframes questionIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.question-icon {
  font-size: 1.75rem;
}

.question-text {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

/* Connectors */
.connectors {
  width: 100%;
  max-width: 600px;
  height: 60px;
}

.connector-lines {
  width: 100%;
  height: 100%;
}

.connector-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 0.6s ease-out 0.4s forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Branches */
.branches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
}

.branches.three-way {
  grid-template-columns: repeat(3, 1fr);
}

.branch {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.25s ease-out;
  opacity: 0;
  transform: translateY(20px);
  animation: branchIn 0.4s ease-out forwards;
}

.branch-yes { animation-delay: 0.5s; border-top: 4px solid #34C759; }
.branch-no { animation-delay: 0.6s; border-top: 4px solid #FF3B30; }
.branch-maybe { animation-delay: 0.55s; border-top: 4px solid #FF9500; }

@keyframes branchIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.branch:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.branch.active {
  box-shadow: 0 8px 30px rgba(0, 113, 227, 0.2);
}

/* Branch Header */
.branch-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #E8E8ED;
}

.branch-icon {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
}

.branch-yes .branch-icon {
  background: rgba(52, 199, 89, 0.15);
  color: #34C759;
}

.branch-no .branch-icon {
  background: rgba(255, 59, 48, 0.15);
  color: #FF3B30;
}

.branch-maybe .branch-icon {
  background: rgba(255, 149, 0, 0.15);
  color: #FF9500;
}

.branch-label {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text-primary, #1D1D1F);
}

/* Branch Content */
.branch-content {
  padding: 1rem 1.25rem;
  max-height: 200px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.branch:not(.expanded) .branch-content {
  max-height: 100px;
}

.branch.expanded .branch-content {
  max-height: 400px;
}

.branch-content :deep(h3) {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary, #1D1D1F);
  margin: 0 0 0.5rem 0;
}

.branch-content :deep(p) {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-secondary, #6E6E73);
  margin: 0;
}

.branch-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

.branch-content :deep(ul li) {
  padding: 0.25rem 0;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #6E6E73);
}

.branch-content :deep(ul li)::before {
  content: "→";
  position: absolute;
  left: 0;
  color: inherit;
  opacity: 0.6;
}

/* Footer Slot */
.footer-slot {
  margin-top: 1rem;
  text-align: center;
}

.footer-slot:empty {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .branches {
    grid-template-columns: 1fr;
  }

  .branches.three-way {
    grid-template-columns: 1fr;
  }

  .connectors {
    display: none;
  }
}
</style>
