<template>
    <div class="main">
        <div class="containTexts">
            <div class="titleSection">KIMONOS DE <br>EXCELÊNCIA</div>
            <div class="pSection">Investir em nosso kimono é investir em seu progresso e sucesso no tatame. Domine a arte com confiança,conforto e estilo.</div>
            <div class="pSection">Venha à Figther Store e descubra o kimono que elevará suas habilidades e tornará cada treino uma experiência extraordinária.</div>
            <button >Falar com Consultor</button>
        </div>
        <img src="../assets/images/judo_guys_full.png" alt="Judo Fight" class="imgCover"

        >
    </div>
</template>


<script setup>

</script>

<style scoped>

.main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
}
.imgCover{
    position: relative;
    width: 200vw;
}
.containTexts{
    position: absolute;
    z-index: 1;
    margin-top: 50px;
    left: 150px;
}
.pSection{
  width: 50%;
  margin: 10px 0 10px 0;
  font-size: 1.3rem;
}

@media (max-width: 1000px) {
  .containTexts {
    margin-top: 16px;
    left: 64px;
  }
  .pSection{
    width: 50%;
    margin: 10px 0 10px 0;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .containTexts {
    margin-top: 0;
    left: 16px;
  }
  .pSection{
    width: 50%;
    margin: 10px 0 10px 0;
    font-size: 1rem;
  }
}

.titleSection{
    color: var(--text-color-red);
    font-weight: bold;
    font-size: 3rem;
}

button{
    color: var(--text-color-red);
}

</style>
