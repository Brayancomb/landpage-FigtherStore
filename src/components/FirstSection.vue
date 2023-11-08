<template>
    <header>
    <img src="../../src/assets/logos/logo FS_ICON.png" alt="Fighter Store" class="logoIcon">
    <section class="sectionWelcome">
      <img src="../../src/assets/logos/logo FS_withe.png" alt="Fighter Store" class="logoFull">
      <p class="textInital">
        <strong>EQUIPAMENTO <br>DE COMBATE DE<br> ALTA QUALIDADE</strong>
      </p>
      <p class="textApresentation">Estamos comprometidos em <br>equipá-lo com os melhores<br> produtos, para que você possa<br> alcançar o seu potencial<br> máximo nos treinos </p>
      <button>Falar com Consultor</button>
    </section>
  </header>
</template>

<style scoped>
header{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../src/assets/images/Camada\ 1.png);
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}
.sectionWelcome{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logoIcon{
  width: 3rem;
  margin: 0 0 100px 0;
}
.logoFull{
  width: 20rem;
  margin: 100px 0 50px 0;
}
.textInital{
  color: var(--text-color-light);
  font-size: 3rem;
  text-align: center;
  margin: 10px 0 10px 0;
}
.textApresentation{
  color: var(--text-color-light);
  text-align: center;
  font-size: 1.5rem;
  margin: 30px 0 30px 0;
}
button{
  border: 1px solid var(--primary-red);
  border-radius: 10px;
  padding: 10px 30px;
  background: transparent;
  color: var(--text-color-light);
  font-size: 1.5rem;
  font-weight: bolder;
  width: 20rem;
  margin: 50px;
}
</style>