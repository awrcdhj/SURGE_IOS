From 0f5129019c013f8e957e65c4fb4c49352c326d95 Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?=E7=A8=8B=E4=BA=AE?= <941877427@qq.com>
Date: Wed, 15 Sep 2021 06:09:08 +0800
Subject: [PATCH 1/2] Add files via upload

---
 Surge4.js | 2455 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 2455 insertions(+)
 create mode 100644 Surge4.js

diff --git a/Surge4.js b/Surge4.js
new file mode 100644
index 0000000..6bf4f21
--- /dev/null
+++ b/Surge4.js
@@ -0,0 +1,2455 @@
+
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
+  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
+  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
+  <link rel="preconnect" href="https://github.githubassets.com" crossorigin>
+  <link rel="preconnect" href="https://avatars.githubusercontent.com">
+
+
+
+  <link crossorigin="anonymous" media="all" integrity="sha512-Xvl7qd6ZFq6aBrViMpY+7UKRL79QzxxYG1kyELGe/sH4sV3eCks8DDXxa3WolACcKPac42eqrfe6m0jazyAIPQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-5ef97ba9de9916ae9a06b56232963eed.css" />
+  <link crossorigin="anonymous" media="all" integrity="sha512-24GJDHWJro3USSMV5JFy5QbE8eCNYG61UucNp7vJMTaeJMrBy6FLiLFgX9jXnWlddv2VRu/rTLIkxzuRDF9ZVA==" rel="stylesheet" href="https://github.githubassets.com/assets/colors-v2-db81890c7589ae8dd4492315e49172e5.css" />
+    <link crossorigin="anonymous" media="all" integrity="sha512-rcBopHrwspQORpXVLihZMP22sFwuIo3fL1DyFo5aXwWnV5FzV/nlAGnX/36fI9GQVc2VN7MiIT34RMCwq8jemg==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-adc068a47af0b2940e4695d52e285930.css" />
+    
+    
+    
+    <link crossorigin="anonymous" media="all" integrity="sha512-ohNio2W8iCFgXVph5xMJF1NU+8NjAZrF5a5mW8//nqN2FVv+Sw0uYpQXNf+hqIUVSRC3y63k/3et87TEzsZuIA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-a21362a365bc8821605d5a61e7130917.css" />
+
+  <script crossorigin="anonymous" defer="defer" integrity="sha512-DHpNa+QkQaUCk1eji+SQGDsKa8B63teT5nbKT3/TQ38T2hEDfT9B9OddmUKcMnQ8GaECHElNcJkpGhIThksyXA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-0c7a4d6b.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-HP2Mvig4HXg8jfmGDNyHQA926EIhsEnEmglfqF8GzaJ/ble4OXug7GkcnQlvBRARAAxiSjtRZlXi6Y5946iRRA==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-frameworks-1cfd8cbe.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-FKXP1Zj/06ElnU2g7tU//J/ilS/i7vutZAiWJRr59SBWKrnmHKIKNwPT+it8dEIdaGzT3DozyEbQQeZUEqvcMA==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-vendor-14a5cfd5.js"></script>
+  
+  <script crossorigin="anonymous" defer="defer" integrity="sha512-9s0o9HusjaKciUh3VkWjfLedaVnLoWrUgCB0HERc6sLtYrXOGqzj68/jjphqCawbexLaVDHv08CTTciAvxPFtg==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-f6cd28f4.js"></script>
+  
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-BUDbrXZbK9QorUrf0KoEbZAJhTnz+BqMm10bqZCK6w5Hwy7YaORQ4F4DXhLkAVTvaJhNhxxeXgmgJLP0TB7TOw==" type="application/javascript" data-module-id="./chunk-advanced.js" data-src="https://github.githubassets.com/assets/chunk-advanced-0540dbad.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-5tWKSr7mhAzSh4Sx5YRFgKftdGxKwHKnOGYw5DlxjHhkQVURYFU3Bk5IMOGMKuAiJTlC3OXYM3xzGcyjzuEFQQ==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-e6d58a4a.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-0MZorw3oXnKy5eeSwQ9xGrKU4hxQeCXxmyxhneIHNhDIqu8vWh8mHss9FlC75Xd/bPWxFDCvdOo57tnTR46nbA==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-d0c668af.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-M6W/sGLOuJXCIkw+doDl6zl7J9q2DmqdwftQCtyEiZM/UJNGRVQdyKwI/PAMxD12se/wCx3ZcyJs9nz0o0OSVw==" type="application/javascript" data-module-id="./chunk-color-modes.js" data-src="https://github.githubassets.com/assets/chunk-color-modes-33a5bfb0.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-71HZu1T5JWqRNF9wrm2NXZAqYVvzxZ8Dvor5U5l/LuEBbGCBX57Sny60Rj+qUZZAvEBGFlNsz179DEn2HFwgVA==" type="application/javascript" data-module-id="./chunk-confetti.js" data-src="https://github.githubassets.com/assets/chunk-confetti-ef51d9bb.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-P29U0lNmhUj353VrCWp6czdhNpMtF70xVKf4GBGFVKCoqGtxp0sywAM8/46+iC0kdFiRvM13EBvDnq6oyWRwiw==" type="application/javascript" data-module-id="./chunk-contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/chunk-contributions-spider-graph-3f6f54d2.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-arflMFcVzVAYaP2n7m7gklPChWsVsCDtRPav2Cb6bqLeJf8pgbojWJ3EseKXILCIqfxl/v6arBduZ9SLmpMEZw==" type="application/javascript" data-module-id="./chunk-delayed-loading-element.js" data-src="https://github.githubassets.com/assets/chunk-delayed-loading-element-6ab7e530.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-6j/oSF+kbW+yetNPvI684VzAu9pzug6Vj2h+3u1LdCuRhR4jnuiHZfeQKls3nxcT/S3H+oIt7FtigE/aeoj+gg==" type="application/javascript" data-module-id="./chunk-drag-drop.js" data-src="https://github.githubassets.com/assets/chunk-drag-drop-ea3fe848.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-VSSd+Yzi2iMS+pibY6hD/WdypxAEdob5F2RMKxuKcAHS2EpFYJPeTXoVxt0NXg03tfj2dka2mEtHS+vjpYSaDw==" type="application/javascript" data-module-id="./chunk-edit-hook-secret-element.js" data-src="https://github.githubassets.com/assets/chunk-edit-hook-secret-element-55249df9.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-ErqZFlIt7zIbLoZHvwfq9Zjo5zo+Y1A410nePDGvK+WVTVP10iNTfoqdOOSZNSy1gtLKIWDIIiOV30lr6zUJCA==" type="application/javascript" data-module-id="./chunk-edit.js" data-src="https://github.githubassets.com/assets/chunk-edit-12ba9916.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-aiqMIGGZGo8AQMjcoImKPMTsZVVRl6htCSY7BpRmpGPG/AF+Wq+P/Oj/dthWQOIk9cCNMPEas7O2zAR6oqn0tA==" type="application/javascript" data-module-id="./chunk-emoji-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-emoji-picker-element-6a2a8c20.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-pyMtBe0iN5jUu1XXnpodO2HUF6HtgHFSW7xU1hiqWn0IrSun5a14jZWjqfSQNbj7lAyY9xBA3dNsyydapPhobg==" type="application/javascript" data-module-id="./chunk-failbot.js" data-src="https://github.githubassets.com/assets/chunk-failbot-a7232d05.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-sy0KBzl3Hruew+orJ1/E4cyuUixtV0uS03SSHpYRzhAepWejugyPs3AwHpQ+Em5HaMfd1MPz/M4+xEaFbQc5gA==" type="application/javascript" data-module-id="./chunk-feature-callout-element.js" data-src="https://github.githubassets.com/assets/chunk-feature-callout-element-b32d0a07.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-h8LRqLfdvdK2/kSKj8JYy6jyBdlTywxL4lqwV6OVOd3SCPRgUJ4/r3KHFQZPuYw0G7AWWhJY/IoitYLvAWFe5Q==" type="application/javascript" data-module-id="./chunk-filter-input.js" data-src="https://github.githubassets.com/assets/chunk-filter-input-87c2d1a8.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-ZDEs2KxFQg2a+jrEHbGKTNtzB+AQK3msBhv/KXLFiX9sV8vJaa9+9lpIW/kWd9JKtpJ63vTC/wuOJo7QJTbKKg==" type="application/javascript" data-module-id="./chunk-get-repo-element.js" data-src="https://github.githubassets.com/assets/chunk-get-repo-element-64312cd8.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-hDiTAZNldjiUNPk5eNthz6zUVY57FFqFU+n2D7WRYygzCxbDtwO9ODKDsEXxYb8kAMI7gTC8/QR3dXtHVCVgcA==" type="application/javascript" data-module-id="./chunk-insights-query.js" data-src="https://github.githubassets.com/assets/chunk-insights-query-84389301.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-SBLYXQ5tCZ/pcd1gcxrF4aTurb6Pi6aXi+k8JwE7zDNc0RmTnAPUdQ0a4/c9kt8sIhRmc8UyY/dDz+3r1os5MA==" type="application/javascript" data-module-id="./chunk-invitations.js" data-src="https://github.githubassets.com/assets/chunk-invitations-4812d85d.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-kHBm6CHcorsoWgbEfXx9ONevjreBpcPig/6CwUA1AEDHRHq5fuqHSKAFVbS+ri41o89ud/eW9mdT8gdg7bvEyQ==" type="application/javascript" data-module-id="./chunk-jump-to.js" data-src="https://github.githubassets.com/assets/chunk-jump-to-907066e8.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-VtdawM/OSsu+d6v25ZY6UcQa/GGLAStSESjsqdEwx+ey88GNYGkQ24o+JFFo4lY+7wLMRf7aCrLxkA5SquBoNQ==" type="application/javascript" data-module-id="./chunk-launch-code-element.js" data-src="https://github.githubassets.com/assets/chunk-launch-code-element-56d75ac0.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-RR5Uk+KE9M/CsqLcmgReChS7ZDjm8gxcOnDYWWkMdeTsrpW/xDlJHQEgUfuEC6HJXfyPNcW+oBTHqMnucNYGTQ==" type="application/javascript" data-module-id="./chunk-line-chart.js" data-src="https://github.githubassets.com/assets/chunk-line-chart-451e5493.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-RduaLAviB2ygvRK/eX5iwzYO43ie7svrJ0rYJs06x7XqpRl/IK8PPBscBWM9Moo5Z86DK2iRLE2+aR7TJ5Uc2Q==" type="application/javascript" data-module-id="./chunk-metric-selection-element.js" data-src="https://github.githubassets.com/assets/chunk-metric-selection-element-45db9a2c.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-7hZ031ngiF36wGsfcoyyCWTqwYxjX+qeTLtCV7CJ+IO+wzkzCm1RoR3WzWczfWmwLNqr+Hu3kQOgkBaGn4ntWQ==" type="application/javascript" data-module-id="./chunk-notification-list-focus.js" data-src="https://github.githubassets.com/assets/chunk-notification-list-focus-ee1674df.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-GntjGfOwMXsNQc5gxmzT306dC63LK08Oq5HrYuzBerIW2O/B/z8qHbjDImFUB4Zzu8kvKV1xU9BmU7CaLLeNeg==" type="application/javascript" data-module-id="./chunk-premium-runners.js" data-src="https://github.githubassets.com/assets/chunk-premium-runners-1a7b6319.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-oaK5DHO3+lQ/luphbKbJlYucI+1wdb1ckzLGh1p3HjnhMptUGr7FmMNwVBUGLpkHyIbve+fYuX9Ct1wzKH+6ag==" type="application/javascript" data-module-id="./chunk-presence-avatars.js" data-src="https://github.githubassets.com/assets/chunk-presence-avatars-a1a2b90c.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-ma0OOy3nj0c1cqBx0BkcmIFsLqcSZ+MIukQxyEFM/OWTzZpG+QMgOoWPAHZz43M6fyjAUG1jH6c/6LPiiKPCyw==" type="application/javascript" data-module-id="./chunk-profile-pins-element.js" data-src="https://github.githubassets.com/assets/chunk-profile-pins-element-99ad0e3b.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-hgoSKLTlL8I3IWr/TLONCU+N4kdCtdrHCrrud4NKhgRlLrTw0XUPhqBaDdZUiFSzDQRw/nFQ1kw2VeTm0g9+lA==" type="application/javascript" data-module-id="./chunk-profile.js" data-src="https://github.githubassets.com/assets/chunk-profile-860a1228.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-W/CGm7ARGkQrOSmTAUvHx6XJH3sPfyUEY2kRDWT84K5WU9i2fNXvLxdipvaaMTQbR6AjSSxrQOBj6lR1kzgB0Q==" type="application/javascript" data-module-id="./chunk-readme-toc-element.js" data-src="https://github.githubassets.com/assets/chunk-readme-toc-element-5bf0869b.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-DzzdRhToySuRxHkYlTIW4fLX3/yY6VlVkg+er2yKynUSbiLqTRji+tl29UFifcFSVbkWNtqU+PzJ5bQA4VagMg==" type="application/javascript" data-module-id="./chunk-ref-selector.js" data-src="https://github.githubassets.com/assets/chunk-ref-selector-0f3cdd46.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-I7iI902D1A6s8umCD2hbF4o0hKW1lrpNfRJ2H7uw6fdMVR/8Jdtn19b3G/DDIT4lpXOUToZXTmbYnFQAYc5gag==" type="application/javascript" data-module-id="./chunk-responsive-underlinenav.js" data-src="https://github.githubassets.com/assets/chunk-responsive-underlinenav-23b888f7.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-SWy36S28Js+/YzsvYgmp+IEdC0qtMcBf6sYhXTEcj1aFPCLPOTOnOKqzFiNyH2oNVDd+u5Qi8eqYINSIu28LFQ==" type="application/javascript" data-module-id="./chunk-runner-groups.js" data-src="https://github.githubassets.com/assets/chunk-runner-groups-496cb7e9.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-SVdK0K69PnQ4FChdpl650OR+vplYWXqddxNkEGKhQf6tkehqvKkFEg5LQSZgCVKt2tfc9CnWJlmKCwbTTipEjg==" type="application/javascript" data-module-id="./chunk-series-table.js" data-src="https://github.githubassets.com/assets/chunk-series-table-49574ad0.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-tk76eoSLUqXSVZ8ANzPprrOImFIV1zQ/VBV+WzG8ZjZpVPH8cLkMH/ur5HJB1lxx9/yo+V2wjDF96t4qfUwZLA==" type="application/javascript" data-module-id="./chunk-severity-calculator-element.js" data-src="https://github.githubassets.com/assets/chunk-severity-calculator-element-b64efa7a.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-j7Pb1H+2Xt4YIKSrJLLXxl/NNkkpW//5PLTpu58JGD8pqRPODDjJKqjO6YPZd++BB4VJubHPjzvuMXhW/9jcqA==" type="application/javascript" data-module-id="./chunk-sortable-behavior.js" data-src="https://github.githubassets.com/assets/chunk-sortable-behavior-8fb3dbd4.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-nKa3UdA2O7Ve4Jn24gaB20yUfJvS7wlnd8Q8C+iWD8i2tXLgaKemDWkLeexeQdrs+an98FCl5fOiy0J+izn+tQ==" type="application/javascript" data-module-id="./chunk-three.module.js" data-src="https://github.githubassets.com/assets/chunk-three.module-9ca6b751.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-WK8VXw3lfUQ/VRW0zlgKPhcMUqH0uTnB/KzePUPdZhCm/HpxfXXHKTGvj5C0Oex7+zbIM2ECzULbtTCT4ug3yg==" type="application/javascript" data-module-id="./chunk-toast.js" data-src="https://github.githubassets.com/assets/chunk-toast-58af155f.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-1vSZvwpr106s8wjSNFNFGVmFT2E4YjI2N8k6JqiSb28GGYMkEJUhveotmvB00Z4bQZM61ZgvWcXax1U3M48gLQ==" type="application/javascript" data-module-id="./chunk-tweetsodium.js" data-src="https://github.githubassets.com/assets/chunk-tweetsodium-d6f499bf.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-fvcOOYapCxPkDRQWz2WQzrqL6rRhX88yHWF87fb9Xny2Fq4lri0ONaVFL7XDSTiTyu4OTp+8WoyfMVpgGUaaVg==" type="application/javascript" data-module-id="./chunk-unveil.js" data-src="https://github.githubassets.com/assets/chunk-unveil-7ef70e39.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-V1S2L90J/leeVmnOy/FbkG/OQV4USnz5ZyX6DdCbkdljoIDtBFoxUohUQokpegatnFHQmch34+humD9mitEyeg==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-5754b62f.js"></script>
+    <script crossorigin="anonymous" defer="defer" integrity="sha512-cKu/+X7gT+WVH4sXKt0g3G77bfQfcgwurRObM+dt8XylPm9eEWI+/aWKhVab6VsYuvvuI5BTriKXhXfJwaSXdQ==" type="application/javascript" data-module-id="./chunk-webgl-warp.js" data-src="https://github.githubassets.com/assets/chunk-webgl-warp-70abbff9.js"></script>
+  
+  <script crossorigin="anonymous" defer="defer" integrity="sha512-5vp/q5KhOtPfRKIPmz2PoaqwAuGXO4yUN/f+Qqg6C5hn9qdfBlt0LhaNDx1hsuhkQlru8nMMNbJuGcRoiqfA8g==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-e6fa7fab.js"></script>
+<script crossorigin="anonymous" defer="defer" integrity="sha512-xCcwGq+7fkQPSGSB52tRFtoiTfdC89lTq2PBctpiy3NesXDPOkppzJFBbIU6pjSvS6f/PBj2retGOKqdyjOuxg==" type="application/javascript" src="https://github.githubassets.com/assets/diffs-c427301a.js"></script>
+
+  <meta name="viewport" content="width=device-width">
+  
+  <title>HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy</title>
+    <meta name="description" content="http代理，支持CONNECT和普通GET/POST，支持http2；可防止主动嗅探；可作为小火箭、圈、surge等软件和SwitchyOmega(chrome插件)所说的https代理 - HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy">
+    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
+  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
+  <meta property="fb:app_id" content="1401488693436528">
+  <meta name="apple-itunes-app" content="app-id=1477376905" />
+    <meta name="twitter:image:src" content="https://opengraph.githubassets.com/3edef6f8bd14d20e2f791419e82797d46fb8aa85cde46037e0ce46bc7866e5d8/arloor/HttpProxy" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy" /><meta name="twitter:description" content="http代理，支持CONNECT和普通GET/POST，支持http2；可防止主动嗅探；可作为小火箭、圈、surge等软件和SwitchyOmega(chrome插件)所说的https代理 - HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy" />
+    <meta property="og:image" content="https://opengraph.githubassets.com/3edef6f8bd14d20e2f791419e82797d46fb8aa85cde46037e0ce46bc7866e5d8/arloor/HttpProxy" /><meta property="og:image:alt" content="http代理，支持CONNECT和普通GET/POST，支持http2；可防止主动嗅探；可作为小火箭、圈、surge等软件和SwitchyOmega(chrome插件)所说的https代理 - HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy" /><meta property="og:url" content="https://github.com/arloor/HttpProxy" /><meta property="og:description" content="http代理，支持CONNECT和普通GET/POST，支持http2；可防止主动嗅探；可作为小火箭、圈、surge等软件和SwitchyOmega(chrome插件)所说的https代理 - HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy" />
+
+
+
+    
+
+  <link rel="assets" href="https://github.githubassets.com/">
+    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/88377378/ws?session=eyJ2IjoiVjMiLCJ1Ijo4ODM3NzM3OCwicyI6NzQ0NjczOTY4LCJjIjoxMDc1Nzc0OTU3LCJ0IjoxNjMwNTgwNjgyfQ==--86020054ff62909bf7c92a08ce6744bd6485c8d89ac71dc508e4ea468e1cc835" data-refresh-url="/_alive" data-session-id="80f8a4e63fe900910fbb1e13590acbd28894d3df7aef26ce01daab371989204c">
+    <link rel="shared-web-socket-src" href="/socket-worker-b05e50fc.js">
+  <link rel="sudo-modal" href="/sessions/sudo_modal">
+
+  <meta name="request-id" content="D0AC:775D:128B98:266612:6130AFC5" data-pjax-transient="true" /><meta name="html-safe-nonce" content="847bb1f21b51729357f1ca485a6bd379e4517885ddbcc8ca2eef03384dc936a2" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6bnVsbCwicmVxdWVzdF9pZCI6IkQwQUM6Nzc1RDoxMjhCOTg6MjY2NjEyOjYxMzBBRkM1IiwidmlzaXRvcl9pZCI6IjM0OTk2NjM4OTk4NzI3MDQwMDEiLCJyZWdpb25fZWRnZSI6InNvdXRoZWFzdGFzaWEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-pjax-transient="true" /><meta name="visitor-hmac" content="0294f320759c16c7e287fb869d7b1bc48f8899097d3e5af2b0a5f1b5322ddbe9" data-pjax-transient="true" />
+
+    <meta name="hovercard-subject-tag" content="repository:157892826" data-pjax-transient>
+
+
+  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />
+
+  
+
+  <meta name="selected-link" value="repo_source" data-pjax-transient>
+
+    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
+  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
+  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
+  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
+
+  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-url" content="https://collector.githubapp.com/github/collect" /><meta name="octolytics-actor-id" content="88377378" /><meta name="octolytics-actor-login" content="awrcdhj" /><meta name="octolytics-actor-hash" content="6c0920c578c83e5e4ade76d8a6e4ab106ae458f19b5252204b66768f0fd2ee41" />
+
+  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />
+
+  
+
+
+
+  <meta name="optimizely-datafile" content="{&quot;version&quot;: &quot;4&quot;, &quot;rollouts&quot;: [], &quot;typedAudiences&quot;: [], &quot;anonymizeIP&quot;: true, &quot;projectId&quot;: &quot;16737760170&quot;, &quot;variables&quot;: [], &quot;featureFlags&quot;: [], &quot;experiments&quot;: [{&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20432530142&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20418424478&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20437502121&quot;, &quot;key&quot;: &quot;recommended_plan_and_benefits_in_signup&quot;, &quot;layerId&quot;: &quot;20428035169&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20418424478&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20418424478&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20438636352&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20484957397&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20479227424&quot;, &quot;key&quot;: &quot;growth_ghec_onboarding_experience&quot;, &quot;layerId&quot;: &quot;20467848595&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 1000}, {&quot;entityId&quot;: &quot;20438636352&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20438636352&quot;, &quot;endOfRange&quot;: 6000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 8000}, {&quot;entityId&quot;: &quot;20484957397&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20508232513&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20533742085&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20512531891&quot;, &quot;key&quot;: &quot;growth_pull_request_actions_prompt&quot;, &quot;layerId&quot;: &quot;20529822202&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20533742085&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20508232513&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20543572345&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20510876757&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20518037255&quot;, &quot;key&quot;: &quot;growth_issue_actions_prompt&quot;, &quot;layerId&quot;: &quot;20522524291&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20510876757&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20543572345&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}], &quot;audiences&quot;: [{&quot;conditions&quot;: &quot;[\&quot;or\&quot;, {\&quot;match\&quot;: \&quot;exact\&quot;, \&quot;name\&quot;: \&quot;$opt_dummy_attribute\&quot;, \&quot;type\&quot;: \&quot;custom_attribute\&quot;, \&quot;value\&quot;: \&quot;$opt_dummy_value\&quot;}]&quot;, &quot;id&quot;: &quot;$opt_dummy_audience&quot;, &quot;name&quot;: &quot;Optimizely-Generated Audience for Backwards Compatibility&quot;}], &quot;groups&quot;: [{&quot;policy&quot;: &quot;random&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20528555359&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20470139194&quot;, &quot;endOfRange&quot;: 10000}], &quot;experiments&quot;: [{&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20489782769&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20464890159&quot;, &quot;key&quot;: &quot;calculator&quot;}], &quot;id&quot;: &quot;20470139194&quot;, &quot;key&quot;: &quot;pricing_calculator&quot;, &quot;layerId&quot;: &quot;20484939336&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20489782769&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20464890159&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;1268183565.1620830370&quot;: &quot;control&quot;, &quot;1684648857.1628809053&quot;: &quot;calculator&quot;}}], &quot;id&quot;: &quot;20536171833&quot;}], &quot;attributes&quot;: [{&quot;id&quot;: &quot;16822470375&quot;, &quot;key&quot;: &quot;user_id&quot;}, {&quot;id&quot;: &quot;17143601254&quot;, &quot;key&quot;: &quot;spammy&quot;}, {&quot;id&quot;: &quot;18175660309&quot;, &quot;key&quot;: &quot;organization_plan&quot;}, {&quot;id&quot;: &quot;18813001570&quot;, &quot;key&quot;: &quot;is_logged_in&quot;}, {&quot;id&quot;: &quot;19073851829&quot;, &quot;key&quot;: &quot;geo&quot;}, {&quot;id&quot;: &quot;20175462351&quot;, &quot;key&quot;: &quot;requestedCurrency&quot;}], &quot;botFiltering&quot;: false, &quot;accountId&quot;: &quot;16737760170&quot;, &quot;events&quot;: [{&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;17911811441&quot;, &quot;key&quot;: &quot;hydro_click.dashboard.teacher_toolbox_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18124116703&quot;, &quot;key&quot;: &quot;submit.organizations.complete_sign_up&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18145892387&quot;, &quot;key&quot;: &quot;no_metric.tracked_outside_of_optimizely&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18178755568&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.add_repo&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18180553241&quot;, &quot;key&quot;: &quot;submit.repository_imports.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18186103728&quot;, &quot;key&quot;: &quot;click.help.learn_more_about_repository_creation&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18188530140&quot;, &quot;key&quot;: &quot;test_event.do_not_use_in_production&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18191963644&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.transfer_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18195612788&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.import_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18210945499&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.invite_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18211063248&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.create_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18215721889&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.update_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18224360785&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.dismiss&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18234832286&quot;, &quot;key&quot;: &quot;submit.organization_activation.complete&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18252392383&quot;, &quot;key&quot;: &quot;submit.org_repository.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18257551537&quot;, &quot;key&quot;: &quot;submit.org_member_invitation.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18259522260&quot;, &quot;key&quot;: &quot;submit.organization_profile.update&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18564603625&quot;, &quot;key&quot;: &quot;view.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18568612016&quot;, &quot;key&quot;: &quot;click.classroom_sign_in_click&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18572592540&quot;, &quot;key&quot;: &quot;view.classroom_name&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18574203855&quot;, &quot;key&quot;: &quot;click.classroom_create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18582053415&quot;, &quot;key&quot;: &quot;click.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18589463420&quot;, &quot;key&quot;: &quot;click.classroom_create_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591323364&quot;, &quot;key&quot;: &quot;click.classroom_create_first_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591652321&quot;, &quot;key&quot;: &quot;click.classroom_grant_access&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18607131425&quot;, &quot;key&quot;: &quot;view.classroom_creation&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;, &quot;20479227424&quot;], &quot;id&quot;: &quot;18831680583&quot;, &quot;key&quot;: &quot;upgrade_account_plan&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;19064064515&quot;, &quot;key&quot;: &quot;click.signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19075373687&quot;, &quot;key&quot;: &quot;click.view_account_billing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19077355841&quot;, &quot;key&quot;: &quot;click.dismiss_signup_prompt&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;19079713938&quot;, &quot;key&quot;: &quot;click.contact_sales&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19120963070&quot;, &quot;key&quot;: &quot;click.compare_account_plans&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;19151690317&quot;, &quot;key&quot;: &quot;click.upgrade_account_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19424193129&quot;, &quot;key&quot;: &quot;click.open_account_switcher&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19520330825&quot;, &quot;key&quot;: &quot;click.visit_account_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19540970635&quot;, &quot;key&quot;: &quot;click.switch_account_context&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19730198868&quot;, &quot;key&quot;: &quot;submit.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19820830627&quot;, &quot;key&quot;: &quot;click.homepage_signup&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;19988571001&quot;, &quot;key&quot;: &quot;click.create_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20036538294&quot;, &quot;key&quot;: &quot;click.create_organization_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20040653299&quot;, &quot;key&quot;: &quot;click.input_enterprise_trial_form&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20062030003&quot;, &quot;key&quot;: &quot;click.continue_with_team&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20068947153&quot;, &quot;key&quot;: &quot;click.create_organization_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20086636658&quot;, &quot;key&quot;: &quot;click.signup_continue.username&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20091648988&quot;, &quot;key&quot;: &quot;click.signup_continue.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20103637615&quot;, &quot;key&quot;: &quot;click.signup_continue.email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20111574253&quot;, &quot;key&quot;: &quot;click.signup_continue.password&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20120044111&quot;, &quot;key&quot;: &quot;view.pricing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20152062109&quot;, &quot;key&quot;: &quot;submit.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20165800992&quot;, &quot;key&quot;: &quot;submit.upgrade_payment_form&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20171520319&quot;, &quot;key&quot;: &quot;submit.create_organization&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20222645674&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.discuss_your_needs&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20227443657&quot;, &quot;key&quot;: &quot;submit.verify_primary_user_email&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20234607160&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.try_enterprise&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20238175784&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.team&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20239847212&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.continue_free&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20251097193&quot;, &quot;key&quot;: &quot;recommended_plan&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20438619534&quot;, &quot;key&quot;: &quot;click.pricing_calculator.1_member&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20456699683&quot;, &quot;key&quot;: &quot;click.pricing_calculator.15_members&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20467868331&quot;, &quot;key&quot;: &quot;click.pricing_calculator.10_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20476267432&quot;, &quot;key&quot;: &quot;click.trial_days_remaining&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20476357660&quot;, &quot;key&quot;: &quot;click.discover_feature&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20479287901&quot;, &quot;key&quot;: &quot;click.pricing_calculator.custom_members&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20481107083&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_teacher_benefits&quot;}, {&quot;experimentIds&quot;: [&quot;20470139194&quot;], &quot;id&quot;: &quot;20483089392&quot;, &quot;key&quot;: &quot;click.pricing_calculator.5_members&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20484283944&quot;, &quot;key&quot;: &quot;click.onboarding_task&quot;}, {&quot;experimentIds&quot;: [&quot;20437502121&quot;], &quot;id&quot;: &quot;20484996281&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.apply_student_benefits&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20486713726&quot;, &quot;key&quot;: &quot;click.onboarding_task_breadcrumb&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20490791319&quot;, &quot;key&quot;: &quot;click.upgrade_to_enterprise&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20491786766&quot;, &quot;key&quot;: &quot;click.talk_to_us&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20494144087&quot;, &quot;key&quot;: &quot;click.dismiss_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20499722759&quot;, &quot;key&quot;: &quot;completed_all_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20500710104&quot;, &quot;key&quot;: &quot;completed_onboarding_tasks&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20513160672&quot;, &quot;key&quot;: &quot;click.read_doc&quot;}, {&quot;experimentIds&quot;: [&quot;20512531891&quot;], &quot;id&quot;: &quot;20516196762&quot;, &quot;key&quot;: &quot;actions_enabled&quot;}, {&quot;experimentIds&quot;: [&quot;20479227424&quot;], &quot;id&quot;: &quot;20518980986&quot;, &quot;key&quot;: &quot;click.dismiss_trial_banner&quot;}, {&quot;experimentIds&quot;: [&quot;20518037255&quot;], &quot;id&quot;: &quot;20535446721&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.dismiss_prompt&quot;}, {&quot;experimentIds&quot;: [&quot;20518037255&quot;], &quot;id&quot;: &quot;20557002247&quot;, &quot;key&quot;: &quot;click.issue_actions_prompt.setup_workflow&quot;}, {&quot;experimentIds&quot;: [&quot;20512531891&quot;], &quot;id&quot;: &quot;20595070227&quot;, &quot;key&quot;: &quot;click.pull_request_setup_workflow&quot;}], &quot;revision&quot;: &quot;861&quot;}" />
+  <!-- To prevent page flashing, the optimizely JS needs to be loaded in the
+    <head> tag before the DOM renders -->
+  <script crossorigin="anonymous" defer="defer" integrity="sha512-+jU501Se8pk+19AWlNhSR/uznFeWGI9ndTB52CGeN8Fze/Srm+6H0FN6FCnvSdvVMtHwsV1NGq1sX5RvBwEGAg==" type="application/javascript" src="https://github.githubassets.com/assets/optimizely-fa3539d3.js"></script>
+
+
+
+  
+
+      <meta name="hostname" content="github.com">
+    <meta name="user-login" content="awrcdhj">
+
+
+      <meta name="expected-hostname" content="github.com">
+
+      <meta name="js-proxy-site-detection-payload" content="ZTI3NzczYzRkOTJkMjMwNTBlZDNkYjE0NzZmZTk4MmYxNDAxNDMwZWY3NGJjN2Q1ZDQ2NWNlYzM2NjAzMWE5Y3x7InJlbW90ZV9hZGRyZXNzIjoiNDAuODMuNzMuMjMyIiwicmVxdWVzdF9pZCI6IkQwQUM6Nzc1RDoxMjhCOTg6MjY2NjEyOjYxMzBBRkM1IiwidGltZXN0YW1wIjoxNjMwNTgwNjgyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">
+
+    <meta name="enabled-features" content="BRANCH_PROTECTION_RULE_WEBHOOK,MARKETPLACE_PENDING_INSTALLATIONS,GITHUB_TOKEN_PERMISSION,PJAX_RELOAD_STATS">
+
+  <meta http-equiv="x-pjax-version" content="4caab0cb5f9c524145d45bde98db277f662a37e9f8dc3e75740a2e52791b368f">
+  <meta http-equiv="x-pjax-csp-version" content="3bd1d66a0bcbe1085660ff2182e7b557cc239441f75f3ec846eba18193d4c44b">
+  <meta http-equiv="x-pjax-css-version" content="d1dbd06045f5cc4dd24218c2c5462c5aff3da3123c0dbf632b6b4157f5c18c92">
+  <meta http-equiv="x-pjax-js-version" content="985b73e2b42ded5d1575290a6040f0c018ec4bb30fc593182ad72ed0de8cb89f">
+  
+
+    
+  <meta name="go-import" content="github.com/arloor/HttpProxy git https://github.com/arloor/HttpProxy.git">
+
+  <meta name="octolytics-dimension-user_id" content="21768987" /><meta name="octolytics-dimension-user_login" content="arloor" /><meta name="octolytics-dimension-repository_id" content="157892826" /><meta name="octolytics-dimension-repository_nwo" content="arloor/HttpProxy" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="157892826" /><meta name="octolytics-dimension-repository_network_root_nwo" content="arloor/HttpProxy" />
+
+
+
+    <link rel="canonical" href="https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-pjax-transient>
+
+
+  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
+
+  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
+
+  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">
+
+  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
+  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
+  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">
+
+<meta name="theme-color" content="#1e2327">
+<meta name="color-scheme" content="light dark" />
+
+  <link rel="apple-touch-icon" href="https://github.githubassets.com/apple-touch-icon.png">
+  <link rel="apple-touch-icon" sizes="180x180" href="https://github.githubassets.com/apple-touch-icon-180x180.png">
+  <meta name="apple-mobile-web-app-title" content="GitHub">
+
+  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">
+
+<meta name="enabled-homepage-translation-languages" content="">
+
+  </head>
+
+  <body class="logged-in env-production page-responsive page-blob" style="word-wrap: break-word;">
+    
+
+    <div class="position-relative js-header-wrapper ">
+      <a href="#start-of-content" class="p-3 color-bg-info-inverse color-text-white show-on-focus js-skip-to-content">Skip to content</a>
+      <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
+    <span style="background-color: #79b8ff;width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar"></span>
+</span>      
+      
+
+
+        
+            <header class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap" role="banner" >
+    <div class="Header-item mt-n1 mb-n1  d-none d-md-flex">
+      <a
+  class="Header-link "
+  href="https://github.com/"
+  data-hotkey="g d"
+  aria-label="Homepage "
+  data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="f034b90cc5e90407931f26ff75d1a6c39b66f479c48ac95257044a6f25c3edc3"
+>
+  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
+    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
+</svg>
+</a>
+
+    </div>
+
+    <div class="Header-item d-md-none">
+      <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="Header-link js-details-target btn-link">
+  
+  
+        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
+    <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
+</svg>
+
+  
+
+</button>    </div>
+
+    <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
+          
+
+
+
+<div class="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search"
+>
+  <div class="position-relative">
+    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="157892826" data-scoped-search-url="/arloor/HttpProxy/search" data-owner-scoped-search-url="/users/arloor/search" data-unscoped-search-url="/search" action="/arloor/HttpProxy/search" accept-charset="UTF-8" method="get">
+      <label class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container">
+            <a class="header-search-scope no-underline" href="/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">This repository</a>
+        <input type="text"
+          class="form-control input-sm header-search-input  js-site-search-focus js-site-search-field is-clearable"
+          data-hotkey=s,/
+          name="q"
+          data-test-selector="nav-search-input"
+          placeholder="Search"
+          data-unscoped-placeholder="Search GitHub"
+          data-scoped-placeholder="Search"
+          autocapitalize="off"
+          aria-label="Search this repository"
+        >
+        <input type="hidden" value="KUDbwo7PfNaamSIozNLhXZotqqbZa/IAyu8oHlCewxx4jbpBUhjpWmsa1K1xnyfhffyO3ewHdzBtBXGOEotnmQ==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
+        <input type="hidden" class="js-site-search-type-field" name="type" >
+      </label>
+</form>  </div>
+</div>
+
+        <nav class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
+      <a class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
+        Dashboard
+</a>
+    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
+        Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
+</a>
+    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
+      Issues
+</a>
+      <div class="d-flex position-relative">
+        <a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
+          Marketplace
+</a>      </div>
+
+    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
+      Explore
+</a>
+    <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:workspaces context:user" data-selected-links="/codespaces /codespaces" href="/codespaces">
+      Codespaces
+</a>
+      <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade" data-ga-click="Header, click, Nav menu - item:Sponsors" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;HEADER_SPONSORS_DASHBOARD&quot;,&quot;sponsorable_login&quot;:&quot;awrcdhj&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="415d26a0cba417f7b558e288320e531f70d7aab581523f2e5a988161d754057a" data-selected-links=" /sponsors/accounts" href="/sponsors/accounts">Sponsors</a>
+
+    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade" href="/settings/profile">
+      Settings
+</a>
+    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade" href="/awrcdhj">
+      <img class="avatar avatar-user" loading="lazy" decoding="async" src="https://avatars.githubusercontent.com/u/88377378?s=40&amp;v=4" width="20" height="20" alt="@awrcdhj" />
+      awrcdhj
+</a>
+    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wZdV/UjMYWRqHpik3PKNRav6KaXfIbBsUx6gKsyWXt2qu5loKsvuTXQ9uxgr09O5QkxmTVDtNpgJSnJWepNQ6Q==" />
+      <button
+        type="submit"
+        class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade d-md-none btn-link d-block width-full text-left"
+        style="padding-left: 2px;"
+        data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;sign out&quot;,&quot;label&quot;:&quot;icon:logout&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="c3ed509cea6066f7b1bd35debe9e89deb9d71c27b7e88281bfd9507e65ce742c"
+      >
+        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-sign-out v-align-middle">
+    <path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path>
+</svg>
+        Sign out
+      </button>
+</form></nav>
+
+    </div>
+
+    <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
+        <a
+  class="Header-link "
+  href="https://github.com/"
+  data-hotkey="g d"
+  aria-label="Homepage "
+  data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="f034b90cc5e90407931f26ff75d1a6c39b66f479c48ac95257044a6f25c3edc3"
+>
+  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
+    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
+</svg>
+</a>
+
+    </div>
+
+    <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
+        
+
+
+      <notification-indicator
+        class="js-socket-channel"
+        data-test-selector="notifications-indicator"
+        data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6ODgzNzczNzgiLCJ0IjoxNjMwNTgwNjgyfQ==--1d85f1bf95f1a3c4f704555a2740b8baec022a2720a53a246b3f353535da70ef">
+        <a href="/notifications"
+          class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
+          
+          aria-label="You have no unread notifications"
+          data-hotkey="g n"
+          data-ga-click="Header, go to notifications, icon:read"
+          data-target="notification-indicator.link">
+          <span class="mail-status  " data-target="notification-indicator.modifier"></span>
+          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell">
+    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
+</svg>
+        </a>
+      </notification-indicator>
+
+    </div>
+
+
+    <div class="Header-item position-relative d-none d-md-flex">
+        <details class="details-overlay details-reset">
+  <summary
+    class="Header-link"
+    aria-label="Create new…"
+    data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;create new&quot;,&quot;label&quot;:&quot;icon:add&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="03f60e23f841ccdfa5d4f7139ac28ddb94f5a8a34693556b3fb3a0a1440d6431"
+  >
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
+    <path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
+</svg> <span class="dropdown-caret"></span>
+  </summary>
+  <details-menu class="dropdown-menu dropdown-menu-sw">
+    
+<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
+  New repository
+</a>
+
+  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
+    Import repository
+  </a>
+
+<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
+  New gist
+</a>
+
+  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
+    New organization
+  </a>
+
+
+
+  </details-menu>
+</details>
+
+    </div>
+
+    <div class="Header-item position-relative mr-0 d-none d-md-flex">
+        
+  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/awrcdhj/feature_preview/indicator_check">
+
+  <summary
+    class="Header-link"
+    aria-label="View profile and more"
+    data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;show menu&quot;,&quot;label&quot;:&quot;icon:avatar&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="66a7a00a8630575dbb51767d3e687a5418507ed5b941657d2123449e438e6ee4"
+  >
+    <img src="https://avatars.githubusercontent.com/u/88377378?s=60&amp;v=4" alt="@awrcdhj" size="20" height="20" width="20" data-view-component="true" class="avatar-user avatar avatar-small"></img>
+      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 1px;" hidden></span>
+    <span class="dropdown-caret"></span>
+  </summary>
+  <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px" 
+      src="/users/88377378/menu" preload>
+      <include-fragment>
+        <p class="text-center mt-3" data-hide-on-error>
+          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
+  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
+  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
+</svg>
+        </p>
+        <p class="ml-1 mb-2 mt-2 color-text-primary" data-show-on-error>
+          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
+    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
+</svg>
+          Sorry, something went wrong.
+        </p>
+      </include-fragment>
+  </details-menu>
+</details>
+
+    </div>
+</header>
+
+            
+    </div>
+
+  <div id="start-of-content" class="show-on-focus"></div>
+
+
+
+
+
+
+    <div data-pjax-replace id="js-flash-container">
+
+
+  <template class="js-flash-template">
+    <div class="flash flash-full  {{ className }}">
+  <div class=" px-2" >
+    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
+    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
+</svg>
+    </button>
+    
+      <div>{{ message }}</div>
+
+  </div>
+</div>
+  </template>
+</div>
+
+
+    
+
+  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>
+
+
+
+
+
+  <div
+    class="application-main "
+    data-commit-hovercards-enabled
+    data-discussion-hovercards-enabled
+    data-issue-and-pr-hovercards-enabled
+  >
+        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
+    <main id="js-repo-pjax-container" data-pjax-container >
+      
+
+    
+
+
+
+
+  
+
+
+  <div id="repository-container-header" class="hx_page-header-bg pt-3 hide-full-screen mb-5" data-pjax-replace>
+
+      <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">
+
+        <div class="flex-auto min-width-0 width-fit mr-3">
+            <h1 class=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
+    <svg class="octicon octicon-repo color-text-secondary mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
+  <span class="author flex-self-stretch" itemprop="author">
+    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/arloor/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/arloor">arloor</a>
+  </span>
+  <span class="mx-1 flex-self-stretch color-text-secondary">/</span>
+  <strong itemprop="name" class="mr-2 flex-self-stretch">
+    <a data-pjax="#js-repo-pjax-container" href="/arloor/HttpProxy">HttpProxy</a>
+  </strong>
+  
+</h1>
+
+
+        </div>
+
+          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">
+
+  <li>
+        <notifications-list-subscription-form class="f5 position-relative d-flex">
+      <details
+        class="details-reset details-overlay f5 position-relative"
+        data-target="notifications-list-subscription-form.details"
+        data-action="toggle:notifications-list-subscription-form#detailsToggled"
+      >
+
+      <summary class="btn btn-sm rounded-right-0" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:157892826,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="07285c7bec0d7c1eb4ea3e90c595f378aa7ec0106949207a0141979bca7cd4fe" data-ga-click="Repository, click Watch settings, action:blob#show" aria-label="Notifications settings">
+          <span data-menu-button>
+            <span
+              hidden
+              
+              data-target="notifications-list-subscription-form.unwatchButtonCopy"
+            >
+              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
+    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
+</svg>
+              Unwatch
+            </span>
+            <span
+              hidden
+              
+              data-target="notifications-list-subscription-form.stopIgnoringButtonCopy"
+            >
+              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell-slash">
+    <path fill-rule="evenodd" d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
+</svg>
+              Stop ignoring
+            </span>
+            <span
+              
+              
+              data-target="notifications-list-subscription-form.watchButtonCopy"
+            >
+              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
+    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
+</svg>
+              Watch
+            </span>
+          </span>
+          <span class="dropdown-caret"></span>
+</summary>
+        <details-menu
+          class="SelectMenu  "
+          role="menu"
+          data-target="notifications-list-subscription-form.menu"
+          
+        >
+          <div class="SelectMenu-modal notifications-component-menu-modal">
+            <header class="SelectMenu-header">
+              <h3 class="SelectMenu-title">Notifications</h3>
+              <button class="SelectMenu-closeButton" type="button" aria-label="Close menu" data-action="click:notifications-list-subscription-form#closeMenu">
+                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
+    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
+</svg>
+              </button>
+            </header>
+
+            <div class="SelectMenu-list">
+              <form data-target="notifications-list-subscription-form.form" data-action="submit:notifications-list-subscription-form#submitForm" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wH+k84GvK3CzWOIdMjynMc9o7f2zw4zMwnREBHgzi+9taqUwW+Vn3lJJuWilvFICuiZwCW4uiShm+yYwN3gNWA==" />
+
+                <input type="hidden" name="repository_id" value="157892826">
+
+                <button
+                  type="submit"
+                  name="do"
+                  value="included"
+                  class="SelectMenu-item flex-items-start"
+                  role="menuitemradio"
+                  aria-checked="true"
+                  data-targets="notifications-list-subscription-form.subscriptionButtons"
+                  
+                >
+                  <span class="f5">
+                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+                  </span>
+                  <div>
+                    <div class="f5 text-bold">
+                      Participating and @mentions
+                    </div>
+                    <div class="text-small color-text-secondary text-normal pb-1">
+                      Only receive notifications from this repository when participating or @mentioned.
+                    </div>
+                  </div>
+                </button>
+
+                <button
+                  type="submit"
+                  name="do"
+                  value="subscribed"
+                  class="SelectMenu-item flex-items-start"
+                  role="menuitemradio"
+                  aria-checked="false"
+                  data-targets="notifications-list-subscription-form.subscriptionButtons"
+                >
+                  <span class="f5">
+                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+                  </span>
+                  <div>
+                    <div class="f5 text-bold">
+                      All Activity
+                    </div>
+                    <div class="text-small color-text-secondary text-normal pb-1">
+                      Notified of all notifications on this repository.
+                    </div>
+                  </div>
+                </button>
+
+                <button
+                  type="submit"
+                  name="do"
+                  value="ignore"
+                  class="SelectMenu-item flex-items-start"
+                  role="menuitemradio"
+                  aria-checked="false"
+                  data-targets="notifications-list-subscription-form.subscriptionButtons"
+                >
+                  <span class="f5">
+                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+                  </span>
+                  <div>
+                    <div class="f5 text-bold">
+                      Ignore
+                    </div>
+                    <div class="text-small color-text-secondary text-normal pb-1">
+                      Never be notified.
+                    </div>
+                  </div>
+                </button>
+</form>
+              <button
+                class="SelectMenu-item flex-items-start pr-3"
+                type="button"
+                role="menuitemradio"
+                data-target="notifications-list-subscription-form.customButton"
+                data-action="click:notifications-list-subscription-form#openCustomDialog"
+                aria-haspopup="true"
+                aria-checked="false"
+                
+              >
+                <span class="f5">
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+                </span>
+                <div>
+                  <div class="d-flex flex-items-start flex-justify-between">
+                    <div class="f5 text-bold">Custom</div>
+                    <div class="f5 pr-1">
+                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-right">
+    <path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path>
+</svg>
+                    </div>
+                  </div>
+                  <div class="text-small color-text-secondary text-normal pb-1">
+                    Select events you want to be notified of in addition to participating and @mentions.
+                  </div>
+                </div>
+              </button>
+
+                <div class="px-3 py-2 d-flex color-bg-secondary flex-items-center">
+                  <span class="f5">
+                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-mobile SelectMenu-icon SelectMenu-icon--device-mobile">
+    <path fill-rule="evenodd" d="M3.75 0A1.75 1.75 0 002 1.75v12.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 14.25V1.75A1.75 1.75 0 0012.25 0h-8.5zM3.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25V1.75zM8 13a1 1 0 100-2 1 1 0 000 2z"></path>
+</svg>
+                  </span>
+                  <span className="text-small color-text-secondary text-normal pb-1">
+                    Get push notifications on <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/app/apple-store/id1477376905?ct=watch-dropdown&amp;mt=8&amp;pt=524675">iOS</a> or <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.github.android&amp;referrer=utm_campaign%3Dwatch-dropdown%26utm_medium%3Dweb%26utm_source%3Dgithub">Android</a>.
+                  </span>
+                </div>
+            </div>
+          </div>
+        </details-menu>
+
+        <details-dialog class="notifications-component-dialog " data-target="notifications-list-subscription-form.customDialog" hidden>
+          <div class="SelectMenu-modal notifications-component-dialog-modal overflow-visible">
+            <form data-target="notifications-list-subscription-form.customform" data-action="submit:notifications-list-subscription-form#submitCustomForm" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Wnf+eNAbubkK/G2LhBmfrnvilWZ5ioXjxNvSQhedDw/3Yv+7ClH1F+vtNv4TmWqdDqwIkqRngAdgVLB2WNaJuA==" />
+
+              <input type="hidden" name="repository_id" value="157892826">
+
+              <header class="d-sm-none SelectMenu-header pb-0 border-bottom-0 px-2 px-sm-3">
+                <h1 class="f3 SelectMenu-title d-inline-flex">
+                  <button
+                    class="color-bg-primary border-0 px-2 py-0 m-0 Link--secondary f5"
+                    aria-label="Return to menu"
+                    type="button"
+                    data-action="click:notifications-list-subscription-form#closeCustomDialog"
+                  >
+                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-left">
+    <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
+</svg>
+                  </button>
+                  Custom
+                </h1>
+              </header>
+
+              <header class="d-none d-sm-flex flex-items-start pt-1">
+                <button
+                  class="border-0 px-2 pt-1 m-0 Link--secondary f5"
+                  style="background-color: transparent;"
+                  aria-label="Return to menu"
+                  type="button"
+                  data-action="click:notifications-list-subscription-form#closeCustomDialog"
+                >
+                  <svg style="position: relative; left: 2px; top: 1px" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-arrow-left">
+    <path fill-rule="evenodd" d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"></path>
+</svg>
+                </button>
+
+                <h1 class="pt-1 pr-4 pb-0 pl-0 f5 text-bold">
+                  Custom
+                </h1>
+              </header>
+
+              <fieldset>
+                <legend>
+                  <div class="text-small color-text-secondary pt-0 pr-3 pb-3 pl-6 pl-sm-5 border-bottom mb-3">
+                    Select events you want to be notified of in addition to participating and @mentions.
+                  </div>
+                </legend>
+                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
+                    <label class="f5 text-normal">
+                      <input
+                        type="checkbox"
+                        name="thread_types[]"
+                        value="Issue"
+                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
+                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
+                        
+                      >
+                      Issues
+                    </label>
+
+                  </div>
+                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
+                    <label class="f5 text-normal">
+                      <input
+                        type="checkbox"
+                        name="thread_types[]"
+                        value="PullRequest"
+                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
+                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
+                        
+                      >
+                      Pull requests
+                    </label>
+
+                  </div>
+                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
+                    <label class="f5 text-normal">
+                      <input
+                        type="checkbox"
+                        name="thread_types[]"
+                        value="Release"
+                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
+                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
+                        
+                      >
+                      Releases
+                    </label>
+
+                  </div>
+                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
+                    <label class="f5 text-normal">
+                      <input
+                        type="checkbox"
+                        name="thread_types[]"
+                        value="Discussion"
+                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
+                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
+                        
+                      >
+                      Discussions
+                    </label>
+
+                      <span
+                        class="tooltipped tooltipped-nw mr-2 p-1 float-right"
+                        
+                        aria-label="Discussions are not enabled for this repo">
+                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info color-icon-secondary">
+    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
+</svg>
+                      </span>
+                  </div>
+                  <div class="form-checkbox mr-3 ml-6 ml-sm-5 mb-2 mt-0">
+                    <label class="f5 text-normal">
+                      <input
+                        type="checkbox"
+                        name="thread_types[]"
+                        value="SecurityAlert"
+                        data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
+                        data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
+                        
+                      >
+                      Security alerts
+                    </label>
+
+                  </div>
+              </fieldset>
+              <div class="pt-2 pb-3 px-3 d-flex flex-justify-start flex-row-reverse">
+                <button
+                  type="submit"
+                  name="do"
+                  value="custom"
+                  class="btn btn-sm btn-primary ml-2"
+                  data-target="notifications-list-subscription-form.customSubmit"
+                  disabled
+                >Apply</button>
+
+                <button data-action="click:notifications-list-subscription-form#resetForm" data-close-dialog="" type="button" data-view-component="true" class="btn-sm btn">
+  
+  Cancel
+  
+
+</button>
+              </div>
+</form>          </div>
+        </details-dialog>
+        <div class="notifications-component-dialog-overlay"></div>
+      </details>
+        <a class="social-count"
+          href="/arloor/HttpProxy/watchers"
+          aria-label="5 users are watching this repository"
+          data-target="notifications-list-subscription-form.socialCount"
+        >
+          5
+        </a>
+    </notifications-list-subscription-form>
+
+
+
+  </li>
+
+  <li>
+        <div class="d-block js-toggler-container js-social-container starring-container on">
+    <form class="starred js-social-form" action="/arloor/HttpProxy/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="ulK/OOcbj9uWnIvPNFF+ECRx/K2S/ZC7Mln9pCY0Em9S0quQBi/qyp76OkGvDvF93pRxpNCTt6hZH8zm5qDKJw==" />
+      <input type="hidden" name="context" value="repository">
+      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar arloor/HttpProxy" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:157892826,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="3b491d83bd93576feab723ec7426ad1cbedfad1494fb5260d95ee5b1ec8e7329" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star-fill mr-1">
+    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
+</svg>
+        <span data-view-component="true">
+          Unstar
+</span></button>        <a class="social-count js-social-count" href="/arloor/HttpProxy/stargazers"
+           aria-label="130 users starred this repository">
+           130
+        </a>
+</form>
+    <form class="unstarred js-social-form" action="/arloor/HttpProxy/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Hk5bgLnRvTPtReJritMg1Xoa8OaF+Mnf8xJCIG9o0Z9/WNc8pEXZN2aSv0wJjIHCZAMgqYr4QeqEtowQBe8KLA==" />
+      <input type="hidden" name="context" value="repository">
+      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star arloor/HttpProxy" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:157892826,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="6010d232ebaf43d952214bdce3a56291d68ab87d9bb99dff3695eb018ce8f356" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-1">
+    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
+</svg>
+        <span data-view-component="true">
+          Star
+</span></button>        <a class="social-count js-social-count" href="/arloor/HttpProxy/stargazers"
+           aria-label="130 users starred this repository">
+          130
+        </a>
+</form>  </div>
+
+  </li>
+
+  <li>
+            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/arloor/HttpProxy/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="R9BmFCbKs8aQ4R1ImdQmhbEURdpebm0lRS7R4UzvOxb1rmSxVkY5zy4dJtLrqngDSJMHn0QnZQ3wKbYB6t9yfQ==" />
+              <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:157892826,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="552ac0b9663ae24a87513ebfb4ef50dbee7f55b4d48ee91b939751cdd87fc9d7" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of arloor/HttpProxy to your account" aria-label="Fork your own copy of arloor/HttpProxy to your account">                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked">
+    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
+</svg>
+                Fork
+</button></form>
+      <a href="/arloor/HttpProxy/network/members" class="social-count"
+         aria-label="67 users forked this repository">
+        67
+      </a>
+  </li>
+</ul>
+
+      </div>
+
+      <div id="responsive-meta-container" data-pjax-replace>
+</div>
+
+
+        
+
+  <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax UnderlineNav px-3 px-md-4 px-lg-5">
+
+    <ul data-view-component="true" class="UnderlineNav-body list-style-none">
+        <li data-view-component="true" class="d-flex">
+  <a id="code-tab" href="/arloor/HttpProxy" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /arloor/HttpProxy" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" data-pjax="#repo-content-pjax-container" aria-current="page" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
+</svg>
+          <span data-content="Code">Code</span>
+            <span title="Not available" data-view-component="true" class="Counter"></span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="issues-tab" href="/arloor/HttpProxy/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /arloor/HttpProxy/issues" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
+    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
+</svg>
+          <span data-content="Issues">Issues</span>
+            <span title="1" data-view-component="true" class="Counter">1</span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="pull-requests-tab" href="/arloor/HttpProxy/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /arloor/HttpProxy/pulls" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
+</svg>
+          <span data-content="Pull requests">Pull requests</span>
+            <span title="1" data-view-component="true" class="Counter">1</span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="actions-tab" href="/arloor/HttpProxy/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /arloor/HttpProxy/actions" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
+</svg>
+          <span data-content="Actions">Actions</span>
+            <span title="Not available" data-view-component="true" class="Counter"></span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="projects-tab" href="/arloor/HttpProxy/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /arloor/HttpProxy/projects" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
+</svg>
+          <span data-content="Projects">Projects</span>
+            <span title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="wiki-tab" href="/arloor/HttpProxy/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /arloor/HttpProxy/wiki" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
+</svg>
+          <span data-content="Wiki">Wiki</span>
+            <span title="Not available" data-view-component="true" class="Counter"></span>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="security-tab" href="/arloor/HttpProxy/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /arloor/HttpProxy/security" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
+</svg>
+          <span data-content="Security">Security</span>
+            <include-fragment src="/arloor/HttpProxy/security/overall-count" accept="text/fragment+html"></include-fragment>
+
+    
+</a></li>
+        <li data-view-component="true" class="d-flex">
+  <a id="insights-tab" href="/arloor/HttpProxy/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /arloor/HttpProxy/pulse" data-ga-click="Repository, Navigation click, Insights tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
+    
+                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
+    <path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
+</svg>
+          <span data-content="Insights">Insights</span>
+            <span title="Not available" data-view-component="true" class="Counter"></span>
+
+    
+</a></li>
+</ul>
+      <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions  js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <details data-view-component="true" class="details-overlay details-reset position-relative">
+  <summary role="button" data-view-component="true">          <div class="UnderlineNav-item mr-0 border-0">
+            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
+    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
+</svg>
+            <span class="sr-only">More</span>
+          </div>
+</summary>
+  <div data-view-component="true">          <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
+  
+            <ul>
+                <li data-menu-item="i0code-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item selected dropdown-item" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /arloor/HttpProxy" href="/arloor/HttpProxy">
+                    Code
+</a>                </li>
+                <li data-menu-item="i1issues-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_issues repo_labels repo_milestones /arloor/HttpProxy/issues" href="/arloor/HttpProxy/issues">
+                    Issues
+</a>                </li>
+                <li data-menu-item="i2pull-requests-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_pulls checks /arloor/HttpProxy/pulls" href="/arloor/HttpProxy/pulls">
+                    Pull requests
+</a>                </li>
+                <li data-menu-item="i3actions-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_actions /arloor/HttpProxy/actions" href="/arloor/HttpProxy/actions">
+                    Actions
+</a>                </li>
+                <li data-menu-item="i4projects-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_projects new_repo_project repo_project /arloor/HttpProxy/projects" href="/arloor/HttpProxy/projects">
+                    Projects
+</a>                </li>
+                <li data-menu-item="i5wiki-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_wiki /arloor/HttpProxy/wiki" href="/arloor/HttpProxy/wiki">
+                    Wiki
+</a>                </li>
+                <li data-menu-item="i6security-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="security overview alerts policy token_scanning code_scanning /arloor/HttpProxy/security" href="/arloor/HttpProxy/security">
+                    Security
+</a>                </li>
+                <li data-menu-item="i7insights-tab" hidden>
+                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /arloor/HttpProxy/pulse" href="/arloor/HttpProxy/pulse">
+                    Insights
+</a>                </li>
+            </ul>
+
+</details-menu></div>
+</details></div>
+</nav>
+
+  </div>
+
+
+
+<div class="clearfix new-discussion-timeline container-xl px-3 px-md-4 px-lg-5">
+  <div id="repo-content-pjax-container" class="repository-content " >
+
+      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,E,c o d e">Open in github.dev</a>
+
+
+
+    
+      
+  
+  
+<div>
+  
+
+
+    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/arloor/HttpProxy/blob/f799f0482b200b336e986bbe8d477d188fb48c3f/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">Permalink</a>
+
+    <!-- blob contrib key: blob_contributors:v22:38c12024ce0670fad9a86dc86f6ad406bb189b6206a19d5d225b09465d25aba8 -->
+
+    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
+      
+<div class="position-relative">
+  <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
+    <summary class="btn css-truncate"
+            data-hotkey="w"
+            title="Switch branches or tags">
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-branch">
+    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
+</svg>
+      <span class="css-truncate-target" data-menu-button>master</span>
+      <span class="dropdown-caret"></span>
+    </summary>
+
+      
+<div class="SelectMenu">
+  <div class="SelectMenu-modal">
+    <header class="SelectMenu-header">
+      <span class="SelectMenu-title">Switch branches/tags</span>
+      <button class="SelectMenu-closeButton" type="button" data-toggle-for="branch-select-menu"><svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
+    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
+</svg></button>
+    </header>
+
+    <input-demux data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput">
+      <tab-container class="d-flex flex-column js-branches-tags-tabs" style="min-height: 0;">
+        <div class="SelectMenu-filter">
+          <input data-target="input-demux.source"
+                 id="context-commitish-filter-field"
+                 class="SelectMenu-input form-control"
+                 aria-owns="ref-list-branches"
+                 data-controls-ref-menu-id="ref-list-branches"
+                 autofocus
+                 autocomplete="off"
+                 aria-label="Filter branches/tags"
+                 placeholder="Filter branches/tags"
+                 type="text"
+          >
+        </div>
+
+        <div class="SelectMenu-tabs" role="tablist" data-target="input-demux.control" >
+          <button class="SelectMenu-tab" type="button" role="tab" aria-selected="true">Branches</button>
+          <button class="SelectMenu-tab" type="button" role="tab">Tags</button>
+        </div>
+
+        <div role="tabpanel" id="ref-list-branches" data-filter-placeholder="Filter branches/tags" class="d-flex flex-column flex-auto overflow-auto" tabindex="">
+          <ref-selector
+            type="branch"
+            data-targets="input-demux.sinks"
+            data-action="
+              input-entered:ref-selector#inputEntered
+              tab-selected:ref-selector#tabSelected
+              focus-list:ref-selector#focusFirstListMember
+            "
+            query-endpoint="/arloor/HttpProxy/refs"
+            
+            cache-key="v0:1628869024.629015"
+            current-committish="bWFzdGVy"
+            default-branch="bWFzdGVy"
+            name-with-owner="YXJsb29yL0h0dHBQcm94eQ=="
+            prefetch-on-mouseover
+          >
+
+            <template data-target="ref-selector.fetchFailedTemplate">
+              <div class="SelectMenu-message" data-index="{{ index }}">Could not load branches</div>
+            </template>
+
+              <template data-target="ref-selector.noMatchTemplate">
+    <div class="SelectMenu-message">Nothing to show</div>
+</template>
+
+
+            <!-- TODO: this max-height is necessary or else the branch list won't scroll.  why? -->
+            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list " style="max-height: 330px" data-pjax="#repo-content-pjax-container">
+              <div class="SelectMenu-loading pt-3 pb-0" aria-label="Menu is loading">
+                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
+  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
+  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
+</svg>
+              </div>
+            </div>
+
+              <template data-target="ref-selector.itemTemplate">
+  <a href="https://github.com/arloor/HttpProxy/blob/{{ urlEncodedRefName }}/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
+    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+    <span class="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}">{{ refName }}</span>
+    <span hidden="{{ isNotDefault }}" class="Label Label--secondary flex-self-start">default</span>
+  </a>
+</template>
+
+
+              <footer class="SelectMenu-footer"><a href="/arloor/HttpProxy/branches">View all branches</a></footer>
+          </ref-selector>
+
+        </div>
+
+        <div role="tabpanel" id="tags-menu" data-filter-placeholder="Find a tag" class="d-flex flex-column flex-auto overflow-auto" tabindex="" hidden>
+          <ref-selector
+            type="tag"
+            data-action="
+              input-entered:ref-selector#inputEntered
+              tab-selected:ref-selector#tabSelected
+              focus-list:ref-selector#focusFirstListMember
+            "
+            data-targets="input-demux.sinks"
+            query-endpoint="/arloor/HttpProxy/refs"
+            cache-key="v0:1628869024.629015"
+            current-committish="bWFzdGVy"
+            default-branch="bWFzdGVy"
+            name-with-owner="YXJsb29yL0h0dHBQcm94eQ=="
+          >
+
+            <template data-target="ref-selector.fetchFailedTemplate">
+              <div class="SelectMenu-message" data-index="{{ index }}">Could not load tags</div>
+            </template>
+
+            <template data-target="ref-selector.noMatchTemplate">
+              <div class="SelectMenu-message" data-index="{{ index }}">Nothing to show</div>
+            </template>
+
+              <template data-target="ref-selector.itemTemplate">
+  <a href="https://github.com/arloor/HttpProxy/blob/{{ urlEncodedRefName }}/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" class="SelectMenu-item" role="menuitemradio" rel="nofollow" aria-checked="{{ isCurrent }}" data-index="{{ index }}">
+    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+    <span class="flex-1 css-truncate css-truncate-overflow {{ isFilteringClass }}">{{ refName }}</span>
+    <span hidden="{{ isNotDefault }}" class="Label Label--secondary flex-self-start">default</span>
+  </a>
+</template>
+
+
+            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list" style="max-height: 330px" data-pjax="#repo-content-pjax-container">
+              <div class="SelectMenu-loading pt-3 pb-0" aria-label="Menu is loading">
+                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
+  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
+  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
+</svg>
+              </div>
+            </div>
+              <footer class="SelectMenu-footer"><a href="/arloor/HttpProxy/tags">View all tags</a></footer>
+          </ref-selector>
+        </div>
+      </tab-container>
+    </input-demux>
+  </div>
+</div>
+
+  </details>
+
+</div>
+
+      <h2 id="blob-path" class="breadcrumb flex-auto flex-self-center min-width-0 text-normal mx-2 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
+        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy"><span>HttpProxy</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src/main"><span>main</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src/main/java"><span>java</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src/main/java/com"><span>com</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src/main/java/com/arloor"><span>arloor</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="#repo-content-pjax-container" href="/arloor/HttpProxy/tree/master/src/main/java/com/arloor/forwardproxy"><span>forwardproxy</span></a></span><span class="separator">/</span><strong class="final-path">HttpProxyConnectHandler.java</strong>
+      </h2>
+      <a href="/arloor/HttpProxy/find/master"
+            class="js-pjax-capture-input btn mr-2 d-none d-md-block"
+            data-pjax
+            data-hotkey="t">
+        Go to file
+      </a>
+
+      <details id="blob-more-options-details" data-view-component="true" class="details-overlay details-reset position-relative">
+  <summary role="button" data-view-component="true" class="btn">
+  
+            <svg aria-label="More options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
+    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
+</svg>
+
+  
+
+</summary>
+  <div data-view-component="true">          <ul class="dropdown-menu dropdown-menu-sw">
+            <li class="d-block d-md-none">
+              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:157892826,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="c8d96995edc774f85e1f47dc3f96857bb1e84ece24a602663a87fa13ccea82de" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/arloor/HttpProxy/find/master">
+                <span class="flex-auto">Go to file</span>
+                <span class="text-small color-text-secondary" aria-hidden="true">T</span>
+</a>            </li>
+            <li data-toggle-for="blob-more-options-details">
+              <button data-toggle-for="jumpto-line-details-dialog" type="button" data-view-component="true" class="dropdown-item btn-link">
+  
+  
+                <span class="d-flex flex-items-baseline">
+                  <span class="flex-auto">Go to line</span>
+                  <span class="text-small color-text-secondary" aria-hidden="true">L</span>
+                </span>
+
+  
+
+</button>            </li>
+            <li class="dropdown-divider" role="none"></li>
+            <li>
+              <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy path" value="src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-view-component="true" class="dropdown-item cursor-pointer">
+    
+                Copy path
+
+</clipboard-copy>            </li>
+            <li>
+              <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy permalink" value="https://github.com/arloor/HttpProxy/blob/f799f0482b200b336e986bbe8d477d188fb48c3f/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-view-component="true" class="dropdown-item cursor-pointer">
+    
+                <span class="d-flex flex-items-baseline">
+                  <span class="flex-auto">Copy permalink</span>
+                </span>
+
+</clipboard-copy>            </li>
+          </ul>
+</div>
+</details>    </div>
+
+
+
+
+    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
+      <include-fragment src="/arloor/HttpProxy/contributors/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" class="commit-loader">
+        <div class="Box-header hx_commit-tease d-flex flex-items-center">
+          <div class="Skeleton avatar avatar-user flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1" style="width:24px;height:24px;"></div>
+          <div class="Skeleton Skeleton--text col-5 ml-2">&nbsp;</div>
+        </div>
+
+        <div class="Box-body d-flex flex-items-center" >
+          <div class="Skeleton Skeleton--text col-1">&nbsp;</div>
+          <span class="color-text-danger h6 loader-error">Cannot retrieve contributors at this time</span>
+        </div>
+</include-fragment>    </div>
+
+
+
+
+      
+
+
+
+
+
+
+
+  
+    <div data-target="readme-toc.content" class="Box mt-3 position-relative
+    ">
+      
+  <div
+    class="Box-header py-2 pr-2 d-flex flex-shrink-0 flex-md-row flex-items-center"
+    
+  >
+
+
+  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">
+
+      229 lines (211 sloc)
+      <span class="file-info-divider"></span>
+    12.9 KB
+  </div>
+
+  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between hide-sm hide-md">
+
+    <div class="BtnGroup">
+      <a href="/arloor/HttpProxy/raw/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" id="raw-url" role="button" data-view-component="true" class="btn-sm btn BtnGroup-item">
+  
+  Raw
+  
+
+</a>
+        <a href="/arloor/HttpProxy/blame/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-hotkey="b" role="button" data-view-component="true" class="js-update-url-with-hash btn-sm btn BtnGroup-item">
+  
+  Blame
+  
+
+</a>
+    </div>
+
+    <div>
+
+          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/arloor/HttpProxy/edit/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="M+Ch8zIdFB2d+5/48ZKCyjyUx2dTBZALEk8tU/ieqeBEeFnW8UEhEnp+5PV/Xt0pzr0n54NUid4W3qVc/yCA2A==" />
+            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
+              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
+              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
+    <path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
+</svg>
+            </button>
+</form>
+          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/arloor/HttpProxy/delete/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="ZA86GSUYAP2FblFrptbpR3lxLfXI5syv0Yujd6kvkZbksKcx95fWQSEsz8PfLS9R16LfmY2ZeDFYR6hvwUydxg==" />
+            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
+              aria-label="Fork this project and delete the file" data-disable-with>
+              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
+    <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
+</svg>
+            </button>
+</form>    </div>
+  </div>
+
+    <div class="d-flex hide-lg hide-xl flex-order-2 flex-grow-0">
+      <details class="dropdown details-reset details-overlay d-inline-block">
+        <summary class="btn-octicon" aria-haspopup="true" aria-label="possible actions">
+          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
+    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
+</svg>
+        </summary>
+
+        <ul class="dropdown-menu dropdown-menu-sw">
+          <li>
+            <a class="dropdown-item" href="/arloor/HttpProxy/raw/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">
+              View raw
+            </a>
+          </li>
+            <li>
+              <a class="dropdown-item" href="/arloor/HttpProxy/blame/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">
+                View blame
+              </a>
+            </li>
+
+              <li class="dropdown-divider" role="none"></li>
+              <li>
+                <a class="dropdown-item" href="/arloor/HttpProxy/edit/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">Edit file</a>
+              </li>
+              <li>
+                <a class="dropdown-item menu-item-danger" href="/arloor/HttpProxy/delete/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">Delete file</a>
+              </li>
+        </ul>
+      </details>
+    </div>
+</div>
+
+
+      
+  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-java  gist-border-0">
+
+      
+<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
+      <tr>
+        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
+        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">package</span> <span class="pl-smi">com.arloor.forwardproxy</span>;</td>
+      </tr>
+      <tr>
+        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
+        <td id="LC2" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
+        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">com.arloor.forwardproxy.util.OsHelper</span>;</td>
+      </tr>
+      <tr>
+        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
+        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">com.arloor.forwardproxy.util.SocksServerUtils</span>;</td>
+      </tr>
+      <tr>
+        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
+        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">com.arloor.forwardproxy.vo.Config</span>;</td>
+      </tr>
+      <tr>
+        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
+        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">com.arloor.forwardproxy.web.Dispatcher</span>;</td>
+      </tr>
+      <tr>
+        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
+        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.bootstrap.Bootstrap</span>;</td>
+      </tr>
+      <tr>
+        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
+        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.channel.*</span>;</td>
+      </tr>
+      <tr>
+        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
+        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.handler.codec.http.*</span>;</td>
+      </tr>
+      <tr>
+        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
+        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.handler.logging.LogLevel</span>;</td>
+      </tr>
+      <tr>
+        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
+        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.handler.logging.LoggingHandler</span>;</td>
+      </tr>
+      <tr>
+        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
+        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.util.ReferenceCountUtil</span>;</td>
+      </tr>
+      <tr>
+        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
+        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.util.concurrent.Future</span>;</td>
+      </tr>
+      <tr>
+        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
+        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.util.concurrent.FutureListener</span>;</td>
+      </tr>
+      <tr>
+        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
+        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">io.netty.util.concurrent.Promise</span>;</td>
+      </tr>
+      <tr>
+        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
+        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">org.slf4j.Logger</span>;</td>
+      </tr>
+      <tr>
+        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
+        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">org.slf4j.LoggerFactory</span>;</td>
+      </tr>
+      <tr>
+        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
+        <td id="LC18" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
+        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">java.net.InetSocketAddress</span>;</td>
+      </tr>
+      <tr>
+        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
+        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">java.util.ArrayList</span>;</td>
+      </tr>
+      <tr>
+        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
+        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-smi">java.util.Map</span>;</td>
+      </tr>
+      <tr>
+        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
+        <td id="LC22" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
+        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import static</span> <span class="pl-smi">io.netty.handler.codec.http.HttpResponseStatus.INTERNAL_SERVER_ERROR</span>;</td>
+      </tr>
+      <tr>
+        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
+        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import static</span> <span class="pl-smi">io.netty.handler.codec.http.HttpResponseStatus.PROXY_AUTHENTICATION_REQUIRED</span>;</td>
+      </tr>
+      <tr>
+        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
+        <td id="LC25" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
+        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">HttpProxyConnectHandler</span> <span class="pl-k">extends</span> <span class="pl-e">SimpleChannelInboundHandler&lt;<span class="pl-smi">HttpObject</span>&gt;</span> {</td>
+      </tr>
+      <tr>
+        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
+        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">static</span> <span class="pl-k">final</span> <span class="pl-smi">Logger</span> log <span class="pl-k">=</span> <span class="pl-smi">LoggerFactory</span><span class="pl-k">.</span>getLogger(<span class="pl-smi">HttpProxyConnectHandler</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
+        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">final</span> <span class="pl-k">Map&lt;<span class="pl-smi">String</span>, <span class="pl-smi">String</span>&gt;</span> auths;</td>
+      </tr>
+      <tr>
+        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
+        <td id="LC29" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
+        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">HttpProxyConnectHandler</span>(<span class="pl-k">Map&lt;<span class="pl-smi">String</span>, <span class="pl-smi">String</span>&gt;</span> <span class="pl-v">auths</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
+        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span><span class="pl-k">.</span>auths <span class="pl-k">=</span> auths;</td>
+      </tr>
+      <tr>
+        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
+        <td id="LC32" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
+        <td id="LC33" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
+        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">final</span> <span class="pl-smi">Bootstrap</span> b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">Bootstrap</span>();</td>
+      </tr>
+      <tr>
+        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
+        <td id="LC35" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
+        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-smi">String</span> host;</td>
+      </tr>
+      <tr>
+        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
+        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">int</span> port;</td>
+      </tr>
+      <tr>
+        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
+        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-smi">HttpRequest</span> request;</td>
+      </tr>
+      <tr>
+        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
+        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">ArrayList&lt;<span class="pl-smi">HttpContent</span>&gt;</span> contents <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-k">ArrayList&lt;&gt;</span>();</td>
+      </tr>
+      <tr>
+        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
+        <td id="LC40" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
+        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
+        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">channelReadComplete</span>(<span class="pl-smi">ChannelHandlerContext</span> <span class="pl-v">ctx</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
+        <td id="LC43" class="blob-code blob-code-inner js-file-line">        ctx<span class="pl-k">.</span>flush();</td>
+      </tr>
+      <tr>
+        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
+        <td id="LC44" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
+        <td id="LC45" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
+        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
+        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">channelRead0</span>(<span class="pl-k">final</span> <span class="pl-smi">ChannelHandlerContext</span> <span class="pl-v">ctx</span>, <span class="pl-smi">HttpObject</span> <span class="pl-v">msg</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
+        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (msg <span class="pl-k">instanceof</span> <span class="pl-smi">HttpRequest</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
+        <td id="LC49" class="blob-code blob-code-inner js-file-line">            request <span class="pl-k">=</span> (<span class="pl-smi">HttpRequest</span>) msg;</td>
+      </tr>
+      <tr>
+        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
+        <td id="LC50" class="blob-code blob-code-inner js-file-line">            setHostPort(ctx);</td>
+      </tr>
+      <tr>
+        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
+        <td id="LC51" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
+        <td id="LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>SimpleChannelInboundHandler会将HttpContent中的bytebuf Release，但是这个还会转给relayHandler，所以需要在这里预先retain</span></td>
+      </tr>
+      <tr>
+        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
+        <td id="LC53" class="blob-code blob-code-inner js-file-line">            ((<span class="pl-smi">HttpContent</span>) msg)<span class="pl-k">.</span>content()<span class="pl-k">.</span>retain();</td>
+      </tr>
+      <tr>
+        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
+        <td id="LC54" class="blob-code blob-code-inner js-file-line">            contents<span class="pl-k">.</span>add((<span class="pl-smi">HttpContent</span>) msg);</td>
+      </tr>
+      <tr>
+        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
+        <td id="LC55" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>一个完整的Http请求被收到，开始处理该请求</span></td>
+      </tr>
+      <tr>
+        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
+        <td id="LC56" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (msg <span class="pl-k">instanceof</span> <span class="pl-smi">LastHttpContent</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
+        <td id="LC57" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">String</span> clientHostname <span class="pl-k">=</span> ((<span class="pl-smi">InetSocketAddress</span>) ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>remoteAddress())<span class="pl-k">.</span>getAddress()<span class="pl-k">.</span>getHostAddress();</td>
+      </tr>
+      <tr>
+        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
+        <td id="LC58" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> bugfix:当且仅当为connect请求时，暂停读，防止跟随的内容被忽略</span></td>
+      </tr>
+      <tr>
+        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
+        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>                if (request.method().equals(HttpMethod.CONNECT)) {</span></td>
+      </tr>
+      <tr>
+        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
+        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>                    ctx.channel().config().setAutoRead(false);</span></td>
+      </tr>
+      <tr>
+        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
+        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>                }</span></td>
+      </tr>
+      <tr>
+        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
+        <td id="LC62" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> 1. 如果url以 / 开头，则认为是直接请求，而不是代理请求</span></td>
+      </tr>
+      <tr>
+        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
+        <td id="LC63" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (request<span class="pl-k">.</span>uri()<span class="pl-k">.</span>startsWith(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)) {</td>
+      </tr>
+      <tr>
+        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
+        <td id="LC64" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">Dispatcher</span><span class="pl-k">.</span>handle(request, ctx);</td>
+      </tr>
+      <tr>
+        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
+        <td id="LC65" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> 这里需要将content全部release</span></td>
+      </tr>
+      <tr>
+        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
+        <td id="LC66" class="blob-code blob-code-inner js-file-line">                    contents<span class="pl-k">.</span>forEach(<span class="pl-smi">ReferenceCountUtil</span><span class="pl-k">::</span>release);</td>
+      </tr>
+      <tr>
+        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
+        <td id="LC67" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
+      </tr>
+      <tr>
+        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
+        <td id="LC68" class="blob-code blob-code-inner js-file-line">                }</td>
+      </tr>
+      <tr>
+        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
+        <td id="LC69" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
+        <td id="LC70" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span>2. 检验auth</span></td>
+      </tr>
+      <tr>
+        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
+        <td id="LC71" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">String</span> basicAuth <span class="pl-k">=</span> request<span class="pl-k">.</span>headers()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">&quot;</span>Proxy-Authorization<span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
+        <td id="LC72" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">String</span> userName <span class="pl-k">=</span> getUserName(basicAuth, auths);</td>
+      </tr>
+      <tr>
+        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
+        <td id="LC73" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (auths <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> auths<span class="pl-k">.</span>size() <span class="pl-k">!=</span> <span class="pl-c1">0</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
+        <td id="LC74" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (basicAuth <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">!</span>auths<span class="pl-k">.</span>containsKey(basicAuth)) {</td>
+      </tr>
+      <tr>
+        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
+        <td id="LC75" class="blob-code blob-code-inner js-file-line">                        log<span class="pl-k">.</span>warn(clientHostname <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> request<span class="pl-k">.</span>method() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> request<span class="pl-k">.</span>uri() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  {<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> host <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>} wrong_auth:{<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> basicAuth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
+        <td id="LC76" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c"><span class="pl-c">//</span> 这里需要将content全部release</span></td>
+      </tr>
+      <tr>
+        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
+        <td id="LC77" class="blob-code blob-code-inner js-file-line">                        contents<span class="pl-k">.</span>forEach(<span class="pl-smi">ReferenceCountUtil</span><span class="pl-k">::</span>release);</td>
+      </tr>
+      <tr>
+        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
+        <td id="LC78" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">DefaultHttpResponse</span> responseAuthRequired;</td>
+      </tr>
+      <tr>
+        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
+        <td id="LC79" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (<span class="pl-smi">Config</span><span class="pl-k">.</span>ask4Authcate <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>request<span class="pl-k">.</span>method()<span class="pl-k">.</span>equals(<span class="pl-smi">HttpMethod</span><span class="pl-c1"><span class="pl-k">.</span>OPTIONS</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>request<span class="pl-k">.</span>method()<span class="pl-k">.</span>equals(<span class="pl-smi">HttpMethod</span><span class="pl-c1"><span class="pl-k">.</span>HEAD</span>)) {</td>
+      </tr>
+      <tr>
+        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
+        <td id="LC80" class="blob-code blob-code-inner js-file-line">                            responseAuthRequired <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-c1">PROXY_AUTHENTICATION_REQUIRED</span>);</td>
+      </tr>
+      <tr>
+        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
+        <td id="LC81" class="blob-code blob-code-inner js-file-line">                            responseAuthRequired<span class="pl-k">.</span>headers()<span class="pl-k">.</span>add(<span class="pl-s"><span class="pl-pds">&quot;</span>Proxy-Authenticate<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Basic realm=<span class="pl-cce">\&quot;</span>netty forwardproxy<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
+        <td id="LC82" class="blob-code blob-code-inner js-file-line">                        } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
+        <td id="LC83" class="blob-code blob-code-inner js-file-line">                            responseAuthRequired <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-c1">INTERNAL_SERVER_ERROR</span>);</td>
+      </tr>
+      <tr>
+        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
+        <td id="LC84" class="blob-code blob-code-inner js-file-line">                        }</td>
+      </tr>
+      <tr>
+        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
+        <td id="LC85" class="blob-code blob-code-inner js-file-line">                        ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>writeAndFlush(responseAuthRequired);</td>
+      </tr>
+      <tr>
+        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
+        <td id="LC86" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(ctx<span class="pl-k">.</span>channel());</td>
+      </tr>
+      <tr>
+        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
+        <td id="LC87" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span>;</td>
+      </tr>
+      <tr>
+        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
+        <td id="LC88" class="blob-code blob-code-inner js-file-line">                    }</td>
+      </tr>
+      <tr>
+        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
+        <td id="LC89" class="blob-code blob-code-inner js-file-line">                }</td>
+      </tr>
+      <tr>
+        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
+        <td id="LC90" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
+        <td id="LC91" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span>3. 这里进入代理请求处理，分为两种：CONNECT方法和其他HTTP方法</span></td>
+      </tr>
+      <tr>
+        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
+        <td id="LC92" class="blob-code blob-code-inner js-file-line">                log<span class="pl-k">.</span>info(<span class="pl-s"><span class="pl-pds">&quot;</span>{}@{} ==&gt; {} {} {}<span class="pl-pds">&quot;</span></span>, userName, clientHostname, request<span class="pl-k">.</span>method(), request<span class="pl-k">.</span>uri(), <span class="pl-k">!</span>request<span class="pl-k">.</span>uri()<span class="pl-k">.</span>equals(request<span class="pl-k">.</span>headers()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">&quot;</span>Host<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Host=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> request<span class="pl-k">.</span>headers()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">&quot;</span>Host<span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
+        <td id="LC93" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">Promise&lt;<span class="pl-smi">Channel</span>&gt;</span> promise <span class="pl-k">=</span> ctx<span class="pl-k">.</span>executor()<span class="pl-k">.</span>newPromise();</td>
+      </tr>
+      <tr>
+        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
+        <td id="LC94" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (request<span class="pl-k">.</span>method()<span class="pl-k">.</span>equals(<span class="pl-smi">HttpMethod</span><span class="pl-c1"><span class="pl-k">.</span>CONNECT</span>)) {</td>
+      </tr>
+      <tr>
+        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
+        <td id="LC95" class="blob-code blob-code-inner js-file-line">                    promise<span class="pl-k">.</span>addListener(</td>
+      </tr>
+      <tr>
+        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
+        <td id="LC96" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">new</span> <span class="pl-k">FutureListener&lt;<span class="pl-smi">Channel</span>&gt;</span>() {</td>
+      </tr>
+      <tr>
+        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
+        <td id="LC97" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
+        <td id="LC98" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">operationComplete</span>(<span class="pl-k">final</span> <span class="pl-k">Future&lt;<span class="pl-smi">Channel</span>&gt;</span> <span class="pl-v">future</span>) <span class="pl-k">throws</span> <span class="pl-smi">Exception</span> {</td>
+      </tr>
+      <tr>
+        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
+        <td id="LC99" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">final</span> <span class="pl-smi">Channel</span> outboundChannel <span class="pl-k">=</span> future<span class="pl-k">.</span>getNow();</td>
+      </tr>
+      <tr>
+        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
+        <td id="LC100" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">if</span> (future<span class="pl-k">.</span>isSuccess()) {</td>
+      </tr>
+      <tr>
+        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
+        <td id="LC101" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-smi">ChannelFuture</span> responseFuture <span class="pl-k">=</span> ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>writeAndFlush(</td>
+      </tr>
+      <tr>
+        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
+        <td id="LC102" class="blob-code blob-code-inner js-file-line">                                                <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-k">new</span> <span class="pl-smi">HttpResponseStatus</span>(<span class="pl-c1">200</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Connection Established<span class="pl-pds">&quot;</span></span>)));</td>
+      </tr>
+      <tr>
+        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
+        <td id="LC103" class="blob-code blob-code-inner js-file-line">                                        responseFuture<span class="pl-k">.</span>addListener(<span class="pl-k">new</span> <span class="pl-smi">ChannelFutureListener</span>() {</td>
+      </tr>
+      <tr>
+        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
+        <td id="LC104" class="blob-code blob-code-inner js-file-line">                                            <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
+        <td id="LC105" class="blob-code blob-code-inner js-file-line">                                            <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">operationComplete</span>(<span class="pl-smi">ChannelFuture</span> <span class="pl-v">channelFuture</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
+        <td id="LC106" class="blob-code blob-code-inner js-file-line">                                                <span class="pl-k">if</span> (channelFuture<span class="pl-k">.</span>isSuccess()) {</td>
+      </tr>
+      <tr>
+        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
+        <td id="LC107" class="blob-code blob-code-inner js-file-line">                                                    ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpRequestDecoder</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
+        <td id="LC108" class="blob-code blob-code-inner js-file-line">                                                    ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpResponseEncoder</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
+        <td id="LC109" class="blob-code blob-code-inner js-file-line">                                                    ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpServerExpectContinueHandler</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
+        <td id="LC110" class="blob-code blob-code-inner js-file-line">                                                    ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpProxyConnectHandler</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
+        <td id="LC111" class="blob-code blob-code-inner js-file-line">                                                    outboundChannel<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>addLast(<span class="pl-k">new</span> <span class="pl-smi">RelayHandler</span>(ctx<span class="pl-k">.</span>channel()));</td>
+      </tr>
+      <tr>
+        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
+        <td id="LC112" class="blob-code blob-code-inner js-file-line">                                                    ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>addLast(<span class="pl-k">new</span> <span class="pl-smi">RelayHandler</span>(outboundChannel));</td>
+      </tr>
+      <tr>
+        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
+        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>                                                    ctx.channel().config().setAutoRead(true);</span></td>
+      </tr>
+      <tr>
+        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
+        <td id="LC114" class="blob-code blob-code-inner js-file-line">                                                } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
+        <td id="LC115" class="blob-code blob-code-inner js-file-line">                                                    log<span class="pl-k">.</span>info(<span class="pl-s"><span class="pl-pds">&quot;</span>reply tunnel established Failed: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>remoteAddress() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> request<span class="pl-k">.</span>method() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> request<span class="pl-k">.</span>uri());</td>
+      </tr>
+      <tr>
+        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
+        <td id="LC116" class="blob-code blob-code-inner js-file-line">                                                    <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(ctx<span class="pl-k">.</span>channel());</td>
+      </tr>
+      <tr>
+        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
+        <td id="LC117" class="blob-code blob-code-inner js-file-line">                                                    <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(outboundChannel);</td>
+      </tr>
+      <tr>
+        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
+        <td id="LC118" class="blob-code blob-code-inner js-file-line">                                                }</td>
+      </tr>
+      <tr>
+        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
+        <td id="LC119" class="blob-code blob-code-inner js-file-line">                                            }</td>
+      </tr>
+      <tr>
+        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
+        <td id="LC120" class="blob-code blob-code-inner js-file-line">                                        });</td>
+      </tr>
+      <tr>
+        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
+        <td id="LC121" class="blob-code blob-code-inner js-file-line">                                    } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
+        <td id="LC122" class="blob-code blob-code-inner js-file-line">                                        ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>writeAndFlush(</td>
+      </tr>
+      <tr>
+        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
+        <td id="LC123" class="blob-code blob-code-inner js-file-line">                                                <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-c1">INTERNAL_SERVER_ERROR</span>)</td>
+      </tr>
+      <tr>
+        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
+        <td id="LC124" class="blob-code blob-code-inner js-file-line">                                        );</td>
+      </tr>
+      <tr>
+        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
+        <td id="LC125" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(ctx<span class="pl-k">.</span>channel());</td>
+      </tr>
+      <tr>
+        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
+        <td id="LC126" class="blob-code blob-code-inner js-file-line">                                    }</td>
+      </tr>
+      <tr>
+        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
+        <td id="LC127" class="blob-code blob-code-inner js-file-line">                                }</td>
+      </tr>
+      <tr>
+        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
+        <td id="LC128" class="blob-code blob-code-inner js-file-line">                            });</td>
+      </tr>
+      <tr>
+        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
+        <td id="LC129" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
+        <td id="LC130" class="blob-code blob-code-inner js-file-line">                    promise<span class="pl-k">.</span>addListener(</td>
+      </tr>
+      <tr>
+        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
+        <td id="LC131" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">new</span> <span class="pl-k">FutureListener&lt;<span class="pl-smi">Channel</span>&gt;</span>() {</td>
+      </tr>
+      <tr>
+        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
+        <td id="LC132" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
+        <td id="LC133" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">operationComplete</span>(<span class="pl-k">final</span> <span class="pl-k">Future&lt;<span class="pl-smi">Channel</span>&gt;</span> <span class="pl-v">future</span>) <span class="pl-k">throws</span> <span class="pl-smi">Exception</span> {</td>
+      </tr>
+      <tr>
+        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
+        <td id="LC134" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">final</span> <span class="pl-smi">Channel</span> outboundChannel <span class="pl-k">=</span> future<span class="pl-k">.</span>getNow();</td>
+      </tr>
+      <tr>
+        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
+        <td id="LC135" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">if</span> (future<span class="pl-k">.</span>isSuccess()) {</td>
+      </tr>
+      <tr>
+        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
+        <td id="LC136" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-c"><span class="pl-c">//</span> 这里有几率抛出NoSuchElementException，原因是连接target host完成时，客户端已经关闭连接。</span></td>
+      </tr>
+      <tr>
+        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
+        <td id="LC137" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-c"><span class="pl-c">//</span> 考虑到是比较小的几率，不catch。注：该异常没有啥影响。</span></td>
+      </tr>
+      <tr>
+        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
+        <td id="LC138" class="blob-code blob-code-inner js-file-line">                                        ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpProxyConnectHandler</span><span class="pl-k">.</span><span class="pl-c1">this</span>);</td>
+      </tr>
+      <tr>
+        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
+        <td id="LC139" class="blob-code blob-code-inner js-file-line">                                        ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>remove(<span class="pl-smi">HttpResponseEncoder</span><span class="pl-k">.</span>class);</td>
+      </tr>
+      <tr>
+        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
+        <td id="LC140" class="blob-code blob-code-inner js-file-line">                                        outboundChannel<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>addLast(<span class="pl-k">new</span> <span class="pl-smi">HttpRequestEncoder</span>());</td>
+      </tr>
+      <tr>
+        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
+        <td id="LC141" class="blob-code blob-code-inner js-file-line">                                        outboundChannel<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>addLast(<span class="pl-k">new</span> <span class="pl-smi">RelayHandler</span>(ctx<span class="pl-k">.</span>channel()));</td>
+      </tr>
+      <tr>
+        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
+        <td id="LC142" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-smi">RelayHandler</span> clientEndtoRemoteHandler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">RelayHandler</span>(outboundChannel);</td>
+      </tr>
+      <tr>
+        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
+        <td id="LC143" class="blob-code blob-code-inner js-file-line">                                        ctx<span class="pl-k">.</span>pipeline()<span class="pl-k">.</span>addLast(clientEndtoRemoteHandler);</td>
+      </tr>
+      <tr>
+        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
+        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>                                        ctx.channel().config().setAutoRead(true);</span></td>
+      </tr>
+      <tr>
+        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
+        <td id="LC145" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
+        <td id="LC146" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-c"><span class="pl-c">//</span>出于未知的原因，不知道为什么fireChannelread不行</span></td>
+      </tr>
+      <tr>
+        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
+        <td id="LC147" class="blob-code blob-code-inner js-file-line">                                        clientEndtoRemoteHandler<span class="pl-k">.</span>channelRead(ctx, request);</td>
+      </tr>
+      <tr>
+        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
+        <td id="LC148" class="blob-code blob-code-inner js-file-line">                                        contents<span class="pl-k">.</span>forEach(content <span class="pl-k">-</span><span class="pl-k">&gt;</span> {</td>
+      </tr>
+      <tr>
+        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
+        <td id="LC149" class="blob-code blob-code-inner js-file-line">                                            <span class="pl-k">try</span> {</td>
+      </tr>
+      <tr>
+        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
+        <td id="LC150" class="blob-code blob-code-inner js-file-line">                                                clientEndtoRemoteHandler<span class="pl-k">.</span>channelRead(ctx, content);</td>
+      </tr>
+      <tr>
+        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
+        <td id="LC151" class="blob-code blob-code-inner js-file-line">                                            } <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> e) {</td>
+      </tr>
+      <tr>
+        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
+        <td id="LC152" class="blob-code blob-code-inner js-file-line">                                                log<span class="pl-k">.</span>error(<span class="pl-s"><span class="pl-pds">&quot;</span>处理非CONNECT方法的代理请求失败！<span class="pl-pds">&quot;</span></span>, e);</td>
+      </tr>
+      <tr>
+        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
+        <td id="LC153" class="blob-code blob-code-inner js-file-line">                                            }</td>
+      </tr>
+      <tr>
+        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
+        <td id="LC154" class="blob-code blob-code-inner js-file-line">                                        });</td>
+      </tr>
+      <tr>
+        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
+        <td id="LC155" class="blob-code blob-code-inner js-file-line">                                    } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
+        <td id="LC156" class="blob-code blob-code-inner js-file-line">                                        ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>writeAndFlush(</td>
+      </tr>
+      <tr>
+        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
+        <td id="LC157" class="blob-code blob-code-inner js-file-line">                                                <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-c1">INTERNAL_SERVER_ERROR</span>)</td>
+      </tr>
+      <tr>
+        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
+        <td id="LC158" class="blob-code blob-code-inner js-file-line">                                        );</td>
+      </tr>
+      <tr>
+        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
+        <td id="LC159" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(ctx<span class="pl-k">.</span>channel());</td>
+      </tr>
+      <tr>
+        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
+        <td id="LC160" class="blob-code blob-code-inner js-file-line">                                    }</td>
+      </tr>
+      <tr>
+        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
+        <td id="LC161" class="blob-code blob-code-inner js-file-line">                                }</td>
+      </tr>
+      <tr>
+        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
+        <td id="LC162" class="blob-code blob-code-inner js-file-line">                            });</td>
+      </tr>
+      <tr>
+        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
+        <td id="LC163" class="blob-code blob-code-inner js-file-line">                }</td>
+      </tr>
+      <tr>
+        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
+        <td id="LC164" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
+        <td id="LC165" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
+        <td id="LC166" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> 4.连接目标网站</span></td>
+      </tr>
+      <tr>
+        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
+        <td id="LC167" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">final</span> <span class="pl-smi">Channel</span> inboundChannel <span class="pl-k">=</span> ctx<span class="pl-k">.</span>channel();</td>
+      </tr>
+      <tr>
+        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
+        <td id="LC168" class="blob-code blob-code-inner js-file-line">                b<span class="pl-k">.</span>group(inboundChannel<span class="pl-k">.</span>eventLoop())</td>
+      </tr>
+      <tr>
+        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
+        <td id="LC169" class="blob-code blob-code-inner js-file-line">                        .channel(<span class="pl-smi">OsHelper</span><span class="pl-k">.</span>socketChannelClazz())</td>
+      </tr>
+      <tr>
+        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
+        <td id="LC170" class="blob-code blob-code-inner js-file-line">                        .option(<span class="pl-smi">ChannelOption</span><span class="pl-c1"><span class="pl-k">.</span>CONNECT_TIMEOUT_MILLIS</span>, <span class="pl-c1">10000</span>)</td>
+      </tr>
+      <tr>
+        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
+        <td id="LC171" class="blob-code blob-code-inner js-file-line">                        .option(<span class="pl-smi">ChannelOption</span><span class="pl-c1"><span class="pl-k">.</span>SO_KEEPALIVE</span>, <span class="pl-c1">true</span>)</td>
+      </tr>
+      <tr>
+        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
+        <td id="LC172" class="blob-code blob-code-inner js-file-line">                        .handler(<span class="pl-k">new</span> <span class="pl-smi">LoggingHandler</span>(<span class="pl-smi">LogLevel</span><span class="pl-c1"><span class="pl-k">.</span>INFO</span>))</td>
+      </tr>
+      <tr>
+        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
+        <td id="LC173" class="blob-code blob-code-inner js-file-line">                        .handler(<span class="pl-k">new</span> <span class="pl-smi">DirectClientHandler</span>(promise));</td>
+      </tr>
+      <tr>
+        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
+        <td id="LC174" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
+        <td id="LC175" class="blob-code blob-code-inner js-file-line">                b<span class="pl-k">.</span>connect(host, port)<span class="pl-k">.</span>addListener(<span class="pl-k">new</span> <span class="pl-smi">ChannelFutureListener</span>() {</td>
+      </tr>
+      <tr>
+        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
+        <td id="LC176" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
+        <td id="LC177" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">operationComplete</span>(<span class="pl-smi">ChannelFuture</span> <span class="pl-v">future</span>) <span class="pl-k">throws</span> <span class="pl-smi">Exception</span> {</td>
+      </tr>
+      <tr>
+        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
+        <td id="LC178" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> (future<span class="pl-k">.</span>isSuccess()) {</td>
+      </tr>
+      <tr>
+        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
+        <td id="LC179" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c"><span class="pl-c">//</span> Connection established use handler provided results</span></td>
+      </tr>
+      <tr>
+        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
+        <td id="LC180" class="blob-code blob-code-inner js-file-line">                        } <span class="pl-k">else</span> {</td>
+      </tr>
+      <tr>
+        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
+        <td id="LC181" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c"><span class="pl-c">//</span> Close the connection if the connection attempt has failed.</span></td>
+      </tr>
+      <tr>
+        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
+        <td id="LC182" class="blob-code blob-code-inner js-file-line">                            ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>writeAndFlush(</td>
+      </tr>
+      <tr>
+        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
+        <td id="LC183" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">new</span> <span class="pl-smi">DefaultHttpResponse</span>(request<span class="pl-k">.</span>protocolVersion(), <span class="pl-c1">INTERNAL_SERVER_ERROR</span>)</td>
+      </tr>
+      <tr>
+        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
+        <td id="LC184" class="blob-code blob-code-inner js-file-line">                            );</td>
+      </tr>
+      <tr>
+        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
+        <td id="LC185" class="blob-code blob-code-inner js-file-line">                            <span class="pl-smi">SocksServerUtils</span><span class="pl-k">.</span>closeOnFlush(ctx<span class="pl-k">.</span>channel());</td>
+      </tr>
+      <tr>
+        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
+        <td id="LC186" class="blob-code blob-code-inner js-file-line">                        }</td>
+      </tr>
+      <tr>
+        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
+        <td id="LC187" class="blob-code blob-code-inner js-file-line">                    }</td>
+      </tr>
+      <tr>
+        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
+        <td id="LC188" class="blob-code blob-code-inner js-file-line">                });</td>
+      </tr>
+      <tr>
+        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
+        <td id="LC189" class="blob-code blob-code-inner js-file-line">            }</td>
+      </tr>
+      <tr>
+        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
+        <td id="LC190" class="blob-code blob-code-inner js-file-line">        }</td>
+      </tr>
+      <tr>
+        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
+        <td id="LC191" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
+        <td id="LC192" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
+        <td id="LC193" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-smi">String</span> <span class="pl-en">getUserName</span>(<span class="pl-smi">String</span> <span class="pl-v">basicAuth</span>, <span class="pl-k">Map&lt;<span class="pl-smi">String</span>, <span class="pl-smi">String</span>&gt;</span> <span class="pl-v">auths</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
+        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">String</span> userName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>nouser<span class="pl-pds">&quot;</span></span>;</td>
+      </tr>
+      <tr>
+        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
+        <td id="LC195" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (basicAuth <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> basicAuth<span class="pl-k">.</span>length() <span class="pl-k">!=</span> <span class="pl-c1">0</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
+        <td id="LC196" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">String</span> raw <span class="pl-k">=</span> auths<span class="pl-k">.</span>get(basicAuth);</td>
+      </tr>
+      <tr>
+        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
+        <td id="LC197" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (raw <span class="pl-k">!=</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> raw<span class="pl-k">.</span>length() <span class="pl-k">!=</span> <span class="pl-c1">0</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
+        <td id="LC198" class="blob-code blob-code-inner js-file-line">                userName <span class="pl-k">=</span> raw<span class="pl-k">.</span>split(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>];</td>
+      </tr>
+      <tr>
+        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
+        <td id="LC199" class="blob-code blob-code-inner js-file-line">            }</td>
+      </tr>
+      <tr>
+        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
+        <td id="LC200" class="blob-code blob-code-inner js-file-line">        }</td>
+      </tr>
+      <tr>
+        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
+        <td id="LC201" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> userName;</td>
+      </tr>
+      <tr>
+        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
+        <td id="LC202" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
+        <td id="LC203" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
+        <td id="LC204" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
+      </tr>
+      <tr>
+        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
+        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * 从httprequest中寻找host和port</span></td>
+      </tr>
+      <tr>
+        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
+        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * 由于不同的httpclient实现不一样，可能会有不兼容</span></td>
+      </tr>
+      <tr>
+        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
+        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * 已知不兼容：</span></td>
+      </tr>
+      <tr>
+        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
+        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * idea2019.3设置的http proxy: 传的Host请求头没有带上端口，因此需要以request.uri()为准 CONNECT www.google.com:443 Host=www.google.com</span></td>
+      </tr>
+      <tr>
+        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
+        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * ubuntu的apt设置的代理，request.uri()为代理的地址，因此需要以Host请求头为准 CONNECT mirrors.tuna.tsinghua.edu.cn:443 Host=localhost:3128</span></td>
+      </tr>
+      <tr>
+        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
+        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * 很坑。。</span></td>
+      </tr>
+      <tr>
+        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
+        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
+      </tr>
+      <tr>
+        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
+        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> ctx</span></td>
+      </tr>
+      <tr>
+        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
+        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
+      </tr>
+      <tr>
+        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
+        <td id="LC214" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">void</span> <span class="pl-en">setHostPort</span>(<span class="pl-smi">ChannelHandlerContext</span> <span class="pl-v">ctx</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
+        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">String</span> hostAndPortStr <span class="pl-k">=</span> <span class="pl-smi">HttpMethod</span><span class="pl-c1"><span class="pl-k">.</span>CONNECT</span><span class="pl-k">.</span>equals(request<span class="pl-k">.</span>method()) <span class="pl-k">?</span> request<span class="pl-k">.</span>uri() <span class="pl-k">:</span> request<span class="pl-k">.</span>headers()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">&quot;</span>Host<span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
+        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">String</span>[] hostPortArray <span class="pl-k">=</span> hostAndPortStr<span class="pl-k">.</span>split(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);</td>
+      </tr>
+      <tr>
+        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
+        <td id="LC217" class="blob-code blob-code-inner js-file-line">        host <span class="pl-k">=</span> hostPortArray[<span class="pl-c1">0</span>];</td>
+      </tr>
+      <tr>
+        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
+        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">String</span> portStr <span class="pl-k">=</span> hostPortArray<span class="pl-k">.</span>length <span class="pl-k">==</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> hostPortArray[<span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-smi">HttpMethod</span><span class="pl-c1"><span class="pl-k">.</span>CONNECT</span><span class="pl-k">.</span>equals(request<span class="pl-k">.</span>method()) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>80<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>443<span class="pl-pds">&quot;</span></span>;</td>
+      </tr>
+      <tr>
+        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
+        <td id="LC219" class="blob-code blob-code-inner js-file-line">        port <span class="pl-k">=</span> <span class="pl-smi">Integer</span><span class="pl-k">.</span>parseInt(portStr);</td>
+      </tr>
+      <tr>
+        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
+        <td id="LC220" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
+        <td id="LC221" class="blob-code blob-code-inner js-file-line">
+</td>
+      </tr>
+      <tr>
+        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
+        <td id="LC222" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">@Override</span></td>
+      </tr>
+      <tr>
+        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
+        <td id="LC223" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">exceptionCaught</span>(<span class="pl-smi">ChannelHandlerContext</span> <span class="pl-v">ctx</span>, <span class="pl-smi">Throwable</span> <span class="pl-v">cause</span>) {</td>
+      </tr>
+      <tr>
+        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
+        <td id="LC224" class="blob-code blob-code-inner js-file-line">        cause<span class="pl-k">.</span>printStackTrace();</td>
+      </tr>
+      <tr>
+        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
+        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">String</span> clientHostname <span class="pl-k">=</span> ((<span class="pl-smi">InetSocketAddress</span>) ctx<span class="pl-k">.</span>channel()<span class="pl-k">.</span>remoteAddress())<span class="pl-k">.</span>getHostString();</td>
+      </tr>
+      <tr>
+        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
+        <td id="LC226" class="blob-code blob-code-inner js-file-line">        log<span class="pl-k">.</span>info(<span class="pl-s"><span class="pl-pds">&quot;</span>[EXCEPTION][<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> clientHostname <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>] <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cause<span class="pl-k">.</span>getMessage());</td>
+      </tr>
+      <tr>
+        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
+        <td id="LC227" class="blob-code blob-code-inner js-file-line">        ctx<span class="pl-k">.</span>close();</td>
+      </tr>
+      <tr>
+        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
+        <td id="LC228" class="blob-code blob-code-inner js-file-line">    }</td>
+      </tr>
+      <tr>
+        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
+        <td id="LC229" class="blob-code blob-code-inner js-file-line">}</td>
+      </tr>
+</table>
+
+  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
+    <summary class="btn-octicon ml-0 px-2 p-0 color-bg-primary border color-border-tertiary rounded-1" aria-label="Inline file action toolbar">
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
+    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
+</svg>
+    </summary>
+    <details-menu>
+
+      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se ml-2 mt-2"
+      style="width:185px"
+      >
+        <li>
+          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
+            Copy lines
+          </clipboard-copy>
+        </li>
+        <li>
+          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
+            Copy permalink
+          </clipboard-copy>
+        </li>
+        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/arloor/HttpProxy/blame/f799f0482b200b336e986bbe8d477d188fb48c3f/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">View git blame</a></li>
+          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/arloor/HttpProxy/issues/new">Reference in new issue</a></li>
+      </ul>
+    </details-menu>
+  </details>
+
+  </div>
+
+    </div>
+
+
+  
+
+  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
+    <summary data-hotkey="l" aria-label="Jump to line"></summary>
+    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
+      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
+        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
+        <button data-close-dialog="" type="submit" data-view-component="true" class="btn">
+  
+  Go
+  
+
+</button>
+</form>    </details-dialog>
+  </details>
+
+
+</div>
+
+
+
+  </div>
+</div>
+
+    </main>
+  </div>
+
+  </div>
+
+          
+<div class="footer container-xl width-full p-responsive" role="contentinfo">
+  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 color-text-secondary border-top color-border-secondary ">
+    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
+      <li class="mr-3 mr-lg-0">&copy; 2021 GitHub, Inc.</li>
+        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="94f3d31b5ae474f7a5f03d7adc5227c5721ca06d8689f90c6513a4e3713707ef">Terms</a></li>
+        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="453b35a06f8b18dd8a5a9cf304c858f3910a53e6ef8dd8b18a87612173f2dae6">Privacy</a></li>
+        <li class="mr-3 mr-lg-0"><a data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="709335ea9fe242b521beb5b56bb9923430238d79a3a90194f6e46bbc53b187cc" href="https://github.com/security">Security</a></li>
+        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="07f06b311cd256c78475ba7a83cc71400471e5e42075ed724e86cba3c5a02a65">Status</a></li>
+        <li><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
+    </ul>
+
+    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
+      <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
+    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
+</svg>
+</a>
+    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
+        <li class="mr-3 mr-lg-0"><a href="https://support.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="710a8bcb5bd65e81df5a75c9aeead0597b0fc1bf3d503672f2b41648c4086397">Contact GitHub</a></li>
+        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="06f73444cf383a82f6c985521b1d553ea04d1abda1eed0869157fd799856e8ef">Pricing</a></li>
+      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="e5045bfbd6905e776f0aec40141a564e2395abf0c65b770df680ff1f9b33e0ff">API</a></li>
+      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="320f623f6cfe6bc57f5e2f7e1124d818596920e67943b3b060fb6e1cf3b4c653">Training</a></li>
+        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;,&quot;originating_url&quot;:&quot;https://github.com/arloor/HttpProxy/blob/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java&quot;,&quot;user_id&quot;:88377378}}" data-hydro-click-hmac="257a938b17538234ed5d2749f89390d08d280ebef27e436c40910b4e126a919f">Blog</a></li>
+        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
+    </ul>
+  </div>
+  <div class="d-flex flex-justify-center pb-6">
+    <span class="f6 color-text-tertiary"></span>
+  </div>
+
+  
+</div>
+
+
+
+  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
+    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
+    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
+</svg>
+    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
+    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
+</svg>
+    </button>
+    You can’t perform that action at this time.
+  </div>
+
+  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
+    >
+    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
+    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
+</svg>
+    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
+    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
+  </div>
+    <template id="site-details-dialog">
+  <details class="details-reset details-overlay details-overlay-dark lh-default color-text-primary hx_rsm" open>
+    <summary role="button" aria-label="Close dialog"></summary>
+    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
+      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
+        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
+    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
+</svg>
+      </button>
+      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
+    </details-dialog>
+  </details>
+</template>
+
+    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
+  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
+  </div>
+</div>
+
+    <template id="snippet-clipboard-copy-button">
+  <div class="zeroclipboard-container position-absolute right-0 top-0">
+    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-paste js-clipboard-clippy-icon m-2">
+    <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
+</svg>
+      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
+    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
+</svg>
+    </clipboard-copy>
+  </div>
+</template>
+
+
+
+
+  </body>
+</html>

