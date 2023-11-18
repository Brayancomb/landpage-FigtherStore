<template>
    <div class="main">
        <div class="item">
            <img src="../assets/icons/star_icon_full.png" alt="Star Icon" style="width: 100px;">
            <div class="titleGrid"><span class="redVevelt">QUALIDADE</span> SUPERIOR <br>E DURABILIDADE</div>
            <div class="pGrid">Quando você compra conosco está investindo em equipamentos que resistirão aos rigores dos treinos e competições mais intensos</div>
        </div>
        <div class="item sensei">
        </div>
        <div class="item">
            <img src="../assets/icons/heart_icon_full.png" alt="Star Icon" style="width: 100px;">
            <div class="titleGrid"><span class="redVevelt">PAIXÃO</span> PELO ESPORTE</div>
            <div class="pGrid">Quando você compra conosco está investindo em equipamentos que resistirão aos rigores dos treinos e competições mais intensos</div>
        </div>
        <div class="item woman">
        </div>
        <div class="item">
            <img src="../assets/icons/heart_icon_full.png" alt="Star Icon" style="width: 100px;">
            <div class="titleGrid"><span class="redVevelt">ASSISTÊNCIA</span> <br>ESPECIALIZADA AO CLIENTE</div>
            <div class="pGrid">Quando você compra conosco está investindo em equipamentos que resistirão aos rigores dos treinos e competições mais intensos</div>
        </div>
        <div class="item bros">
        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
.main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    position: relative;
}
.item{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.sensei{
    background: #ffffff url(../assets/images/master_dojo_full.png) center center/cover no-repeat;
}
.woman{
    background: #ffffff url(../assets/images/woman_figther_full.png) center center/cover no-repeat;
}
.bros{
    background: #ffffff url(../assets/images/two_guys_full.png) center center/cover no-repeat;
}
.titleGrid{
    font-weight: bold;
    font-size: 1.5rem;
}
.redVevelt{
    color: var(--text-color-red);
}
.pGrid{
    width: 60%;
}
</style>
