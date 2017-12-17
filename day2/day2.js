const input = "4168 3925 858 2203 440 185 2886 160 1811 4272 4333 2180 174 157 361 1555\n" +
  "150 111 188 130 98 673 408 632 771 585 191 92 622 158 537 142\n" +
  "5785 5174 1304 3369 3891 131 141 5781 5543 4919 478 6585 116 520 673 112\n" +
  "5900 173 5711 236 2920 177 3585 4735 2135 2122 5209 265 5889 233 4639 5572\n" +
  "861 511 907 138 981 168 889 986 980 471 107 130 596 744 251 123\n" +
  "2196 188 1245 145 1669 2444 656 234 1852 610 503 2180 551 2241 643 175\n" +
  "2051 1518 1744 233 2155 139 658 159 1178 821 167 546 126 974 136 1946\n" +
  "161 1438 3317 4996 4336 2170 130 4987 3323 178 174 4830 3737 4611 2655 2743\n" +
  "3990 190 192 1630 1623 203 1139 2207 3994 1693 1468 1829 164 4391 3867 3036\n" +
  "116 1668 1778 69 99 761 201 2013 837 1225 419 120 1920 1950 121 1831\n" +
  "107 1006 92 807 1880 1420 36 1819 1039 1987 114 2028 1771 25 85 430\n" +
  "5295 1204 242 479 273 2868 3453 6095 5324 6047 5143 293 3288 3037 184 987\n" +
  "295 1988 197 2120 199 1856 181 232 564 1914 1691 210 1527 1731 1575 31\n" +
  "191 53 714 745 89 899 854 679 45 81 726 801 72 338 95 417\n" +
  "219 3933 6626 2137 3222 1637 5312 238 5895 222 154 6649 169 6438 3435 4183\n" +
  "37 1069 166 1037 172 258 1071 90 497 1219 145 1206 143 153 1067 510".split("\n");

// should output 18
const testInput = "5 1 9 5\n" +
  "7 5 3\n" +
  "2 4 6 8";

// should output 9
const testInput2 = "5 9 2 8\n" +
  "9 4 7 3\n" +
  "3 8 6 5";

checksum = (table, method = "sub") => {
  const rows = table.split('\n').map(row => row.split(' '));
  if (method === "chkint") {
    return wholeNumbers(rows);
  }
  else {
    return subtraction(rows);
  }
};

subtraction = (rows, store = 0) => {
  rows.map(row => store += Math.max.apply(null, row) - Math.min.apply(null, row));
  return store;
};

wholeNumbers = (rows, store = 0) => {
  rows.map(row => store += checkInteger(row));
  return store;
};

checkInteger = (row) => {
  let res = 0;
  row.map((val, i) => {
    [...row.slice(0, i), ...row.slice(i + 1)].map(
      div => Number.isInteger(div / val) ? res = (div / val) : null
    );
  });
  return res;
};

console.log(checksum(testInput));
console.log(checksum(input));

console.log(checksum(testInput2, "chkint"));
console.log(checksum(input, "chkint"));
