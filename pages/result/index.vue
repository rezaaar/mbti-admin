<template>
  <div>
    <AppContainer>
        <div class="w-full flex items-center justify-center text-white">
          <div class="space-y-5 text-center mt-48">
            <h1 class="text-2xl font-semibold">Fyuhh... Setelah menyelasaikan beberapa kuesioner, akhirnya selesai juga.
              Hasil rekomendasi kamu akan ditunjukkan di halaman selanjutnya.</h1>
            <h1 class="text-2xl">Catatan</h1>
            <h1 class="text-2xl">Hasil yang akan ditampilkan merupakan hasil dari proses analisa kami melalui
              kepribadian kamu untuk saat ini. Apabila jurusan yang kami rekomendasikan tidak sesuai dengan yang kamu
              inginkan, Kamu bisa mengikuti panduan kepribadian untuk menuju ke jurusan yang kamu inginkan</h1>

            <div>
              <AppButton @click="confirmResult">Lihat</AppButton>
            </div>
          </div>
        </div>
    </AppContainer>
  </div>
</template>

<script setup>
const usePeronalityStore = useMyPersonalityStore()
const personality = usePeronalityStore.personality.personality
function confirmResult() {
  useRouter().push('/result/'+personality)
}
</script>

<style></style>