export const engagespot = (window.Engagespot = {}(
  (q = function(e) {
    return function() {
      (window.engageq = window.engageq || []).push({ f: e, a: arguments });
    };
  })
)(
  (f = [
    "captureEvent",
    "subscribe",
    "init",
    "showPrompt",
    "identifyUser",
    "clearUser"
  ])
));
for (k in f) Engagespot[f[k]] = q(f[k]);
var s = document.createElement("script");
(s.type = "text/javascript"),
  (s.async = !0),
  (s.src = "https://cdn.engagespot.co/EngagespotSDK.2.0.js");
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
Engagespot.init("GggpGEILM8yBMBAhlMmGzVuzXEsfpb");
