export default {
  // 数据库连接地址
  MONGO_URL: 'mongodb://192.168.56.1/community',
  // redis连接地址
  REDIS_URL: 'redis://:123456@192.168.56.1:15001',
  // jwt秘钥
  JWT_SECRET: 'QWEFJIOJCV189CIOEWF1FSDFJIOWFV456RFGJIOQWD54VCVBJIUESFJIO',
  // 文件上传路径地址
  UPLOAD_PATH: 'public',
  // 前端访问地址
  FRONT_URL: process.env.NODE_ENV === 'production' ? 'http://192.168.56.1:11006/#/reset' : 'http://192.168.0.105:8080/#/reset',
  // 邮件服务账号密码配置
  NODE_MAIL_USER: '404133428@qq.com',
  NODE_MAIL_PASS: '',
  // websocket端口
  WS_PORT: 3001,
  // 超级管理员列表
  ADMIN_LIST: ['404133428@qq.com'],
  // 前端公共接口，不需要token的
  PUBLIC_PATH: [/^\/public/, /^\/login/],
  // 后台数据权限白名单
  AUTH_WHILE_lIST: [/^\/public/, /^\/login/, /^\/admin\/postDetails+/, /^\/admin\/getUserInfo/, /^\/role\/getMenuRouter/, /^\/role\/getRoleName/, /^\/home\/getStatistics/]
}