From 17c9163db39f9e999f075c307d347ef89facf5cf Mon Sep 17 00:00:00 2001
From: "Restyled.io" <commits@restyled.io>
Date: Tue, 14 Sep 2021 22:12:44 +0000
Subject: [PATCH 2/2] Restyled by whitespace

---
 iOS.txt | 192 ++++++++++++++++++++++++++++----------------------------
 1 file changed, 96 insertions(+), 96 deletions(-)

diff --git a/iOS.txt b/iOS.txt
index 6bf4f21..778dc7a 100644
--- a/iOS.txt
+++ b/iOS.txt
@@ -21,17 +21,17 @@
   <link crossorigin="anonymous" media="all" integrity="sha512-Xvl7qd6ZFq6aBrViMpY+7UKRL79QzxxYG1kyELGe/sH4sV3eCks8DDXxa3WolACcKPac42eqrfe6m0jazyAIPQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-5ef97ba9de9916ae9a06b56232963eed.css" />
   <link crossorigin="anonymous" media="all" integrity="sha512-24GJDHWJro3USSMV5JFy5QbE8eCNYG61UucNp7vJMTaeJMrBy6FLiLFgX9jXnWlddv2VRu/rTLIkxzuRDF9ZVA==" rel="stylesheet" href="https://github.githubassets.com/assets/colors-v2-db81890c7589ae8dd4492315e49172e5.css" />
     <link crossorigin="anonymous" media="all" integrity="sha512-rcBopHrwspQORpXVLihZMP22sFwuIo3fL1DyFo5aXwWnV5FzV/nlAGnX/36fI9GQVc2VN7MiIT34RMCwq8jemg==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-adc068a47af0b2940e4695d52e285930.css" />
