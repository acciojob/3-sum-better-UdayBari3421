function threeSum(arr, target) {
    // Sort the input array in ascending order
    arr.sort((a, b) => a - b);

    let closestSum = Infinity; // Initialize the closest sum to a large value
    let minDiff = Infinity;   // Initialize the minimum difference to a large value

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            const diff = Math.abs(target - sum);

            if (diff < minDiff) {
                // Update the closest sum and minimum difference
                closestSum = sum;
                minDiff = diff;
            }

            if (sum < target) {
                left++; // Move the left pointer to the right
            } else {
                right--; // Move the right pointer to the left
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
