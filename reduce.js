const users= [{firstName:"shiva", lastName:"reddy", age:26},
    {firstName:"shivashnkar", lastName:"reddy", age:66},
    { firstName:"ssr", lastName:"reddy1", age:46},
    { firstName:"shankar", lastName:"reddy2", age:27}];
    
    //filtter with map

    const output = users.filter((x)=>x.age<30).map((x)=>x.firstName);

    console.log(output);
    //now with reduce

    const output1 = users.reduce((acc ,curr)=>{
        if(curr.age <30){
            acc.push(curr.firstName);
        }
        return acc;
    },[]);

    console.log(output1);