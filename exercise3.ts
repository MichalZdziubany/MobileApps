function countLetters(str: string, choice?: boolean): number{
    if(choice)
        return str.length;
    else
        return str.trim().length;
}


console.log("With spaces included " + countLetters(" Test 1 ", true));
console.log("Without spaces included " + countLetters("  Test 1 ", false));