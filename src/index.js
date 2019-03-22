// PLEASE DON'T change function name 
module.exports = function makeExchange(currency) { 
var res = {H:0, Q:0, D:0, N:0, P:0}; 
var key; 
var dol = {H:50, Q:25, D:10, N:5, P:1}; 
if ( currency <= 0 ) { 
res = {};} 
else if ( currency > 10000) 
{ 
delete res.H; 
delete res.Q; 
delete res.D; 
delete res.N; 
delete res.P; 
res.error = "You are rich, my friend! We don't have so much coins for exchange";} 
else if ( currency < 10000 && currency > 0) { 
for (var key in dol) { 
for (var key1 in res) { 
if (currency >= dol[key] && key == key1) { 
do {currency = currency - dol[key]; 
res[key1] = res[key1] + 1; 
} 
while ( currency >= dol[key]); 
} 
} 
} 
} 
for (var resul in res) { 
if (res[resul] == 0 && resul == "H") { 
delete res.H; 
} 
if(res[resul] == 0 && resul == "Q") { 
delete res.Q; 
} 
if(res[resul] == 0 && resul == "D") { 
delete res.D; 
} 
if(res[resul] == 0 && resul == "N") { 
delete res.N; 
} 
if(res[resul] == 0 && resul == "P") { 
delete res.P; 
} 
} 
return res; 
};
