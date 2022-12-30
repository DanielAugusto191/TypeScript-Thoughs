function f(a) {
    console.log("Car name is " + a.model);
}
var a;
(function (a) {
    a[a["Red"] = 0] = "Red";
    a[a["Green"] = 1] = "Green";
    a[a["Blue"] = 2] = "Blue";
})(a || (a = {}));
var Term;
(function (Term) {
    Term[Term["Var"] = 0] = "Var";
    Term[Term["Abs"] = 1] = "Abs";
    Term[Term["App"] = 2] = "App";
})(Term || (Term = {}));
function reverse(s) {
    var _a;
    var n = s.length;
    for (var i = 0; i < n / 2; ++i)
        _a = [s[n - i - 1], s[i]], s[i] = _a[0], s[n - i - 1] = _a[1];
    return s;
}
var Graph = [[1, 4], [2], [4], [], []]; // [0-1, 0-4], 1-2, 2-4, 3, 4;
var vis = [0, 0, 0, 0, 0];
function dfs(k) {
    vis[k] = 1;
    var size = Graph[k].length;
    for (var i = 0; i < size; ++i) {
        if (!vis[Graph[k][i]]) {
            return dfs(Graph[k][i]);
        }
    }
    return;
}
{
    var ok = true;
    var name_1 = "OK";
    var age = 12;
    var ans = [1, 2, 3, 4];
    var arr = [1, 2];
    var tuple = ["1", 2];
    var n = vis.length;
    for (var i = 0; i < n; ++i)
        process.stdout.write("" + vis[i] + " "); // 0 0 0 0 0
    process.stdout.write("\n");
    dfs(0);
    for (var i = 0; i < n; ++i)
        process.stdout.write("" + vis[i] + " "); // 1 1 1 0 1
    process.stdout.write("\n");
    var b = reverse(ans);
    if (b == ans.reverse()) {
        console.log("The list is reversed!");
    }
    var car = { year: 12, model: "Crown Car" };
    f(car);
}
