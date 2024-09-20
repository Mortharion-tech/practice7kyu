/* Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */

function alphabetWar(fight) {
    const letters = {a:0,b:2,c:0,d:-2,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:-4,n:0,o:0,p:3,q:-3,r:0,s:1,t:0,u:0,v:0,w:4,x:0,y:0,z:-1};
    const powResult =  fight.split('').map((val)=>letters[val]).reduce((a,b)=>a+b);
    return powResult<0 ? "Right side wins!" : powResult>0 ? "Left side wins!" : "Let's fight again!";
}