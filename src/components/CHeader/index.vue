<template>
    <div class="tingLee-header-container">
        <div class="tinfLee-header-left fl">
            TingLee
        </div>
        <div class="tingLee-header-ringht fr">
            <ul class="tingLee-header-link" id="tingLee-header-link">
                <li target="_blank" class="tingLee-header-link-product fl">首页</li>
                <li target="_blank" class="tingLee-header-link-product fl" @mouseenter="showCode">公众号</li>
                <li target="_blank" class="tingLee-header-link-product fl" @mouseenter="showCode">APP下载</li>
                <li target="_blank" class="tingLee-header-link-product fl">关于我们</li>
<!--                <li class="seeCode">-->
<!--                    <img src="https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png" alt="code">-->
<!--                </li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CHeader",
        methods:{
            showCode(e) {
                alert(e.target.innerText);
            }
        }
    }
</script>

<style scoped lang="less">
        .tingLee-header-container{
            width: 100%;
            height: 80px;
            background-color: #FFFFFF;
            color: #4D555D;
            box-shadow: 1px 1px 9px 1px #4D555D;
            .tinfLee-header-left{
                line-height: 80px;
                margin-left: 20px;
                font-size: 40px;
                color: #FFC800;
            }
            .tingLee-header-ringht{
                // line-height: 80px;
                margin-right: 20px;
                .tingLee-header-link{
                    line-height: 80px;
                    .tingLee-header-link-product{
                        margin: 0 20px;
                        cursor: pointer;
                    }
                    .seeCode{
                        width: 150px;
                        height: 150px;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
</style>
