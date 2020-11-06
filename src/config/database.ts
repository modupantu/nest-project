import {join} from 'path';
export default {
  type:'mysql',

  database:"test",
  entities:[join( __dirname,'../','**/**.entity{.ts,.js}')], // 与数据库表的映射
  synchronize:true,//同步锁打开
}