-    
-    
-    
+
+
+
     <link crossorigin="anonymous" media="all" integrity="sha512-ohNio2W8iCFgXVph5xMJF1NU+8NjAZrF5a5mW8//nqN2FVv+Sw0uYpQXNf+hqIUVSRC3y63k/3et87TEzsZuIA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-a21362a365bc8821605d5a61e7130917.css" />
 
   <script crossorigin="anonymous" defer="defer" integrity="sha512-DHpNa+QkQaUCk1eji+SQGDsKa8B63teT5nbKT3/TQ38T2hEDfT9B9OddmUKcMnQ8GaECHElNcJkpGhIThksyXA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-0c7a4d6b.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-HP2Mvig4HXg8jfmGDNyHQA926EIhsEnEmglfqF8GzaJ/ble4OXug7GkcnQlvBRARAAxiSjtRZlXi6Y5946iRRA==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-frameworks-1cfd8cbe.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-FKXP1Zj/06ElnU2g7tU//J/ilS/i7vutZAiWJRr59SBWKrnmHKIKNwPT+it8dEIdaGzT3DozyEbQQeZUEqvcMA==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-vendor-14a5cfd5.js"></script>
-  
+
   <script crossorigin="anonymous" defer="defer" integrity="sha512-9s0o9HusjaKciUh3VkWjfLedaVnLoWrUgCB0HERc6sLtYrXOGqzj68/jjphqCawbexLaVDHv08CTTciAvxPFtg==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-f6cd28f4.js"></script>
