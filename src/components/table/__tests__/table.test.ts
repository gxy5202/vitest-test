import { expect, test, it } from 'vitest'
import { mount } from "@vue/test-utils";
import * as Vue from 'vue';
import Table from '../index.vue';

it('should work as expected', async () => {
    const wrapper = mount(Table, {
        props: { data: [{ name: 'a', age: '1' }] },
        template: `<el-table-column prop="name" label="名称"></el-table-column>`
    });

    // 渲染结果与快照做对比
    Vue.nextTick(() => {
        expect(wrapper.html()).toMatchSnapshot();
    });
})