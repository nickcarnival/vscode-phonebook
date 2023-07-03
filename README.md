TODOs:

```sh
vsce package
```

- [ ] the color for errors is terrible
- [ ] selections are bad

https://themes.vscode.one/edit/3FuLHTAt

```js
function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
```

- [x] fix scrollbar (RULER)
- [x] error color sucks, disable it
- [x] highlighting is gross
- [ ] scrollbar / ruler hover is blue
- [ ] tab hover close icon is not visible same with icon
- toasts are a bit off
  - [ ] hover color is too bright
- syntax highlighting is too dull 
- preview windows are too bright

```css
.theme-light {
--color-l-white: hsl(35, 36%, 95%); #f7f3ee
--color-l-gray-10: hsl(36, 37%, 92%); #f2ece3
--color-l-gray-20: hsl(35, 35%, 90%); #eee7dd
--color-l-gray-30: hsl(34, 36%, 88%); #ebe2d5
--color-l-gray-40: hsl(36, 37%, 83%); #e4d7c4
--color-l-gray-50: hsl(34, 37%, 70%); #cfb696
--color-l-gray-60: hsl(34, 28%, 60%); #b69d7c
--color-l-gray-70: hsl(31, 23%, 50%); #9d8062
--color-l-gray-80: hsl(34, 27%, 40%); #826a4a
--color-l-gray-90: hsl(34, 30%, 37%); #7b6242
--color-l-gray-100: hsl(35, 32%, 30%); #655134
--color-l-black: hsl(31, 45%, 20%); #4a341c
--color-l-blacker: hsl(32, 55%, 12%); #2f200e
--color-l-shadow-10: rgba(168, 160, 148, 0.8);
--color-l-shadow-50: rgba(180, 172, 161, 0.3);
--color-l-shadow-100: rgba(75, 70, 64, 0.2);
--color-l-shadow-cover: rgba(177, 171, 164, 0.5);
--color-l-yellow-300: hsl(43, 71%, 67%); #e7c56f
--color-l-yellow-500: hsl(43, 78%, 52%); #e4ae25
--color-l-yellow-700: hsl(43, 100%, 42%); #d69a00
--color-l-yellow-900: hsl(43, 89%, 38%); #b7860b
--color-l-red-300: hsl(4, 54%, 61%); #d16d66
--color-l-red-500: hsl(4, 72%, 55%); #df453a
--color-l-red-700: hsl(4, 56%, 48%); #bf3f36
--color-l-red-900: hsl(4, 66%, 30%); #7f211a
--color-l-blue-300: hsl(198, 39%, 56%); #63a0bb
--color-l-blue-500: hsl(205, 66%, 46%); #2882c3
--color-l-blue-700: hsl(205, 63%, 39%); #256ea2
--color-l-blue-900: hsl(205, 95%, 25%); #034a7c
--color-l-orange-300: hsl(26, 66%, 57%); #da8849
--color-l-orange-500: hsl(21, 82%, 55%); #ea702e
--color-l-orange-700: hsl(18, 69%, 50%); #d75c28
--color-l-orange-900: hsl(24, 96%, 35%); #af4804
--color-l-orange-a: hsl(27, 81%, 46%); #d46c16
--color-l-green-300: hsl(154, 58%, 65%); #72daad
--color-l-green-500: hsl(154, 47%, 49%); #42b885
--color-l-green-700: hsl(155, 52%, 38%); #2f9369
--color-l-green-900: hsl(165, 63%, 29%); #1b7961
--color-l-violet-300: hsl(270, 50%, 74%); #bd9cde
--color-l-violet-500: hsl(266, 31%, 57%); #8d6fb3
--color-l-violet-700: hsl(267, 37%, 43%); #6a4596
--color-l-violet-900: hsl(266, 70%, 30%); #451782
--ui-color-highlight-text: var(--color-l-black);
--ui-color-highlight-bg: hsl(43, 85%, 79%);
--color-highlight-yellow: rgba(255, 187, 0, 0.2);
--color-highlight-red: rgba(240, 79, 106, 0.2);
--color-highlight-blue: rgba(40, 178, 194, 0.2);
--color-highlight-orange: rgba(255, 115, 0, 0.2);
--color-highlight-green: rgba(153, 189, 36, 0.2);
--color-highlight-violet: rgba(113, 122, 255, 0.2);
}

.theme-dark {
--color-d-whiter: hsl(33, 66%, 90%); #f6e7d5
--color-d-white: hsl(34, 50%, 80%); #e6cfb3
--color-d-gray-10: hsl(34, 18%, 62%); #b0a08d
--color-d-gray-20: hsl(35, 27%, 55%); #ab916d
--color-d-gray-30: hsl(34, 24%, 30%); #5f4f3a
--color-d-gray-40: hsl(33, 22%, 30%); #5d4e3c
--color-d-gray-50: hsl(33, 20%, 20%); #3d3429
--color-d-gray-60: hsl(30, 19%, 17%); #342b23
--color-d-gray-70: hsl(27, 14%, 15%); #2c2621 title bar
--color-d-gray-80: hsl(32, 19%, 13%); #27221b
--color-d-gray-90: hsl(30, 15%, 13%); #26211c
--color-d-gray-100: hsl(30, 20%, 8%);  #181410
--color-d-black: hsl(27, 15%, 12%); #231e1a
--color-d-blacker: hsl(26, 16%, 9%); #1b1613
--color-d-shadow-10: rgba(29, 21, 13, 0.45);
--color-d-shadow-50: rgba(29, 26, 22, 0.75);
--color-d-shadow-100: rgba(19, 16, 13, 0.95);
--color-d-shadow-cover: rgba(37, 34, 29, 0.74);
--color-d-yellow-300: hsl(46, 91%, 69%); #f8d668
--color-d-yellow-500: hsl(50, 100%, 46%); #ebc300 icon highlight
--color-d-yellow-700: hsl(43, 100%, 42%); #d69a00
--color-d-yellow-900: hsl(39, 92%, 33%); #a26b07
--color-d-yellow-a: hsl(43, 75%, 52%); #e0ac29
--color-d-red-300: hsl(4, 100%, 68%); #ff675c
--color-d-red-500: hsl(4, 65%, 60%); #db6057 icons
--color-d-red-700: hsl(4, 90%, 61%); #f54e42
--color-d-red-900: hsl(4, 77%, 38%); #ac2016
--color-d-red-a: hsl(4, 61%, 53%); #d0483e
--color-d-blue-300: hsl(198, 39%, 56%); #63a0bb
--color-d-blue-500: hsl(198, 62%, 57%); #4dadd5
--color-d-blue-700: hsl(198, 57%, 55%); #4ba6ce
--color-d-blue-900: hsl(198, 75%, 35%); #16749c
--color-d-blue-a: hsl(197, 58%, 48%); #3399c1
--color-d-orange-300: hsl(22, 92%, 64%);#f88d4f
--color-d-orange-500: hsl(22, 92%, 57%);#f6762c
--color-d-orange-700: hsl(21, 88%, 51%);#f06114
--color-d-orange-900: hsl(20, 80%, 41%);#bc4d15
--color-d-orange-a: hsl(27, 77%, 51%);#e27822
--color-d-green-300: hsl(150, 66%, 53%);#38d687
--color-d-green-500: hsl(154, 52%, 46%);#38b27d
--color-d-green-700: hsl(154, 61%, 39%);#27a06c
--color-d-green-900: hsl(155, 81%, 24%);#0c6f45
--color-d-green-a: hsl(96, 50%, 49%); #70bb3e
--color-d-violet-300: hsl(256, 63%, 74%);#a993e6
--color-d-violet-500: hsl(263, 60%, 67%);#9f78dd
--color-d-violet-700: hsl(256, 52%, 57%);#7758ca
--color-d-violet-900: hsl(256, 44%, 50%);#6547b8
--color-d-violet-a: hsl(246, 53%, 67%);#877ed7
--ui-color-highlight-bg: hsl(43, 61%, 56%);
--color-highlight-yellow: rgba(255, 187, 0, 0.2);
--color-highlight-red: rgba(240, 79, 106, 0.2);
--color-highlight-blue: rgba(40, 178, 194, 0.2);
--color-highlight-orange: rgba(255, 115, 0, 0.2);
--color-highlight-green: rgba(153, 189, 36, 0.2);
--color-highlight-violet: rgba(113, 122, 255, 0.2);
}
```

# Source Ideas:
https://github.com/ceciliamay/obsidianmd-theme-primary/blob/main/assets/primary-preview-1.png

# phonebook-theme README

https://www.youtube.com/watch?v=mbi27VNowks

Publishing: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

const runs = [
hsl(35, 36, 95),
hsl(36, 37, 92),
hsl(35, 35, 90),
hsl(34, 36, 88),
hsl(36, 37, 83),
hsl(34, 37, 70),
hsl(34, 28, 60),
hsl(31, 23, 50),
hsl(34, 27, 40),
hsl(34, 30, 37),
hsl(35, 32, 30),
hsl(31, 45, 20),
hsl(32, 55, 12)
]
