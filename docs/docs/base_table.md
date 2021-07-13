# Table 表格
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<script>
export default{
  data() {
    return {
      tableData: [
        { id: '001', name: '李斯1', age: 18, gender: 'male' },
        { id: '002', name: '李斯2', age: 18, gender: 'male' },
        { id: '003', name: '李斯3', age: 18, gender: 'femal' },
        { id: '004', name: '李斯4', age: 18, gender: 'male' },
      ],
      tableColumn: [
        {
          title: '用户姓名',
          key: 'name',
          width: 120,
        },
        {
          key: 'age',
          title: '年龄',
          width: 120
        },
        {
          key: 'gender',
          title: '性别',
          width: 120
        }
      ],
      paginationConfig: {
        currentPage: 1,
        currentSize: 10,
        pageSizes: [ 10, 20, 30, 40, 50 ],
        total: 0,
        layout: 'total, sizes, prev, pager, next, jumper',
      },
    }
  },
  methods: {
    handleTableActions(query) {
      console.log('操作：', query)
      if(query.key === 'handlePageChange'){
        // this.paginationConfig.currentPage = query.page
        // this.getList();
      } else if(query.key === 'handleSizeChange'){
        // this.paginationConfig.currentSize = query.size
        // this.getList();
      }
    },
  }
}
</script>
<div class="demo-block">
  <BaseTable
    :table-data="tableData"
    :table-columns="tableColumn"
    :is-selectable="true"
    :pagination-config="paginationConfig"
    :actions="handleTableActions"
  />
</div>