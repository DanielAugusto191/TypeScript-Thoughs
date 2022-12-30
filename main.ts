interface Car {
    year: number,
    model: string,
}

function f(a: Car){
    console.log("Car name is " + a.model);
}

enum a{
    Red,
    Green,
    Blue,
}
enum Term{
    Var,
    Abs,
    App,
}

function reverse(s: Array<number>): Array<number>{
    let n: number = s.length;
    for(let i:number = 0;i<n/2;++i) [s[i], s[n-i-1]] = [s[n-i-1], s[i]]; 
    return s;
}
let Graph = [[1,4], [2], [4], [], []]; // [0-1, 0-4], 1-2, 2-4, 3, 4;
let vis = [0,0,0,0,0];
function dfs(k:number) {
    vis[k] = 1;
    let size: number = Graph[k].length;
    for(let i:number = 0;i<size;++i){
        if(!vis[Graph[k][i]]){
            return dfs(Graph[k][i]);
        }
    }
    return;
}

{
    let ok: boolean = true;
    let name: string = "OK";
    let age: number = 12;
    let ans: number[] = [1,2,3,4];
    let arr: Array<number> = [1,2];
    let tuple: [string, number] = ["1",2];
    
    let n: number = vis.length;
    for(let i:number = 0;i<n;++i) process.stdout.write("" + vis[i] + " ")// 0 0 0 0 0
    process.stdout.write("\n");
    dfs(0)
    for(let i:number = 0;i<n;++i) process.stdout.write("" + vis[i] + " "); // 1 1 1 0 1
    process.stdout.write("\n");
    let b = reverse(ans);
    if(b==ans.reverse()){console.log("The list is reversed!")}
    let car: Car = {year: 12, model: "?"};
    f(car);
}