-  
+
     <script crossorigin="anonymous" defer="defer" integrity="sha512-BUDbrXZbK9QorUrf0KoEbZAJhTnz+BqMm10bqZCK6w5Hwy7YaORQ4F4DXhLkAVTvaJhNhxxeXgmgJLP0TB7TOw==" type="application/javascript" data-module-id="./chunk-advanced.js" data-src="https://github.githubassets.com/assets/chunk-advanced-0540dbad.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-5tWKSr7mhAzSh4Sx5YRFgKftdGxKwHKnOGYw5DlxjHhkQVURYFU3Bk5IMOGMKuAiJTlC3OXYM3xzGcyjzuEFQQ==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-e6d58a4a.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-0MZorw3oXnKy5eeSwQ9xGrKU4hxQeCXxmyxhneIHNhDIqu8vWh8mHss9FlC75Xd/bPWxFDCvdOo57tnTR46nbA==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-d0c668af.js"></script>
@@ -71,12 +71,12 @@
     <script crossorigin="anonymous" defer="defer" integrity="sha512-fvcOOYapCxPkDRQWz2WQzrqL6rRhX88yHWF87fb9Xny2Fq4lri0ONaVFL7XDSTiTyu4OTp+8WoyfMVpgGUaaVg==" type="application/javascript" data-module-id="./chunk-unveil.js" data-src="https://github.githubassets.com/assets/chunk-unveil-7ef70e39.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-V1S2L90J/leeVmnOy/FbkG/OQV4USnz5ZyX6DdCbkdljoIDtBFoxUohUQokpegatnFHQmch34+humD9mitEyeg==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-5754b62f.js"></script>
     <script crossorigin="anonymous" defer="defer" integrity="sha512-cKu/+X7gT+WVH4sXKt0g3G77bfQfcgwurRObM+dt8XylPm9eEWI+/aWKhVab6VsYuvvuI5BTriKXhXfJwaSXdQ==" type="application/javascript" data-module-id="./chunk-webgl-warp.js" data-src="https://github.githubassets.com/assets/chunk-webgl-warp-70abbff9.js"></script>
