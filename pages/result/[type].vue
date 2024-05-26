<template>
  <div>
    <AppContainer>
      <div class="w-full flex items-center justify-center text-white">
        <div class="space-y-20 text-center mt-20">
          <div>
            <h1 class="text-2xl font-semibold">Hasil analisa rekomendasi jurusan yang cocok untukmu</h1>
            <div class="flex items-center justify-center w-full">
              <div class="border border-b-2 w-[500px] border-[#E7C8FA] mt-3"></div>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <h1 class="text-7xl py-14 px-32 font-bold bg-gray-300 bg-opacity-55 rounded-xl">{{
              personalityData.type.toUpperCase() }}</h1>
          </div>

          <div class="text-2xl ">
            <p>{{ personalityData.description }}</p>
          </div>

          <div class="space-y-8">

            <!-- {{ data.EData.E_total_0 }} -->

            <div class="space-y-2">
              <div class="flex justify-between">
                <div class="mb-1 text-base font-medium dark:text-white">Extrovert</div>
                <div class="mb-1 text-base font-medium dark:text-white">Introvert</div>
              </div>

              <div class="w-full rounded-full h-8 mb-4 flex"
                :class="data.EData.E_total_0 > data.EData.E_total_1 ? 'bg-[#D9D9D9]' : 'bg-[#ED9393]'">
                <div class="h-8 flex items-center justify-center"
                  :class="[data.EData.E_total_0 > data.EData.E_total_1 ? 'bg-[#ED9393]' : ' bg-[#D9D9D9]', data.EData.E_total_0 == 100 ? 'rounded-full' : 'rounded-l-full']"
                  :style="{ width: data.EData.E_total_0 + '%' }">
                  <h3>{{ data.EData.E_total_0 + '%' }}</h3>
                </div>
                <div class="h-8 rounded-full flex items-center justify-center"
                  :style="{ width: data.EData.E_total_1 + '%' }">
                  <h3 v-if="data.EData.E_total_1 != 0">{{ data.EData.E_total_1 + '%' }}</h3>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex justify-between">
                <div class="mb-1 text-base font-medium dark:text-white">Intuition</div>
                <div class="mb-1 text-base font-medium dark:text-white">Sensing</div>
              </div>

              <div class="w-full rounded-full h-8 mb-4 flex"
                :class="data.TData.T_total_0 > data.TData.T_total_1 ? 'bg-[#D9D9D9]' : 'bg-[#ED9393]'">
                <div class="h-8 flex items-center justify-center"
                  :class="[data.TData.T_total_0 > data.TData.T_total_1 ? 'bg-[#ED9393]' : ' bg-[#D9D9D9]', data.TData.T_total_0 == 100 ? 'rounded-full' : 'rounded-l-full']"
                  :style="{ width: data.TData.T_total_0 + '%' }">
                  <h3>{{ data.TData.T_total_0 + '%' }}</h3>
                </div>
                <div class="h-8 rounded-full flex items-center justify-center"
                  :style="{ width: data.TData.T_total_1 + '%' }">
                  <h3 v-if="data.TData.T_total_1 != 0">{{ data.TData.T_total_1 + '%' }}</h3>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex justify-between">
                <div class="mb-1 text-base font-medium dark:text-white">Feeling</div>
                <div class="mb-1 text-base font-medium dark:text-white">Thinking</div>
              </div>

              <div class="w-full rounded-full h-8 mb-4 flex"
                :class="data.JData.J_total_0 > data.JData.J_total_1 ? 'bg-[#D9D9D9]' : 'bg-[#ED9393]'">
                <div class="h-8 flex items-center justify-center"
                  :class="[data.JData.J_total_0 > data.JData.J_total_1 ? 'bg-[#ED9393]' : ' bg-[#D9D9D9]', data.JData.J_total_0 == 100 ? 'rounded-full' : 'rounded-l-full']"
                  :style="{ width: data.JData.J_total_0 + '%' }">
                  <h3>{{ data.JData.J_total_0 + '%' }}</h3>
                </div>
                <div class="h-8 rounded-full flex items-center justify-center"
                  :style="{ width: data.JData.J_total_1 + '%' }">
                  <h3 v-if="data.JData.J_total_1 != 0">{{ data.JData.J_total_1 + '%' }}</h3>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex justify-between">
                <div class="mb-1 text-base font-medium dark:text-white">Perceiving</div>
                <div class="mb-1 text-base font-medium dark:text-white">Judging</div>
              </div>

              <div class="w-full rounded-full h-8 mb-4 flex"
                :class="data.PData.P_total_0 > data.PData.P_total_1 ? 'bg-[#D9D9D9]' : 'bg-[#ED9393]'">
                <div class="h-8 flex items-center justify-center"
                  :class="[data.PData.P_total_0 > data.PData.P_total_1 ? 'bg-[#ED9393]' : ' bg-[#D9D9D9]', data.PData.P_total_0 == 100 ? 'rounded-full' : 'rounded-l-full']"
                  :style="{ width: data.PData.P_total_0 + '%' }">
                  <h3>{{ data.PData.P_total_0 + '%' }}</h3>
                </div>
                <div class="h-8 rounded-full flex items-center justify-center"
                  :style="{ width: data.PData.P_total_1 + '%' }">
                  <h3 v-if="data.PData.P_total_1 != 0">{{ data.PData.P_total_1 + '%' }}</h3>
                </div>
              </div>
            </div>

            

           



          </div>

          <div class="text-2xl space-y-2">
            <h1 class="font-semibold">Rekomendasi Jurusan :</h1>
            <h1>
              {{ personalityData.majors }}
            </h1>
          </div>
          <div>
            <AppButton @click="downloadResult()">Unduh</AppButton>
          </div>

        </div>
      </div>
    </AppContainer>
  </div>
</template>


<script setup>
const route = useRoute()
const personality = ref(route.params.type)
const personalityStore = useMyPersonalityStore()
const data = personalityStore.personality

console.log(data)

// const data = ref({
//   personality: 'enfj',
//   EData: { E_total_0: 60, E_total_1: 40, EResult: 'E' },
//   PData: { P_total_0: 60, P_total_1: 40, PResult: 'N' },
//   JData: { J_total_0: 80, J_total_1: 20, JResult: 'F' },
//   TData: { T_total_0: 65, T_total_1: 35, TResult: 'J' }
// })

const { data: personalityData } = await useRest('api/personality/' + personality.value)




</script>

<style></style>