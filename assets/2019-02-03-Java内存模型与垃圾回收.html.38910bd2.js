import{_ as t,a as o,o as p,c as n,f as l,b as i,F as s,x as a,d as r}from"./app.3547d211.js";const c={},u=a('<h2 id="\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> \u5185\u5B58\u6A21\u578B</h2><p>Java\u865A\u62DF\u673A\u5728\u6267\u884CJava\u7A0B\u5E8F\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u628A\u5B83\u6240\u7BA1\u7406\u7684\u5185\u5B58\u5212\u5206\u4E3A\u82E5\u5E72\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u533A\u57DF\uFF0C\u53EF\u4EE5\u5206\u4E3A\u4E24\u79CD\u7C7B\u578B\uFF1A\u7EBF\u7A0B\u5171\u4EAB\u7684\u65B9\u6CD5\u533A\u3001\u5806\uFF0C\u7EBF\u7A0B\u79C1\u6709\u7684\u865A\u62DF\u673A\u6808\u3001\u672C\u5730\u65B9\u6CD5\u6808\u548C\u7A0B\u5E8F\u8BA1\u6570\u5668\u3002</p><p>1\u3001 \u7EBF\u7A0B\u79C1\u6709\u7684\u6570\u636E\u533A\uFF1A \u7A0B\u5E8F\u8BA1\u6570\u5668\u3001\u865A\u62DF\u673A\u6808\u3001\u672C\u5730\u65B9\u6CD5\u6808</p><p>1\uFF09 \u7A0B\u5E8F\u8BA1\u6570\u5668<br> \u4E3A\u4E86\u7EBF\u7A0B\u5207\u6362\u540E\u80FD\u591F\u6062\u590D\u5230\u6B63\u786E\u7684\u6267\u884C\u4F4D\u7F6E\uFF0C\u6BCF\u6761\u7EBF\u7A0B\u90FD\u9700\u8981\u4E00\u4E2A\u72EC\u7ACB\u7684\u7A0B\u5E8F\u8BA1\u6570\u5668\u53BB\u8BB0\u5F55\u5176\u6B63\u5728\u6267\u884C\u7684\u5B57\u8282\u7801\u5730\u5740\u3002</p><p>2\uFF09\u865A\u62DF\u673A\u6808\u63CF\u8FF0\u7684\u662FJava\u65B9\u6CD5\u6267\u884C\u7684\u5185\u5B58\u6A21\u578B\uFF0C\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\u3002<br> \u865A\u62DF\u673A\u6808\u6709\u4E24\u79CD\u5F02\u5E38\u60C5\u51B5\uFF1AStackOverflowError \u548C OutOfMemoryError\u3002\u6211\u4EEC\u77E5\u9053\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u62E5\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u6808\uFF0C\u8FD9\u4E2A\u6808\u7684\u5927\u5C0F\u51B3\u5B9A\u4E86\u65B9\u6CD5\u8C03\u7528\u7684\u53EF\u8FBE\u6DF1\u5EA6\uFF08\u9012\u5F52\u591A\u5C11\u5C42\u6B21\uFF0C\u6216\u5D4C\u5957\u8C03\u7528\u591A\u5C11\u5C42\u5176\u4ED6\u65B9\u6CD5\uFF0C-Xss \u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u865A\u62DF\u673A\u6808\u5927\u5C0F\uFF09\uFF0C\u82E5\u7EBF\u7A0B\u8BF7\u6C42\u7684\u6808\u6DF1\u5EA6\u5927\u4E8E\u865A\u62DF\u673A\u5141\u8BB8\u7684\u6DF1\u5EA6\uFF0C\u5219\u629B\u51FA StackOverFlowError \u5F02\u5E38\u3002</p><p>3\uFF09\u672C\u5730\u65B9\u6CD5\u6808<br> \u548CJava\u865A\u62DF\u673A\u6808\u76F8\u4F3C\uFF0C\u533A\u522B\u5728\u4E8E\u865A\u62DF\u673A\u6808\u6267\u884CJava\u65B9\u6CD5\u670D\u52A1\uFF0C\u800C\u672C\u5730\u65B9\u6CD5\u4E3A\u865A\u62DF\u673A\u6267\u884CNative\u65B9\u6CD5\u670D\u52A1\u3002\u4E0E\u865A\u62DF\u673A\u6808\u4E00\u6837\uFF0C\u672C\u5730\u65B9\u6CD5\u6808\u533A\u57DF\u4E5F\u4F1A\u629B\u51FA StackOverflowError \u548C OutOfMemoryError \u5F02\u5E38\u3002</p><p>2\u3001 \u7EBF\u7A0B\u5171\u4EAB\u7684\u6570\u636E\u533A<br> Java\u5806\u3001\u65B9\u6CD5\u533A</p><p>1\uFF09Java\u5806\u552F\u4E00\u76EE\u7684\u5C31\u662F\u5B58\u653E\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u51E0\u4E4E\u5BF9\u8C61\u5B9E\u4F8B\uFF08\u548C\u6570\u7EC4\uFF09\u90FD\u5728\u8FD9\u91CC\u5206\u914D\u5185\u5B58\uFF0C\u8FD9\u4E9B\u5BF9\u8C61\u901A\u8FC7new\u3001newarray\u7B49\u6307\u4EE4\u5EFA\u7ACB\uFF0C\u4E0D\u9700\u8981\u7A0B\u5E8F\u4EE3\u7801\u6765\u663E\u5F0F\u7684\u91CA\u653E\u3002</p><p>2\uFF09\u65B9\u6CD5\u533A<br> \u65B9\u6CD5\u533A\u4E0EJava\u5806\u4E00\u6837\uFF0C\u4E5F\u662F\u7EBF\u7A0B\u5171\u4EAB\u7684\u5E76\u4E14\u4E0D\u9700\u8981\u8FDE\u7EED\u7684\u5185\u5B58\uFF0C\u5176\u7528\u4E8E\u5B58\u50A8\u5DF2\u88AB\u865A\u62DF\u673A\u52A0\u8F7D\u7684 \u7C7B\u4FE1\u606F\u3001\u5E38\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5373\u65F6\u7F16\u8BD1\u5668\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u7B49\u6570\u636E\u3002</p>',9),h={href:"https://blog.csdn.net/justloveyou_/article/details/71189093",target:"_blank",rel:"noopener noreferrer"},d=r("\u8D85\u7EA7\u63A8\u8350\u9605\u8BFB"),_=a('<h2 id="\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536\u673A\u5236</h2><p>Java\u6240\u8C13\u7684\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u6700\u7EC8\u53EF\u4EE5\u5F52\u7ED3\u4E3A\u81EA\u52A8\u5316\u5730\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898\uFF1A\u7ED9\u5BF9\u8C61\u5206\u914D\u5185\u5B58\u548C\u56DE\u6536\u5206\u914D\u7ED9\u5BF9\u8C61\u7684\u5185\u5B58\u3002</p><p>\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u88AB\u56DE\u6536\u7684\u4E24\u79CD\u7ECF\u5178\u7B97\u6CD5<br> \u56DB\u79CD\u5178\u578B\u7684\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u548C\u76F4\u63A5\u5E94\u7528----\u5783\u573E\u6536\u96C6\u5668</p><h3 id="\u6838\u5FC3\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u95EE\u9898" aria-hidden="true">#</a> \u6838\u5FC3\u95EE\u9898\uFF1A</h3><p>\u54EA\u4E9B\u5185\u5B58\u9700\u8981\u56DE\u6536\uFF1F\uFF08\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u88AB\u56DE\u6536\u7684\u4E24\u79CD\u7ECF\u5178\u7B97\u6CD5\uFF09</p><ul><li>\u5F15\u7528\u8BA1\u6570\u6CD5</li><li>\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5</li></ul><p>\u4EC0\u4E48\u65F6\u95F4\u56DE\u6536\uFF1F</p><ul><li>\u5806\u7684\u65B0\u751F\u4EE3\u3001\u8001\u5E74\u4EE3\u3001\u6C38\u4E45\u4EE3\u7684\u5783\u573E\u56DE\u6536\u65F6\u673A</li><li>MinorGC\u3001FullGC</li></ul><p>\u5982\u4F55\u56DE\u6536\uFF1F</p><ul><li>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5</li><li>\u590D\u5236\u7B97\u6CD5</li><li>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5</li></ul><p>\u5206\u4EE3\u6574\u7406\u7B97\u6CD5\u548C\u4E03\u79CD\u5783\u573E\u6536\u96C6\u5668</p>',11),f={href:"https://blog.csdn.net/justloveyou_/article/details/71216049",target:"_blank",rel:"noopener noreferrer"},v=r("\u975E\u5E38\u63A8\u8350\u9605\u8BFB"),b=a('<h2 id="\u5982\u4F55\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u88AB\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u88AB\u56DE\u6536" aria-hidden="true">#</a> \u5982\u4F55\u786E\u5B9A\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u4EE5\u88AB\u56DE\u6536\uFF1F</h2><ul><li><p>1\u3001\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\uFF1A\u5224\u65AD\u5BF9\u8C61\u7684\u5F15\u7528\u6570\u91CF</p><ul><li><p>\u8FD9\u79CD\u7B97\u6CD5\u662F\u5783\u573E\u6536\u96C6\u5668\u65E9\u671F\u7B56\u7565\u3002\u5728\u8FD9\u79CD\u65B9\u6CD5\u4E2D\uFF0C\u5806\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\u90FD\u6709\u4E00\u4E2A\u5F15\u7528\u8BA1\u6570\u3002</p></li><li><p>\u4EFB\u4F55\u5F15\u7528\u8BA1\u6570\u4E3A0\u7684\u5BF9\u8C61\u5B9E\u4F8B\u53EF\u4EE5\u88AB\u5F53\u4F5C\u5783\u573E\u6536\u96C6\u3002</p></li><li><p>\u95EE\u9898\uFF1A</p><ul><li>\u5F88\u96BE\u89E3\u51B3\u5BF9\u8C61\u95F4\u76F8\u4E92\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\u3002</li></ul></li></ul></li><li><p>2\u3001\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5\uFF1A\u5224\u65AD\u5BF9\u8C61\u7684\u5F15\u7528\u94FE\u662F\u5426\u53EF\u8FBE</p><ul><li><p>\u4ECE\u79BB\u6563\u6570\u5B66\u4E2D\u7684\u56FE\u8BBA\u5F15\u5165\uFF0C\u7A0B\u5E8F\u628A\u6240\u6709\u7684\u5F15\u7528\u5173\u7CFB\u770B\u4F5C\u4E00\u5F20\u56FE\uFF0C\u901A\u8FC7\u4E00\u7CFB\u5217\u7684\u540D\u4E3A\u201CGC Roots\u201D\u7684\u5BF9\u8C61\u4F5C\u4E3A\u8D77\u70B9\uFF0C\u4ECE\u8FD9\u4E9B\u8282\u70B9\u5F00\u59CB\u5411\u4E0B\u641C\u7D22\uFF0C\u641C\u7D22\u6240\u8D70\u8FC7\u7684\u8DEF\u5F84\u79F0\u4E3A\u5F15\u7528\u94FE\uFF08Reference Chain\uFF09\u3002\u5F53\u4E00\u4E2A\u5BF9\u8C61\u5230 GC Roots \u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u94FE\u76F8\u8FDE\uFF08\u7528\u56FE\u8BBA\u7684\u8BDD\u6765\u8BF4\u5C31\u662F\u4ECE GC Roots \u5230\u8FD9\u4E2A\u5BF9\u8C61\u4E0D\u53EF\u8FBE\uFF09\u65F6\uFF0C\u5219\u8BC1\u660E\u6B64\u5BF9\u8C61\u662F\u4E0D\u53EF\u7528\u7684\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002\u5728Java\u4E2D\uFF0C\u53EF\u4F5C\u4E3A GC Root \u7684\u5BF9\u8C61\u5305\u62EC\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p></li><li><p>\u865A\u62DF\u673A\u6808\uFF08\u6808\u5E27\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u8868\uFF09\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61\uFF1B</p></li><li><p>\u65B9\u6CD5\u533A\u4E2D\u7C7B\u9759\u6001\u5C5E\u6027\u5F15\u7528\u7684\u5BF9\u8C61\uFF1B</p></li><li><p>\u65B9\u6CD5\u533A\u4E2D\u5E38\u91CF\u5F15\u7528\u7684\u5BF9\u8C61\uFF1B</p></li><li><p>\u672C\u5730\u65B9\u6CD5\u6808\u4E2DNative\u65B9\u6CD5\u5F15\u7528\u7684\u5BF9\u8C61\uFF1B</p></li></ul></li></ul><p><img src="http://static.zybuluo.com/Rico123/q0t6nxkafapyn6yql7benc32/\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5\u793A\u610F\u56FE.jpg" alt="\u53EF\u8FBE\u6027\u5206\u6790"></p><h2 id="\u5783\u573E\u6536\u96C6\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u6536\u96C6\u7B97\u6CD5" aria-hidden="true">#</a> \u5783\u573E\u6536\u96C6\u7B97\u6CD5</h2><ul><li><p>1\u3001\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5 \u8BE5\u7B97\u6CD5\u9996\u5148\u4ECE\u8DDF\u96C6\u5408\u8FDB\u884C\u626B\u63CF\uFF0C\u5BF9\u5B58\u6D3B\u7684\u5BF9\u8C61\u6807\u8BB0\u3002\u6807\u8BB0\u5B8C\u6BD5\u540E\uFF0C\u518D\u626B\u63CF\u6574\u4E2A\u7A7A\u95F4\u4E2D\u672A\u88AB\u6807\u8BB0\u7684\u5BF9\u8C61\u8FDB\u884C\u56DE\u6536\u3002</p><ul><li><p>\u6807\u8BB0</p></li><li><p>\u6E05\u9664</p></li><li><p>\u4E0D\u8DB3\uFF1A</p><ul><li>\u6548\u7387\u95EE\u9898</li><li>\u7A7A\u95F4\u95EE\u9898</li></ul></li></ul></li><li><p>2\u3001\u590D\u5236\u7B97\u6CD5</p><ul><li>\u5C06\u53EF\u7528\u5185\u5B58\u6309\u5BB9\u91CF\u5212\u5206\u4E3A\u5927\u5C0F\u76F8\u7B49\u7684\u4E24\u5757\uFF0C\u6BCF\u6B21\u53EA\u4F7F\u7528\u5176\u4E2D\u7684\u4E00\u5757\u3002\u5F53\u8FD9\u4E00\u5757\u7684\u5185\u5B58\u7528\u5B8C\u4E86\uFF0C\u5C31\u5C06\u8FD8\u5B58\u6D3B\u7740\u7684\u5BF9\u8C61\u590D\u5236\u5230\u53E6\u5916\u4E00\u5757\u4E0A\u9762\uFF0C\u7136\u540E\u518D\u628A\u5DF2\u4F7F\u7528\u8FC7\u7684\u5185\u5B58\u7A7A\u95F4\u4E00\u6B21\u6E05\u7406\u6389\u3002</li></ul></li><li><p>3\u3001\u6807\u8BB0\u6574\u7406\u7B97\u6CD5</p><ul><li>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u7684\u6807\u8BB0\u8FC7\u7A0B\u7C7B\u4F3C\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\uFF0C\u4F46\u540E\u7EED\u6B65\u9AA4\u4E0D\u662F\u76F4\u63A5\u5BF9\u53EF\u56DE\u6536\u5BF9\u8C61\u8FDB\u884C\u6E05\u7406\uFF0C\u800C\u662F\u8BA9\u6240\u6709\u5B58\u6D3B\u7684\u5BF9\u8C61\u90FD\u5411\u4E00\u7AEF\u79FB\u52A8\uFF0C\u7136\u540E\u76F4\u63A5\u6E05\u7406\u6389\u7AEF\u8FB9\u754C\u4EE5\u5916\u7684\u5185\u5B58\uFF0C\u7C7B\u4F3C\u4E8E\u78C1\u76D8\u6574\u7406\u7684\u8FC7\u7A0B\uFF0C\u8BE5\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u9002\u7528\u4E8E\u5BF9\u8C61\u5B58\u6D3B\u7387\u9AD8\u7684\u573A\u666F\uFF08\u8001\u5E74\u4EE3\uFF09\u3002</li></ul></li><li><p>4\u3001\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5</p><ul><li>\u4E0D\u540C\u7684\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F(\u5B58\u6D3B\u60C5\u51B5)\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u800C\u4E0D\u540C\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u4F4D\u4E8E\u5806\u4E2D\u4E0D\u540C\u7684\u533A\u57DF\uFF0C\u56E0\u6B64\u5BF9\u5806\u5185\u5B58\u4E0D\u540C\u533A\u57DF\u91C7\u7528\u4E0D\u540C\u7684\u7B56\u7565\u8FDB\u884C\u56DE\u6536\u53EF\u4EE5\u63D0\u9AD8 JVM \u7684\u6267\u884C\u6548\u7387\u3002\u5F53\u4EE3\u5546\u7528\u865A\u62DF\u673A\u4F7F\u7528\u7684\u90FD\u662F\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5\uFF1A\u65B0\u751F\u4EE3\u5BF9\u8C61\u5B58\u6D3B\u7387\u4F4E\uFF0C\u5C31\u91C7\u7528\u590D\u5236\u7B97\u6CD5\uFF1B\u8001\u5E74\u4EE3\u5B58\u6D3B\u7387\u9AD8\uFF0C\u5C31\u7528\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u6216\u8005\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u3002Java\u5806\u5185\u5B58\u4E00\u822C\u53EF\u4EE5\u5206\u4E3A\u65B0\u751F\u4EE3\u3001\u8001\u5E74\u4EE3\u548C\u6C38\u4E45\u4EE3\u4E09\u4E2A\u6A21\u5757\uFF0C</li></ul></li></ul><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3\uFF1A</h2><p><img src="https://img-blog.csdn.net/20170515153931088?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvanVzdGxvdmV5b3Vf/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="\u5783\u573E\u56DE\u6536\u673A\u5236"></p><blockquote><p>\u6BCF\u65E5\u5B66\u4E60\uFF0C\u6BCF\u65E5\u7CBE\u8FDB\uFF01</p></blockquote>',8);function k(m,x){const e=o("ExternalLinkIcon");return p(),n(s,null,[u,l("blockquote",null,[l("p",null,[l("a",h,[d,i(e)])])]),_,l("blockquote",null,[l("p",null,[l("a",f,[v,i(e)])])]),b],64)}var g=t(c,[["render",k],["__file","2019-02-03-Java\u5185\u5B58\u6A21\u578B\u4E0E\u5783\u573E\u56DE\u6536.html.vue"]]);export{g as default};
