<script setup lang="ts">
import { ref } from 'vue'

interface Scenario {
  id: string
  title: string
  icon: string
  description: string
  outcomes: {
    positive: string[]
    negative: string[]
  }
  recommendation: string
}

const scenarios: Scenario[] = [
  {
    id: 'unregulated',
    title: 'Ohne Regulierung',
    icon: '⚡',
    description: 'Schulen führen KI-Tools ohne klare Richtlinien ein. Jede Lehrkraft entscheidet selbst.',
    outcomes: {
      positive: [
        'Schnelle Innovation möglich',
        'Flexible Anpassung an Bedürfnisse',
        'Motivierte Lehrkräfte experimentieren',
      ],
      negative: [
        'Datenschutzverletzungen wahrscheinlich',
        'Ungleiche Chancen für Schüler',
        'Rechtliche Risiken für Schule',
        'Keine Qualitätskontrolle',
      ],
    },
    recommendation: 'Nicht empfohlen – Risiken überwiegen deutlich.',
  },
  {
    id: 'strict',
    title: 'Strenge Richtlinien',
    icon: '🔒',
    description: 'Umfassende Genehmigungsprozesse vor jeder KI-Nutzung. Zentrale Kontrolle.',
    outcomes: {
      positive: [
        'Maximaler Datenschutz',
        'Rechtssicherheit gewährleistet',
        'Einheitliche Standards',
      ],
      negative: [
        'Langsame Anpassung an Entwicklung',
        'Frustration bei Lehrkräften',
        'Innovationshemmend',
        'Inoffizielle Nutzung steigt',
      ],
    },
    recommendation: 'Bedingt empfohlen – Balance finden.',
  },
  {
    id: 'balanced',
    title: 'Ausgewogener Ansatz',
    icon: '⚖️',
    description: 'Klare Rahmenrichtlinien mit Spielraum für Fachbereiche. Geprüfte Tool-Liste.',
    outcomes: {
      positive: [
        'Rechtssicherheit UND Flexibilität',
        'Geprüfte Tools = weniger Risiko',
        'Lehrkräfte behalten Autonomie',
        'Kontinuierliche Evaluation',
      ],
      negative: [
        'Initialer Aufwand für Aufbau',
        'Regelmäßige Updates nötig',
        'Ressourcen für Koordination',
      ],
    },
    recommendation: 'Empfohlen – Best Practice Ansatz.',
  },
]

const selectedScenario = ref<string | null>(null)

const selectScenario = (id: string) => {
  selectedScenario.value = selectedScenario.value === id ? null : id
}

const getScenario = (id: string) => {
  return scenarios.find(s => s.id === id)
}
</script>

<template>
  <div class="scenario-selector">
    <div class="scenario-buttons">
      <button
        v-for="scenario in scenarios"
        :key="scenario.id"
        class="scenario-btn"
        :class="{ active: selectedScenario === scenario.id }"
        @click="selectScenario(scenario.id)"
      >
        <span class="scenario-icon">{{ scenario.icon }}</span>
        <span class="scenario-title">{{ scenario.title }}</span>
      </button>
    </div>

    <transition name="slide-fade">
      <div v-if="selectedScenario" class="scenario-detail">
        <div class="scenario-header">
          <span class="detail-icon">{{ getScenario(selectedScenario)?.icon }}</span>
          <div>
            <h3>{{ getScenario(selectedScenario)?.title }}</h3>
            <p class="scenario-desc">{{ getScenario(selectedScenario)?.description }}</p>
          </div>
        </div>

        <div class="outcomes-grid">
          <div class="outcome-column positive">
            <h4>✅ Vorteile</h4>
            <ul>
              <li v-for="(item, index) in getScenario(selectedScenario)?.outcomes.positive" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="outcome-column negative">
            <h4>⚠️ Risiken</h4>
            <ul>
              <li v-for="(item, index) in getScenario(selectedScenario)?.outcomes.negative" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="recommendation" :class="selectedScenario">
          <strong>Empfehlung:</strong> {{ getScenario(selectedScenario)?.recommendation }}
        </div>
      </div>
    </transition>

    <p v-if="!selectedScenario" class="hint">
      👆 Klicken Sie auf ein Szenario, um die Details zu sehen
    </p>
  </div>
</template>

<style scoped>
.scenario-selector {
  padding: 1rem;
}

.scenario-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.scenario-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
}

.scenario-btn:hover {
  border-color: #6366f1;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.scenario-btn.active {
  border-color: #6366f1;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
}

.scenario-icon {
  font-size: 2rem;
}

.scenario-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1f2937;
}

.scenario-detail {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}

.scenario-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.detail-icon {
  font-size: 2.5rem;
}

.scenario-header h3 {
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;
  color: #1f2937;
}

.scenario-desc {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

.outcomes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.outcome-column {
  padding: 1rem;
  border-radius: 0.75rem;
}

.outcome-column.positive {
  background: linear-gradient(135deg, #dcfce7, #d1fae5);
}

.outcome-column.negative {
  background: linear-gradient(135deg, #fef3c7, #fef9c3);
}

.outcome-column h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: #1f2937;
}

.outcome-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.outcome-column ul li {
  padding: 0.375rem 0;
  padding-left: 1rem;
  position: relative;
  font-size: 0.85rem;
  color: #374151;
}

.outcome-column.positive ul li::before {
  content: "+";
  position: absolute;
  left: 0;
  color: #16a34a;
  font-weight: 700;
}

.outcome-column.negative ul li::before {
  content: "−";
  position: absolute;
  left: 0;
  color: #d97706;
  font-weight: 700;
}

.recommendation {
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.9rem;
}

.recommendation.unregulated {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  color: #991b1b;
}

.recommendation.strict {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #92400e;
}

.recommendation.balanced {
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  color: #166534;
}

.hint {
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Transition */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
