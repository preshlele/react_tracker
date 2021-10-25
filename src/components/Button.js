import propTypes from 'prop-types'


 const Button = ({color, text,onClick}) => {
    //  const onClick =() => {
    //      console.log('click')
    // }
    return (

        <button onClick={onClick} style={{backgroundColor: color}}
     className='btn' >
         {text}
         </button>
    )
}

Button.defaultProps= {
    color:'steelblue'
}
Button.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onclick:propTypes.func,
}
export default Button