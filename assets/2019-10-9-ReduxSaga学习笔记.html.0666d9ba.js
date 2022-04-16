import{_ as t,a as l,o as p,c as o,f as n,b as a,F as c,d as e,x as r}from"./app.3547d211.js";const u={},i={href:"https://redux-saga.js.org",target:"_blank",rel:"noopener noreferrer"},d=e("\u82F1\u6587\u539F\u7248\u5B98\u7F51"),k={href:"https://redux-saga-in-chinese.org",target:"_blank",rel:"noopener noreferrer"},_=e("redux-saga\u4E2D\u6587\u6559\u7A0B\u5B98\u7F51"),m=n("br",null,null,-1),b=n("li",null,[n("p",null,"redux-saga\uFF1A\u7528\u4E8E\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8FSide Effect(\u526F\u4F5C\u7528\uFF0C\u5F02\u6B65\u83B7\u53D6\u6570\u636E\uFF0C\u8BBF\u95EE\u6D4F\u89C8\u5668\u7F13\u5B58)\u7684\u5E93"),n("ul",null,[n("li",null,"\u76EE\u7684\uFF1A\u8BA9\u526F\u4F5C\u7528\u7BA1\u7406\u66F4\u5BB9\u6613\uFF0C\u6267\u884C\u66F4\u9AD8\u6548\uFF0C\u6D4B\u8BD5\u66F4\u7B80\u5355\uFF0C\u5904\u7406\u9519\u8BEF\u66F4\u5BB9\u6613"),n("li",null,"saga\u53EF\u4EE5\u6BD4\u55BB\u6210\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4E00\u4E2A\u5355\u72EC\u7684\u7EBF\u7A0B\uFF0C\u72EC\u81EA\u8D1F\u8D23\u5904\u7406\u526F\u4F5C\u7528\u3002"),n("li",null,"redux-saga\u662F\u4E00\u4E2Aredux meddlewear\uFF0C\u610F\u5473\u7740\u8FD9\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u901A\u8FC7\u6B63\u5E38\u7684redux action\u4ECE\u4E3B\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\uFF0C\u6682\u505C\u548C\u53D6\u6D88\uFF0C\u80FD\u8BBF\u95EE\u5B8C\u6574\u7684redux state\uFF0C\u4E5F\u53EF\u4EE5dispathch redux action")])],-1),x=n("li",null,[n("p",null,"redux-saga\u4F7F\u7528ES6\u7684Generator\u529F\u80FD\uFF0C\u8BA9\u5F02\u6B65\u7684\u6D41\u7A0B\u66F4\u6613\u4E8E\u8BFB\u53D6\uFF0C\u5199\u5165\u548C\u6D4B\u8BD5\u3002")],-1),g=n("li",null,[n("p",null,"\u5B89\u88C5")],-1),h=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --save redux-saga
# or
yarn add redux-saga
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u793A\u4F8B\uFF1A <ul><li>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2AUI\u754C\u9762\uFF0C\u5728\u5355\u51FB\u6309\u94AE\u65F6\u4ECE\u8FDC\u5C42\u670D\u52A1\u5668\u83B7\u53D6\u4E00\u4E9B\u7528\u6237\u6570\u636E</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">UserComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">onSomeButtonClicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>useID<span class="token punctuation">,</span> dispatch<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token string">&#39;USER_FETCH_REQUESTED&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span>userId<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>  
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u672A\u5B8C\u5F85\u7EED...</p></blockquote>`,4);function f(v,E){const s=l("ExternalLinkIcon");return p(),o(c,null,[n("ul",null,[n("li",null,[n("p",null,[n("a",i,[d,a(s)])])]),n("li",null,[n("p",null,[n("a",k,[_,a(s)]),m])]),b,x,g]),h],64)}var S=t(u,[["render",f],["__file","2019-10-9-ReduxSaga\u5B66\u4E60\u7B14\u8BB0.html.vue"]]);export{S as default};
