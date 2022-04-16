import{_ as e,x as n}from"./app.3547d211.js";const s={},a=n(`<h3 id="\u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F</h3><hr><ul><li>\u53EF\u4EE5\u66FF\u6362\u4F60\u7684\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684\u4E0B\u5217\u6587\u4EF6\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\uFF1A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  .env              <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165</span>
  .env.local        <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88ABgit\u5FFD\u7565</span>
  .env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>       <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165</span>
  .env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u5355\u4F1A\u88ABgit\u5FFD\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4E00\u4E2A\u73AF\u5883\u6587\u4EF6\u53EA\u5305\u542B\u73AF\u5883\u53D8\u91CF\u7684&quot;\u952E=\u503C&quot;\u5BF9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token assign-left variable">FOO</span><span class="token operator">=</span>bar
  <span class="token assign-left variable">VUE_APP_SECRET</span><span class="token operator">=</span>secret
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F" aria-hidden="true">#</a> \u6A21\u5F0F</h3><hr><ul><li><p>\u6A21\u5F0F\u662FVue CLI\u9879\u76EE\u4E2D\u7684\u91CD\u8981\u6982\u5FF5\uFF0C\u4E00\u4E2AVue CLI\u9879\u76EE\u6709\u4E09\u4E2A\u6A21\u5F0F\uFF1A</p><ul><li>development\u6A21\u5F0F\u7528\u4E8Evue-cli-service serve</li><li>production\u6A21\u5F0F\u7528\u4E8E vue-cli-service build \u548C vue-cli-service test:e2e</li><li>test \u6A21\u5F0F\u7528\u4E8E vue-cli-service test:unit</li></ul></li><li><p>\u6CE8\u610F\u6A21\u5F0F\u4E0D\u540C\u4E8E NODE_ENV\uFF0C\u4E00\u4E2A\u6A21\u5F0F\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u73AF\u5883\u53D8\u91CF\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6BCF\u4E2A\u6A21\u5F0F\u90FD\u4F1A\u5C06 NODE_ENV \u7684\u503C\u8BBE\u7F6E\u4E3A\u6A21\u5F0F\u7684\u540D\u79F0\u2014\u2014\u6BD4\u5982\u5728 development \u6A21\u5F0F\u4E0B NODE_ENV \u7684\u503C\u4F1A\u88AB\u8BBE\u7F6E\u4E3A &quot;development&quot;\u3002</p></li><li><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E3A .env \u6587\u4EF6\u589E\u52A0\u540E\u7F00\u6765\u8BBE\u7F6E\u67D0\u4E2A\u6A21\u5F0F\u4E0B\u7279\u6709\u7684\u73AF\u5883\u53D8\u91CF\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u4F60\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A .env.development \u7684\u6587\u4EF6\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E2A\u6587\u4EF6\u91CC\u58F0\u660E\u8FC7\u7684\u53D8\u91CF\u5C31\u53EA\u4F1A\u5728 development \u6A21\u5F0F\u4E0B\u88AB\u8F7D\u5165\u3002</p></li></ul>`,9);function l(i,t){return a}var r=e(s,[["render",l],["__file","2020-12-04-\u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F.html.vue"]]);export{r as default};
