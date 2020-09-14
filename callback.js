function callback(name, model, task){
    console.log('this is', name);
    console.log('model', model);
    task()
}

function washHands(){
    console.log('wash hands with soap');
}

function takeShower(){
    console.log('take shower');
}

callback('audi',2019, washHands);
callback('mercedes',2018, takeShower);