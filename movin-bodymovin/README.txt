A Pen created at CodePen.io. You can find this one at https://codepen.io/airnan/pen/PqjwYM.

 Toggle between the Canvas and the Svg renders.  
These animations are exported from After Effects and animated with javascript.  
svg version doesn't handle fill-rules correctly yet.  
canvas version on chrome has jagged masks, apparently it's a known bug with clipping a canvas on webkit.  
UPDATE: thanks to @AmeliaBR 's help on transforming ellipses to cubic beziers, I got the fill-rule working on the svg version.