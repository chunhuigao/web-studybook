var shell = require('shelljs')
//判定git命令是否可用
if (!shell.which('git')) {
  //向命令行打印git命令不可用的提示信息
  shell.echo('Sorry, this script requires git')
  //退出当前进程
  shell.exit(1)
}

// shell.exec('git add index.js')
// shell.exec('git commit -m "使用nodejs自动执行git"')
function start() {
  var code = shell.exec('git pull').code
  if (code === 0) {
    shell.exit(1)
  } else {
    setTimeout(start, 1000)
  }
}
start()
