import Router from 'koa-router';
import axios from './utils/axios';
import Province from '../dbs/models/province';

let router = new Router({prefix: '/category'})

const sign = 'abcd';

router.get('/crumbs', async (ctx) => {
  let {status, data: {areas, types }} = await axios.get("http://cp-tools.cn/categroy/crumbs", {
    params: {
      city: ctx.query.city.replace('市','') || '背景',
      sign
    }
  });
  ctx.body = {
    areas: status === 200 ? areas : [],
    types: status === 200 ? types : []
  }
})

export default router;