<template>
<div class="main">
    <div class="titleSection">LUVA DE BOXE</div>
    <div class="containerCards">
        <div class="gloveItem">
            <div class="imgCard">
                <img src="../assets/images/boxe_gloves_1_full.png" alt="Boxe Glove" class="img">
            </div>
            <div class="titleItem">MX DA MAXIMUM</div>
            <p class="textItem">
                O grande diferencial da Luva de Boxe e Muay Thai Maximum MXM está na qualidade incomparável 
            </p>
        </div>
        <div class="gloveItem">
            <div class="imgCard">
                <img src="../assets/images/boxe_gloves_2_full.png" alt="Boxe Glove" class="img">
            </div>
            <div class="titleItem">NEW CHAMPIONS DA MKS</div>
            <p class="textItem">
                Possui hook and loop fastener, um elástico para apertar ou soltar as luvas com facilidade exclusivo das luvas MKS 
            </p>
        </div>
        <div class="gloveItem">
            <div class="imgCard">
                <img src="../assets/images/boxe_glove_3_full.png" alt="Boxe Glove" class="img">
            </div>
            <div class="titleItem">LUVAS PRETORIAN</div>
            <p class="textItem">
                As Luvas Pretorian First foram desenvolvidas para oferecer um ótimo conforto e durabilidade para os praticantes de Boxe e Muay Thai 
            </p>
        </div>
        <div class="gloveItem">
            <div class="imgCard">
                <img src="../assets/images/boxe_gloves_4_full.png" alt="Boxe Glove" class="img">
            </div>
            <div class="titleItem">MKS PROSPECT</div>
            <p class="textItem">
                O enchimento é de camadas de espuma adicionadas manualmente com total preocupação com o molde e proporção. 
            </p>
        </div>
    </div>
    <div class="figtherSection">
        <div class="textSide">
            <div class="titleHolder">Oferecemos uma ampla <span class="redText">variedade</span> de estilos e <span class="redText">tamanhos</span></div>
            <div class="subTitle">para que você possa encontrar as luvas perfeitas que se adaptem ao seu estilo de luta.</div>
            <button>Falar com Consultor</button>
        </div>
        <div class="imgSide">
            <img src="../assets/images/boxer_figther_full.png" alt="">
        </div>
    </div>
    <div class="shortSection">
        <div class="titleSection">SHORTS DE MUAY THAI</div>
        <div class="subTitle center">Se você é um lutador ágil que busca mobilidade máxima ou preferen shorts com designs elegantes e detalhes exclusivos, nossa loja tem a variedade que você procura</div>
        <div class="cardSection">
            <div class="cards">
                <div class="cardShort">
                    <img src="../assets/images/short_1_full.png" alt="shortMuayThai" class="img">
                </div>
                <div class="cardShort">
                    <img src="../assets/images/short_2_full.png" alt="shortMuayThai" class="img">
                </div>
                <div class="cardShort">
                    <img src="../assets/images/short_3_full.png" alt="shortMuayThai" class="img">
                </div>
                <div class="cardShort">
                    <img src="../assets/images/short_4_full.png" alt="shortMuayThai" class="img">
                </div>
            </div>
            <div class="figther">
                <img src="../assets/images/muay_thay_men_full.png" alt="Muay Thai Men">
            </div>
        </div>
        <button>Falar com Consultor</button>
    </div>
</div>
</template>

<style scoped>
.main{
    background-color: var(--secondary-black);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.titleSection{
    color: var(--text-color-red);
    font-weight: bolder;
    font-size: 3.5rem;
    text-align: center;
    padding: 50px;
}
.gloveItem{
    margin: 30px;
    width: 300px;
    height: 100%;
    text-align: center;
}
.imgCard{
    width: 100%;
    height: 300px;
    
}
.img{
    width: 300px;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
}
.containerCards{
    display: flex;
    gap: 20px;
    justify-content: center;
}
.titleItem{
    font-weight: bold;
    font-size: 1.3rem;
    margin: 10px;
    color: var(--text-color-red);
}
.textItem{
    color: var(--text-color-light);
}
.figtherSection{
    display: flex;
    justify-content: center;
}
.textSide{
    width: 30%;
}
.titleHolder{
    color: var(--text-color-light);
    font-size: 4rem;
    width: 70%;
    line-height: normal;
    font-weight: bold;
}
.subTitle{
    color: var(--text-color-light);
    width: 70%;
    font-size: 1.5rem;
}
.center{
    text-align: center;
}
.redText{
    color: var(--text-color-red);
}
.shortSection{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cardSection{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.cards{
    width: 0%;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}
.cardShort{
    width: 300px;
    height: 300px;
}
</style>