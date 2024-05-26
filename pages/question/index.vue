<template>
  <div>
    <AppContainer>
      <div class="flex justify-between items-center">
        <div class="flex text-white space-x-8 w-full mt-48">
          <div class="">
            <h3 class="text-2xl">{{ questionNumber }}.</h3>
          </div>

          <div class="w-full">

            <h1 class="text-2xl">{{ questions.results[questionNumber - 1].question_text }}</h1>

            <input type="text" required
              class="border-b-2 w-full bg-transparent text-2xl mt-4 placeholder-gray-300 placeholder-opacity-75 p-4 focus:outline-none"
              placeholder="Ketik jawabanmu disini..." v-model="answer">

            <div class="mt-8">
              <AppButton @click="next" v-if="questionNumber < 12">Lanjut</AppButton>
              <AppButton @click="finish" v-else>Selesai</AppButton>
            </div>
          </div>

        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script setup>
import { useMyQuestionStore } from '~/stores/question';

const questionStore = useMyQuestionStore()
const personalitiyStore = useMyPersonalityStore()

let { data: questions } = await useRest('api/questions/')
let questionNumber = ref(1)
let answer = ref('')
let answerData = ref({})

async function next() {
  if (questionNumber.value < 12) {
    await handleAnswer()
    questionNumber.value++
    answer.value = ''
  } else {
    console.log('Selesai')
  }
}

async function finish() {
  await handleFinish()
  console.log(personalitiyStore.personality)
  console.log(personalitiyStore.answerList)
  // console.log('Selesai')
}

async function handleFinish() {
  await handleAnswer()
  personalitiyStore.getPersonalitiyDetail()
  useRouter().push('/result/')
}

async function handleAnswer() {
  let questionCode = questions.value.results[questionNumber.value - 1].question_code
  let questionLevel = questions.value.results[questionNumber.value - 1].level
  
  let {data: predict} = await useRest('model/predict/', {
    method: 'POST',
    body: JSON.stringify({
      type: questionCode,
      answer: answer.value
    })
  })

  let answerData = {
    questionCode: questionCode,
    result: predict.value.result,
    level: questionLevel
  }

  personalitiyStore.addAnswer(answerData)
}

onMounted(async () => {
  // await questionStore.fetchQuestions()
  // questions.value = questionStore.questions
})
</script>

<style></style>