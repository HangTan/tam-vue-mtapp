<template>
  <el-table
    :data="
      cartData.filter(
        data =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 980px"
  >
    <el-table-column label="项目" prop="name" width="532"> </el-table-column>
    <el-table-column label="单价" prop="price" width="132"> </el-table-column>
    <el-table-column label="数量" width="212">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="0" />
      </template>
    </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="scope">
        <div>
          {{ scope.row.price * scope.row.count }}
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    cartData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
};
</script>
