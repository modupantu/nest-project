import { join } from "path";
import {PugAdapter} from "@nestjs-modules/mailer/dist/adapters/pug.adapter"

/*
* 邮件服务配置文件
* */
export default {
  transport:{
    host: "smtp.yeah.net",
    port: "465",
    auth: {
      user: "caoruichun@yeah.net",
      pass: "DHDNJARCROMLJAQN"
    }
  },
  defaults:{
    from:"'nest-modules'<caoruichun@yeah.net>",
  },
  template:{
    dir: join(__dirname,'../template/email'),
    adapter:new PugAdapter(),
    options:{
      strict:true
    }
  }
}
