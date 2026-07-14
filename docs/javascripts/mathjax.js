window.MathJax = {
  loader: {
    load: ["[tex]/color", "[tex]/braket"]
  },
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: false,       // 关闭 $ 转义，避免 # 被误解析
    processEnvironments: true,
    packages: {"[+]": ["color", "braket"]}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
});
