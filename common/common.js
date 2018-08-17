/**
 * 常用函数库
 * 
 */

/**
 * 计算字符总数，一个中文相当于2个字母或数字
 * 此函数作用：比如 发微博时只能只能发140个汉字
 * @param string str
 * @return int
 */
function getFontNum(str)
{
  var regx = "[\u4e00-\u9fa5]|[\uFE30-\uFFA0]";
  str = str.replace(new RegExp(regx, 'gm'), '11');
  
  return Math.ceil(str.length / 2);
}