-  
+
   <script crossorigin="anonymous" defer="defer" integrity="sha512-5vp/q5KhOtPfRKIPmz2PoaqwAuGXO4yUN/f+Qqg6C5hn9qdfBlt0LhaNDx1hsuhkQlru8nMMNbJuGcRoiqfA8g==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-e6fa7fab.js"></script>
 <script crossorigin="anonymous" defer="defer" integrity="sha512-xCcwGq+7fkQPSGSB52tRFtoiTfdC89lTq2PBctpiy3NesXDPOkppzJFBbIU6pjSvS6f/PBj2retGOKqdyjOuxg==" type="application/javascript" src="https://github.githubassets.com/assets/diffs-c427301a.js"></script>
 
   <meta name="viewport" content="width=device-width">
-  
+
   <title>HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy</title>
     <meta name="description" content="http代理，支持CONNECT和普通GET/POST，支持http2；可防止主动嗅探；可作为小火箭、圈、surge等软件和SwitchyOmega(chrome插件)所说的https代理 - HttpProxy/HttpProxyConnectHandler.java at master · arloor/HttpProxy">
     <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
@@ -88,7 +88,7 @@
 
 
 
-    
+
 
   <link rel="assets" href="https://github.githubassets.com/">
     <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/88377378/ws?session=eyJ2IjoiVjMiLCJ1Ijo4ODM3NzM3OCwicyI6NzQ0NjczOTY4LCJjIjoxMDc1Nzc0OTU3LCJ0IjoxNjMwNTgwNjgyfQ==--86020054ff62909bf7c92a08ce6744bd6485c8d89ac71dc508e4ea468e1cc835" data-refresh-url="/_alive" data-session-id="80f8a4e63fe900910fbb1e13590acbd28894d3df7aef26ce01daab371989204c">
