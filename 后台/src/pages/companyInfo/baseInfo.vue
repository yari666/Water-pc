<!--基本信息-->
<template>
    <div class="baseInfo">
        <table cellspadding="0" cellspacing="0" border="0">
            <tr>
                <td class="title">业主类型</td>
                <td>企业</td>
                <td class="title">企业名称</td>
                <td>陕西金思铭生物科技有限公司</td>
            </tr>
            <tr>
                <td class="title">企业法人</td>
                <td>曹国权</td>
                <td class="title">注册资金</td>
                <td>28000万元人民币</td>
            </tr>
            <tr>
                <td class="title">所属区域</td>
                <td>陕西省/安康市/高新区</td>
                <td class="title">联系方式</td>
                <td>18550032151</td>
            </tr>
            <tr>
                <td class="title">营业执照</td>
                <td>
                    <img-box></img-box>
                </td>
                <td class="title">开通时间</td>
                <td>2020-01-01</td>
            </tr>
            <tr>
                <td class="title">业务范围</td>
                <td
                    colspan="3"
                >生物药品、化学药品、原料药的研发、生产及销售；医疗器械生产、销售；生物科技领域内的技术开发、技术服务；自营和代理商品及技术的进出口业务（国家限定公司经营或禁止进出口的商品及技术除外）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</td>
            </tr>
        </table>
    </div>
</template>

<script>
import imgBox from "~/components/imgBox";
export default {
    components: { imgBox },
};
</script>

<style lang="less" scoped>
table {
    margin-top: 20px;
    width: 100%;
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;

    td {
        border-bottom: 1px solid #ebeef5;
        border-right: 1px solid #ebeef5;
        padding: 10px;
        &.title {
            background: #fafafa;
            min-width: 100px;
        }
    }
}
</style>