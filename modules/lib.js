// Module export using common JS type

// exports.add=(a,b)=>{
//     return a+b;
// }

// exports.multiply=(x,y)=>{
//     return x*y;
    
// }

// Export using  ES6 module type

const diff=(a,b)=>{
    return a-b
}

const mul=(m,n)=>{
    return m*n;
}

export {diff,mul}


// Is nodejs a single Threaded? Why? / Why not?