@@ -102,7 +102,7 @@
 
   <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />
 
-  
+
 
   <meta name="selected-link" value="repo_source" data-pjax-transient>
 
@@ -115,7 +115,7 @@
 
   <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />
 
-  
+
 
 
 
@@ -126,7 +126,7 @@
 
 
 
-  
+
 
       <meta name="hostname" content="github.com">
     <meta name="user-login" content="awrcdhj">
@@ -142,9 +142,9 @@
   <meta http-equiv="x-pjax-csp-version" content="3bd1d66a0bcbe1085660ff2182e7b557cc239441f75f3ec846eba18193d4c44b">
   <meta http-equiv="x-pjax-css-version" content="d1dbd06045f5cc4dd24218c2c5462c5aff3da3123c0dbf632b6b4157f5c18c92">
   <meta http-equiv="x-pjax-js-version" content="985b73e2b42ded5d1575290a6040f0c018ec4bb30fc593182ad72ed0de8cb89f">
-  
 
-    
+
+
   <meta name="go-import" content="github.com/arloor/HttpProxy git https://github.com/arloor/HttpProxy.git">
 
   <meta name="octolytics-dimension-user_id" content="21768987" /><meta name="octolytics-dimension-user_login" content="arloor" /><meta name="octolytics-dimension-repository_id" content="157892826" /><meta name="octolytics-dimension-repository_nwo" content="arloor/HttpProxy" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="157892826" /><meta name="octolytics-dimension-repository_network_root_nwo" content="arloor/HttpProxy" />
