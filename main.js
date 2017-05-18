var table = (function () {
    var seqs = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];
    var newelem, newelem2;
    for (var i = 0; i < 11; i++) {
	newelem = seqs[seqs.length - 1].slice(0);
	newelem.push(newelem.shift());
	seqs.push(newelem);
    };
    seqs.push([0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    for (var i = 0; i < 12; i++) {
	newelem2 = seqs[seqs.length - 1].slice(0);
	newelem2.push(newelem2.shift());
	seqs.push(newelem2);
    };
    return seqs;
})();

var names_to_chars = {
    "Epsilon": "Ε",
    "alpha": "α",
    "beta": "β",
    "gamma": "γ",
    "delta": "δ",
    "epsilon": "ε",
    "zeta": "ζ",
    "eta": "η",
    "theta": "θ",
    "iota": "ι",
    "kappa": "κ",
    "lambda": "λ",
    "mu": "μ",
    "nu": "ν",
    "xi": "ξ",
    "omicron": "ο",
    "pi": "π",
    "rho": "ρ",
    "sigma": "σ",
    "tau": "τ",
    "upsilon": "υ",
    "phi": "φ",
    "chi": "χ",
    "psi": "ψ"
};

var transform = function (intext, func_num) {
    var inarray = JSON.parse(intext.trim());
    var outarray = [];
    inarray.forEach(function lookup(curr_val, index, array) {
	array[index] = table[func_num][curr_val];
    });
    return inarray;
};

var update_output = function (func_num) {
    var inputbox = document.getElementById("input");
    var outputbox = document.getElementById("output");
    outputbox.value = "[" + transform(inputbox.value, func_num).toString() + "]";
};

var curr_func = 0;
var btns = document.getElementById("btn-list");
for (let i = 0; i < btns.children.length; i++) {
    btn = btns.children[i];
    btn.textContent = names_to_chars[btn.name];
    var onclickfunc = function () {update_output(i);};
    btn.addEventListener("click", onclickfunc, false);
};
