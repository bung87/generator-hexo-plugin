
'use strict';
const handler = function(args, content){ }; 

hexo.extend.tag.register('<%= pluginName %>', handler,{
  async: true,
  ends: false
});