@@ -178,17 +178,17 @@
   </head>
 
   <body class="logged-in env-production page-responsive page-blob" style="word-wrap: break-word;">
-    
+
 
     <div class="position-relative js-header-wrapper ">
       <a href="#start-of-content" class="p-3 color-bg-info-inverse color-text-white show-on-focus js-skip-to-content">Skip to content</a>
       <span data-view-component="true" class="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full">
     <span style="background-color: #79b8ff;width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar"></span>
-</span>      
-      
+</span>
+
+
 
 
-        
             <header class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap" role="banner" >
     <div class="Header-item mt-n1 mb-n1  d-none d-md-flex">
       <a
@@ -207,18 +207,18 @@
 
     <div class="Header-item d-md-none">
       <button aria-label="Toggle navigation" aria-expanded="false" type="button" data-view-component="true" class="Header-link js-details-target btn-link">
-  
-  
+
+
         <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-three-bars">
     <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
 </svg>
 
-  
+
 
 </button>    </div>
 
     <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
-          
+
 
 
 
@@ -307,7 +307,7 @@
     </div>
 
     <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
-        
+
 
 
       <notification-indicator
@@ -316,7 +316,7 @@
         data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6ODgzNzczNzgiLCJ0IjoxNjMwNTgwNjgyfQ==--1d85f1bf95f1a3c4f704555a2740b8baec022a2720a53a246b3f353535da70ef">
         <a href="/notifications"
           class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
