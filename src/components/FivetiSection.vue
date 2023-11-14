<template>
    <div class="main">
        <div class="leftSide">
            <div class="titleSection">KIT FIGTHER</div>
            <div class="pSection">Na Figther Store, estamos comprometidos em fornecer a você o melhor equipamento de combate para que você possa treinar e competir com confiança.</div>
            <div class="pSection">O Kit Figther é a escolha inteligente para quem busca proteção completa e desempenho de alto nível. Com esse kit, você está equipado com o que há de melhor para garantir sua segurança</div>
            <button>Solicite um Orçamento</button>
        </div>
        <div class="rigthSide">
            <img src="../assets/images/kit_figther_full.png" alt="Kit Figther">
        </div>
    </div>
</template>

<style scoped>
.main{
    width: 100vw;
    height: 100%;
    display: flex;
    margin: 30px 0
}
.leftSide{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.rigthSide{
    width: 50%;
}
.titleSection{
    font-size: 3rem;
    color: var(--text-color-red);
    font-weight: bold;
    width: 50%;
    text-align: left;
}
.pSection{
    width: 50%;
    margin: 10px;
    font-size: 1.2rem;
}
button{
    color: var(--text-color-red);
    width: 50%;
}
</style>