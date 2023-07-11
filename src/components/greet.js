import React from "react";

function Greet(){
    return <h1>Good Morning!!!</h1>
}

function Intro(){
    return( 
    <div>
        <h5>cmp 2</h5>
        <p>What a weather!, A nice weather with a cup of hot coffee and your little buddy must be awesome.<br></br>
    Talking about buddy,i have a cat whom I call Mueza.Such a cute name right?I know it is.</p></div>
    )
}
function Cat()
{
    return (
        <div>
            <h5>cmp 3</h5>
    <p>Cats have a unique ability to make themselves comfortable in the most unexpected places. Whether it's curling up in a tiny box, squeezing themselves into a cozy spot, or perching on a high shelf, their ability to find the perfect nook is absolutely adorable. It's always heartwarming and amusing to see a cat contorting its body to fit into the tiniest of spaces, showcasing their natural sense of curiosity and playfulness. Their knack for finding comfort in unconventional places never fails to bring a smile to our faces!</p>
  </div>
    )
}

function Task()
{
    return(
    <div>
    <Greet/>
    <Intro/>
    <Cat/>
    </div>);
}
export default Task;