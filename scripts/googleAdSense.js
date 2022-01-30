const adSense = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254258675843421"
     crossorigin="anonymous"></script>
`;

hexo.extend.injector.register('head_end', adSense, 'default');
