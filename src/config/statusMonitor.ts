export default {
  pageTitle:"项目健康检查监控",
  port:3000,
  path:'/status',
  ignoreStartsWith:"/healt/alive", //健康检查
  spans:[
    {interval:1,retention:60},
    {interval:5,retention:60},
    {interval:15,retention:60}
  ],
  chartVisibility:{
    cpu:true,
    mem:true,
    load:true,
    responseTime:true,
    rps:true,
    statusCodes:true
  },
  healthChecks:[]
}
