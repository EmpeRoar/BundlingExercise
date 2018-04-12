# BundlingExercise <br/>
<br/>
1. npm i webpack -g <--- for global <br/>
2. npm i webpack <--- for project dir <br/>
3. create webpack.config.js <br/>
<br/><br/>
module.exports = { <br/>
    entry: "./app.js", <br/>
    output: { <br/>
        path: __dirname + "/dist", <br/>
        filename: "bundle.js" <br/>
    }   <br/>
};<br/>
<br/><br/>
4. in index.html <br/>
   <script type="text/javascript" src="dist/bundle.js" charset="utf-8"></script><br/>
   <br/><br/>
5. modules :<br/>
<br/>
employee.js <br/>
import { person } from './person' <br/>
export let employee = function(){ <br/>
    return person; <br/>
} <br/>
<br/>
app.js <br/>
import { employee } from './lib/employee'; <br/>
console.log(employee()); <br/>
