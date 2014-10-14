var add = function(a, b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;
  var answer = frac(bunshi, bunbo);
  return answer;
};
var frac = function (bunshi, bunbo){
  var bunsu = {
    bunshi: bunshi,
    bunbo: bunbo
  };
  return bunsu;
};

a =frac(1, 3);
b =frac(4, 3);
c =add(a,b);

console.log(c)

------------

var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(b)){
    b = frac(b,1);
  }

  if(a.bunbo !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a. bunbo * b.bunbo;
  }else{
    bunshi = a.bunshi + b.bunshi
    bunbo = a.bunbo

  }

  var answer = frac(bunshi, bunbo);
  return answer;
};

a =frac(1,4);
b =frac(b,1);
c =add(a,1);
console.log(c);

------------

var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(a)){
    a = frac(a,1);
  }

  if(a.bunbo !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a. bunbo * b.bunbo;
  }else{
    bunshi = a.bunshi + b.bunshi
    bunbo = a.bunbo

  }

  var answer = frac(bunshi, bunbo);
  return answer;
};

a =frac(a,1);
b =frac(2,3);
c =add(4,b);
console.log(c);

------------
var add = function(a,b){
  var bunshi = a.bunshi + b.bunshi;
  var bunbo = a.bunbo;

  if(Number.isInteger(a)){
    a = frac(a,1);
  }
  if(Number.isInteger(b)){
    b = frac(b,1);
  }
  if(a.bunbo !== b.bunbo){
    bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
    bunbo = a. bunbo * b.bunbo;
  }else{
    bunshi = a.bunshi + b.bunshi
    bunbo = a.bunbo

  }

  var answer = frac(bunshi, bunbo);
  return answer;
};

a =frac(a,1);
b =frac(b,2);
c =add(1,2);
console.log(c);

------------
