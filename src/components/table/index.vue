<template>
    <!-- <talbe class="cf-table">
        <tr v-for="item in data">{{ item }}</tr>
    </talbe> -->
    <el-table role="cf-table" v-bind="props" class="cf-table">
        {{ slots }}
    </el-table>
</template>
    
<script lang="ts">
import { ElTable, ElTableColumn } from 'element-plus';
import defaultProps from 'element-plus/es/components/table/src/table/defaults.mjs';
import 'element-plus/es/components/table/style/css';

const SFTableProps = () => defaultProps;

export default {
    name: 'CFTable',
    props: SFTableProps(),
    components: {
        ElTable,
        ElTableColumn
    },
    setup(props, { slots }) {
        const columns = Object.keys(props.data[0] || {});
        return {
            columns,
            slots,
            props: props
        };
    }
}

</script>