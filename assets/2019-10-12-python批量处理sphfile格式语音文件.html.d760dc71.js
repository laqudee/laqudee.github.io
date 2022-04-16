import{_ as n,x as s}from"./app.3547d211.js";const a={},p=s(`<ul><li>\u76F4\u63A5\u4E0A\u4EE3\u7801\u5427\uFF0C\u4EE3\u7801\u91CC\u5565\u90FD\u6709</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># coding=utf-8   </span>

<span class="token keyword">from</span> sphfile <span class="token keyword">import</span> SPHFile
<span class="token keyword">import</span> glob
<span class="token keyword">import</span> os

<span class="token keyword">def</span> <span class="token function">trainFun</span><span class="token punctuation">(</span>pathName<span class="token punctuation">)</span><span class="token punctuation">:</span>

	sph_files <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>pathName<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>sph_files<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;train utterences&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token keyword">in</span> sph_files<span class="token punctuation">:</span>
		sph <span class="token operator">=</span> SPHFile<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token comment"># \u751F\u6210\u65B0\u7684\u8BED\u97F3\u6587\u4EF6\uFF0C\u5E76\u5220\u9664\u65E7\u7684\u6587\u4EF6    </span>

		sph<span class="token punctuation">.</span>write_wav<span class="token punctuation">(</span>filename<span class="token operator">=</span>i<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;.wav&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_n.wav&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   
		os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment"># \u5220\u9664\u539F\u8BED\u97F3\u6587\u4EF6</span>

	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Completed&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">testFun</span><span class="token punctuation">(</span>pathName<span class="token punctuation">)</span><span class="token punctuation">:</span>
	sph_files <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>pathName<span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>sph_files<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;test utterences&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token keyword">in</span> sph_files<span class="token punctuation">:</span>
		sph <span class="token operator">=</span> SPHFile<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token comment"># \u751F\u6210\u65B0\u7684\u8BED\u97F3\u6587\u4EF6\uFF0C\u5E76\u5220\u9664\u65E7\u7684\u6587\u4EF6</span>

		sph<span class="token punctuation">.</span>write_wav<span class="token punctuation">(</span>filename<span class="token operator">=</span>i<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;.wav&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_n.wav&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment"># \u5220\u9664\u539F\u8BED\u97F3\u6587\u4EF6</span>

	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Completed&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># \u6279\u91CF\u4FEE\u6539\u6539\u8FC7\u683C\u5F0F\u7684\u6587\u4EF6\u540D</span>

<span class="token keyword">def</span> <span class="token function">filerenames</span><span class="token punctuation">(</span>pathName<span class="token punctuation">)</span><span class="token punctuation">:</span>    
	
	<span class="token comment"># \u8FD4\u56DE\u6307\u5B9A\u8DEF\u5F84\u6587\u4EF6\u5939\u4E2D\u6240\u6709\u6587\u4EF6  </span>

	filename_list <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>pathName<span class="token punctuation">)</span>

	a <span class="token operator">=</span> <span class="token number">0</span>

	<span class="token keyword">for</span> i <span class="token keyword">in</span> filename_list<span class="token punctuation">:</span>
		used_name <span class="token operator">=</span> pathName <span class="token operator">+</span> filename_list<span class="token punctuation">[</span>a<span class="token punctuation">]</span>

		filename_list<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> filename_list<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;_n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

		new_name <span class="token operator">=</span> pathName <span class="token operator">+</span> filename_list<span class="token punctuation">[</span>a<span class="token punctuation">]</span>

		os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>used_name<span class="token punctuation">,</span> new_name<span class="token punctuation">)</span>
		<span class="token comment"># \u8F93\u51FA\u770B\u6548\u679C</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6%s\u91CD\u547D\u540D\u6210\u529F,\u65B0\u7684\u6587\u4EF6\u540D\u4E3A%s&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>used_name<span class="token punctuation">,</span>new_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

		a <span class="token operator">+=</span><span class="token number">1</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
	pathList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;train&quot;</span><span class="token punctuation">]</span>  
	<span class="token comment"># \u8FD9\u91CC\u7684URL\u6362\u6210\u4F60\u672C\u5730\u7684\u6587\u4EF6\u5B58\u653E\u5730\u5740</span>

	testPath <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/&#39;</span> <span class="token operator">+</span> pathList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;/*/*.wav&#39;</span>

	trainPath <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/&#39;</span> <span class="token operator">+</span> pathList<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;/*/*.wav&#39;</span>

	pathTrain <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/train/&#39;</span>

	pathTest <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/test/&#39;</span>

	<span class="token comment"># \u8C03\u7528\u683C\u5F0F\u8F6C\u6362\u51FD\u6570\u5BF9test\u548Ctrain\u96C6\u5408\u91CC\u7684\u6587\u4EF6\u8FDB\u884C\u8F6C\u6362</span>

	testFun<span class="token punctuation">(</span>testPath<span class="token punctuation">)</span>

	trainFun<span class="token punctuation">(</span>trainPath<span class="token punctuation">)</span>

	<span class="token comment"># \u4E0B\u9762\u662F\u5BF9\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u540D\u5C31\u884C\u66FF\u6362\u4FEE\u6539</span>

	fileTrain_set <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>pathTrain<span class="token punctuation">)</span>

	<span class="token keyword">for</span> x <span class="token keyword">in</span> fileTrain_set<span class="token punctuation">:</span>
		x_new <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/train/&#39;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>  
		filerenames<span class="token punctuation">(</span>x_new<span class="token punctuation">)</span>  

	fileTest_set <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>pathTest<span class="token punctuation">)</span>
	<span class="token keyword">for</span> x <span class="token keyword">in</span> fileTest_set<span class="token punctuation">:</span>
		x_new <span class="token operator">=</span> <span class="token string">&#39;/Users/a1/Desktop/timit/wav/test/&#39;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
		filerenames<span class="token punctuation">(</span>x_new<span class="token punctuation">)</span>

<span class="token comment"># \u4EE3\u7801\u4E2D\u51FA\u73B0\u7684url\u90FD\u9700\u8981\u6362\u6210\u4F60\u672C\u5730\u7684\u6587\u4EF6\u5730\u5740</span>

<span class="token comment"># \u6211\u5199python\u6709\u70B9\u624B\u751F\u4E86\u3002\u867D\u7136\u8F6C\u6362\u6210\u529F\uFF0C\u4E14\u7B26\u5408\u8981\u6C42\u3002\u4F46\u4E0D\u592A\u7B80\u6D01\u7F8E\u89C2\u3002</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><blockquote><p>\u4E3A\u4F60\u2795\u{1F31F}\u{1F31F}\u{1F31F}\u2795</p></blockquote>`,3);function t(e,o){return p}var c=n(a,[["render",t],["__file","2019-10-12-python\u6279\u91CF\u5904\u7406sphfile\u683C\u5F0F\u8BED\u97F3\u6587\u4EF6.html.vue"]]);export{c as default};
