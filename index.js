function pyramid(num) {

    for (let i = 1; i <= num; i++) {
      let space = ' '.repeat( num - i);
      let bricks = '#'.repeat(i * 2 - 1);
      console.log(space + bricks);
    }
  }

pyramid(8);


function pyramid(height) {
    for (let i = 1; i <= height; i++) {
      // Add spaces before the "#" characters
      let spaces = ' '.repeat(height - i);
  
      // Add "#" characters
      let hashes = '#'.repeat(2 * i - 1);
  
      // Combine spaces and "#" characters and print the line
      console.log(spaces + hashes);
    }
  }
  
  // Call the function with the desired height, for example:
  pyramid(5);
  