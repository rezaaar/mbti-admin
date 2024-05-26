<template>
  <div>
    <AppContainer class="text-white">
      <div class="w-full flex items-center justify-center">
        <div class="space-y-5 text-center max-w-[700px] mt-48">
          <h1 class="text-2xl font-semibold">Hai, Kami berupaya untuk memberikan rekomendasi jurusan kuliah yang cocok
            dengan
            menganalisa kepribadianmu.</h1>
          <h1 class="text-2xl font-semibold">Oleh karena itu, mohon jawab seluruh pertanyaan yang akan kami berikan
            dengan jujur dan
            tanpa tekanan Ya !</h1>
          <h1 class="text-2xl font-semibold">Ini akan memakan waktu tidak lebih dari 5 menit</h1>

          <div>
            <NuxtLink to="/question">
              <AppButton>Siap!</AppButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>