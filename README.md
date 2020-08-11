# 🎼 noisefy
JS library to interact with web audio interface
Based and inspired by the code previously made by great developers like...
[Sam Bellem](https://twitter.com/sambego)
[Michel Buffa](https://twitter.com/micbuffa)

Bug or new funcionalities to add? [Issues section](https://github.com/arturogalan/noise-box/issues)


## TODO
ampGenerator.js shoudnt have any normalize value, this should be inside the effects
mirar los get de los efectos, si normalizamos en el set hay que de-normalizar en el get para que siempre sean 1-10 los inputs y los outputs
solo tiene denormalize cabinet, porque los demas KNOB si funcionan si no denormalizan?
si ponemos de tipo knob el gain del cabinet aparece tb en el header, hacer un nuevo tipo



los presets del amp3 son combinaciones de distorsiones y otros presets, pero hay combinaciones que repiten distos, por eso no hay tantas distos/clean en noisebox como presets en amp3. Cuando funcionen bien los clean y distos hay que hacer un set de presets y meter el resto de presets de amp3