-          
+
           aria-label="You have no unread notifications"
           data-hotkey="g n"
           data-ga-click="Header, go to notifications, icon:read"
@@ -343,7 +343,7 @@
 </svg> <span class="dropdown-caret"></span>
   </summary>
   <details-menu class="dropdown-menu dropdown-menu-sw">
-    
+
 <a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
   New repository
 </a>
@@ -368,7 +368,7 @@
     </div>
 
     <div class="Header-item position-relative mr-0 d-none d-md-flex">
-        
+
   <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/awrcdhj/feature_preview/indicator_check">
 
   <summary
@@ -380,7 +380,7 @@
       <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 1px;" hidden></span>
     <span class="dropdown-caret"></span>
   </summary>
-  <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px" 
+  <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px"
       src="/users/88377378/menu" preload>
       <include-fragment>
         <p class="text-center mt-3" data-hide-on-error>
@@ -402,7 +402,7 @@
     </div>
 </header>
 
-            
+
     </div>
 
   <div id="start-of-content" class="show-on-focus"></div>
@@ -423,7 +423,7 @@
     <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
 </svg>
     </button>
-    
+
       <div>{{ message }}</div>
 
   </div>
@@ -432,7 +432,7 @@
 </div>
 
 
-    
+
 
   <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>
 
@@ -448,14 +448,14 @@
   >
         <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
     <main id="js-repo-pjax-container" data-pjax-container >
-      
 
-    
 
 
 
 
-  
+
+
+
 
 
   <div id="repository-container-header" class="hx_page-header-bg pt-3 hide-full-screen mb-5" data-pjax-replace>
@@ -472,7 +472,7 @@
   <strong itemprop="name" class="mr-2 flex-self-stretch">
     <a data-pjax="#js-repo-pjax-container" href="/arloor/HttpProxy">HttpProxy</a>
   </strong>
-  
+
 </h1>
 
 
@@ -492,7 +492,7 @@
           <span data-menu-button>
             <span
               hidden
-              
+
               data-target="notifications-list-subscription-form.unwatchButtonCopy"
             >
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
@@ -502,7 +502,7 @@
             </span>
             <span
               hidden
-              
+
               data-target="notifications-list-subscription-form.stopIgnoringButtonCopy"
             >
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell-slash">
@@ -511,8 +511,8 @@
               Stop ignoring
             </span>
             <span
-              
-              
+
+
               data-target="notifications-list-subscription-form.watchButtonCopy"
             >
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
@@ -527,7 +527,7 @@
           class="SelectMenu  "
           role="menu"
           data-target="notifications-list-subscription-form.menu"
-          
+
         >
           <div class="SelectMenu-modal notifications-component-menu-modal">
             <header class="SelectMenu-header">
@@ -552,7 +552,7 @@
                   role="menuitemradio"
                   aria-checked="true"
                   data-targets="notifications-list-subscription-form.subscriptionButtons"
-                  
+
                 >
                   <span class="f5">
                     <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
@@ -625,7 +625,7 @@
                 data-action="click:notifications-list-subscription-form#openCustomDialog"
                 aria-haspopup="true"
                 aria-checked="false"
-                
+
               >
                 <span class="f5">
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
@@ -715,7 +715,7 @@
                         value="Issue"
                         data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                         data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
-                        
+
                       >
                       Issues
                     </label>
@@ -729,7 +729,7 @@
                         value="PullRequest"
                         data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                         data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
-                        
+
                       >
                       Pull requests
                     </label>
@@ -743,7 +743,7 @@
                         value="Release"
                         data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                         data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
-                        
+
                       >
                       Releases
                     </label>
@@ -757,14 +757,14 @@
                         value="Discussion"
                         data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                         data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
-                        
+
                       >
                       Discussions
                     </label>
 
                       <span
                         class="tooltipped tooltipped-nw mr-2 p-1 float-right"
-                        
+
                         aria-label="Discussions are not enabled for this repo">
                         <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info color-icon-secondary">
     <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>
@@ -779,7 +779,7 @@
                         value="SecurityAlert"
                         data-targets="notifications-list-subscription-form.threadTypeCheckboxes"
                         data-action="change:notifications-list-subscription-form#threadTypeCheckboxesUpdated"
-                        
+
                       >
                       Security alerts
                     </label>
@@ -797,9 +797,9 @@
                 >Apply</button>
 
                 <button data-action="click:notifications-list-subscription-form#resetForm" data-close-dialog="" type="button" data-view-component="true" class="btn-sm btn">
-  
+
   Cancel
-  
+
 
 </button>
               </div>
@@ -869,98 +869,98 @@
 </div>
 
 
-        
+
 
   <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax UnderlineNav px-3 px-md-4 px-lg-5">
 
     <ul data-view-component="true" class="UnderlineNav-body list-style-none">
         <li data-view-component="true" class="d-flex">
   <a id="code-tab" href="/arloor/HttpProxy" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /arloor/HttpProxy" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" data-pjax="#repo-content-pjax-container" aria-current="page" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
 </svg>
           <span data-content="Code">Code</span>
             <span title="Not available" data-view-component="true" class="Counter"></span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="issues-tab" href="/arloor/HttpProxy/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /arloor/HttpProxy/issues" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
     <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
 </svg>
           <span data-content="Issues">Issues</span>
             <span title="1" data-view-component="true" class="Counter">1</span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="pull-requests-tab" href="/arloor/HttpProxy/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /arloor/HttpProxy/pulls" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
 </svg>
           <span data-content="Pull requests">Pull requests</span>
             <span title="1" data-view-component="true" class="Counter">1</span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="actions-tab" href="/arloor/HttpProxy/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /arloor/HttpProxy/actions" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-pjax="#repo-content-pjax-container" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
 </svg>
           <span data-content="Actions">Actions</span>
             <span title="Not available" data-view-component="true" class="Counter"></span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="projects-tab" href="/arloor/HttpProxy/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /arloor/HttpProxy/projects" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
 </svg>
           <span data-content="Projects">Projects</span>
             <span title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="wiki-tab" href="/arloor/HttpProxy/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /arloor/HttpProxy/wiki" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
 </svg>
           <span data-content="Wiki">Wiki</span>
             <span title="Not available" data-view-component="true" class="Counter"></span>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="security-tab" href="/arloor/HttpProxy/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /arloor/HttpProxy/security" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
 </svg>
           <span data-content="Security">Security</span>
             <include-fragment src="/arloor/HttpProxy/security/overall-count" accept="text/fragment+html"></include-fragment>
 
-    
+
 </a></li>
         <li data-view-component="true" class="d-flex">
   <a id="insights-tab" href="/arloor/HttpProxy/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /arloor/HttpProxy/pulse" data-ga-click="Repository, Navigation click, Insights tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
-    
+
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
     <path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
 </svg>
           <span data-content="Insights">Insights</span>
             <span title="Not available" data-view-component="true" class="Counter"></span>
 
-    
+
 </a></li>
 </ul>
       <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions  js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <details data-view-component="true" class="details-overlay details-reset position-relative">
@@ -972,7 +972,7 @@
           </div>
 </summary>
   <div data-view-component="true">          <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
-  
+
             <ul>
                 <li data-menu-item="i0code-tab" hidden>
                   <a role="menuitem" class="js-selected-navigation-item selected dropdown-item" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /arloor/HttpProxy" href="/arloor/HttpProxy">
@@ -1023,12 +1023,12 @@
 
 
 
-    
-      
-  
-  
+
+
+
+
 <div>
-  
+
 
 
     <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/arloor/HttpProxy/blob/f799f0482b200b336e986bbe8d477d188fb48c3f/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java">Permalink</a>
@@ -1036,7 +1036,7 @@
     <!-- blob contrib key: blob_contributors:v22:38c12024ce0670fad9a86dc86f6ad406bb189b6206a19d5d225b09465d25aba8 -->
 
     <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
-      
+
 <div class="position-relative">
   <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
     <summary class="btn css-truncate"
@@ -1049,7 +1049,7 @@
       <span class="dropdown-caret"></span>
     </summary>
 
-      
+
 <div class="SelectMenu">
   <div class="SelectMenu-modal">
     <header class="SelectMenu-header">
@@ -1090,7 +1090,7 @@
               focus-list:ref-selector#focusFirstListMember
             "
             query-endpoint="/arloor/HttpProxy/refs"
-            
+
             cache-key="v0:1628869024.629015"
             current-committish="bWFzdGVy"
             default-branch="bWFzdGVy"
@@ -1200,12 +1200,12 @@
 
       <details id="blob-more-options-details" data-view-component="true" class="details-overlay details-reset position-relative">
   <summary role="button" data-view-component="true" class="btn">
-  
+
             <svg aria-label="More options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
     <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
 </svg>
 
-  
+
 
 </summary>
   <div data-view-component="true">          <ul class="dropdown-menu dropdown-menu-sw">
@@ -1216,26 +1216,26 @@
 </a>            </li>
             <li data-toggle-for="blob-more-options-details">
               <button data-toggle-for="jumpto-line-details-dialog" type="button" data-view-component="true" class="dropdown-item btn-link">
-  
-  
+
+
                 <span class="d-flex flex-items-baseline">
                   <span class="flex-auto">Go to line</span>
                   <span class="text-small color-text-secondary" aria-hidden="true">L</span>
                 </span>
 
-  
+
 
 </button>            </li>
             <li class="dropdown-divider" role="none"></li>
             <li>
               <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy path" value="src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-view-component="true" class="dropdown-item cursor-pointer">
-    
+
                 Copy path
 
 </clipboard-copy>            </li>
             <li>
               <clipboard-copy data-toggle-for="blob-more-options-details" aria-label="Copy permalink" value="https://github.com/arloor/HttpProxy/blob/f799f0482b200b336e986bbe8d477d188fb48c3f/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-view-component="true" class="dropdown-item cursor-pointer">
-    
+
                 <span class="d-flex flex-items-baseline">
                   <span class="flex-auto">Copy permalink</span>
                 </span>
@@ -1264,7 +1264,6 @@
 
 
 
-      
 
 
 
@@ -1272,13 +1271,14 @@
 
 
 
-  
+
+
     <div data-target="readme-toc.content" class="Box mt-3 position-relative
     ">
-      
+
   <div
     class="Box-header py-2 pr-2 d-flex flex-shrink-0 flex-md-row flex-items-center"
-    
+
   >
 
 
@@ -1293,15 +1293,15 @@
 
     <div class="BtnGroup">
       <a href="/arloor/HttpProxy/raw/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" id="raw-url" role="button" data-view-component="true" class="btn-sm btn BtnGroup-item">
-  
+
   Raw
-  
+
 
 </a>
         <a href="/arloor/HttpProxy/blame/master/src/main/java/com/arloor/forwardproxy/HttpProxyConnectHandler.java" data-hotkey="b" role="button" data-view-component="true" class="js-update-url-with-hash btn-sm btn BtnGroup-item">
-  
+
   Blame
-  
+
 
 </a>
     </div>
@@ -1359,10 +1359,10 @@
 </div>
 
 
-      
+
   <div itemprop="text" class="Box-body p-0 blob-wrapper data type-java  gist-border-0">
 
-      
+
 <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
       <tr>
         <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
@@ -2332,7 +2332,7 @@
     </div>
 
 
-  
+
 
   <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
     <summary data-hotkey="l" aria-label="Jump to line"></summary>
@@ -2340,9 +2340,9 @@
       <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
         <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
         <button data-close-dialog="" type="submit" data-view-component="true" class="btn">
-  
+
   Go
-  
+
 
 </button>
 </form>    </details-dialog>
@@ -2361,7 +2361,7 @@
 
   </div>
 
-          
+
 <div class="footer container-xl width-full p-responsive" role="contentinfo">
   <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 color-text-secondary border-top color-border-secondary ">
     <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
@@ -2391,7 +2391,7 @@
     <span class="f6 color-text-tertiary"></span>
   </div>
 
-  
+
 </div>
 
 
