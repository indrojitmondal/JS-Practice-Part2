// Find the lowest number in the array below.

const heights = [67, 100, 120, 165, 137];
let mn=heights[0];
for (const height of heights) {
    if(height<mn)
    {
        mn=height;
    }
}
console.log(mn);