const If = (props) => {
    if(props.parametro){
        return props.children
    }else{
        return false
    }
}

export default If;