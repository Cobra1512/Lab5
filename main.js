function sum(col) {
    let sum = 0;
    for (let i = 0; i < col.length; i++){
        sum += col[i];  
    } 
return sum;  
} 
/* for loop for calculation of sum of numbers in one column */ 
col_1 = new Array()
col_2 = new Array()
col_3 = new Array()
col_4 = new Array()
var t = document.getElementById("table")
/* new array creation thru new array function */
for (let i = 0; i<30; i++){
    
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var text1 = Math.floor(Math.random()*10)+1
    var text2 = Math.floor(Math.random()*10)+1
    var set = new Set()
    /* for loop for creation of table with 30 rows */
    /* random functions to randomize the numbers of 1st and 2nd column */
    for (let j=0; j<10; j++){
        set.add(Math.floor(Math.random()*61)+40)
    }
    var text3 = Array.from(set).join(' ')
    var text4 = Math.floor(Math.random()*61)+40
    col_1.push(text1)
    col_2.push(text2)
    for(let item of set)
    {
        col_3.push(item)
    }
    col_4.push(text4)
    t.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    td1.append(text1)
    td2.append(text2)
    td3.append(text3)
    td4.append(text4)
    
    
    }
/* creating the random numbers for the column 3 and 4. pushing the values of the columns into new arrays. */

document.write("Sum of Column1  - " + sum(col_1));

document.write("; Sum of Column2  - " + sum(col_2));

document.write("; Sum of Column3  - " + sum(col_3));

document.write("; Sum of Column4  - " + sum(col_4));
/* displaying the sums of the numbers in each column */ 
var sum_1 = sum(col_1)
var sum_2 = sum(col_2)
var sum_3 = sum(col_3)
var sum_4 = sum(col_4)
sums = new Array() 
sums.push(sum_1)
sums.push(sum_2)
sums.push(sum_3)
sums.push(sum_4)
document.write("; Total score of all columns  - " + sums);
/* sums of all columns */ 
var results={
    col1: col_1,
    col2: col_2,
    col3: col_3,
    col4: col_4, 
    sum1: sum_1,
    sum2: sum_2,
    sum3: sum_3,
    sum4: sum_4,
    sums: sums,
    total_score: sum(sums)
}
console.log(results)
/* use of console.log function to display the resuls of the summation in the developers tool */ 