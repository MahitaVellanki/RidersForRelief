import React from 'react'

function Button({
    paddingTB,paddingLR,marginTB,marginLR,
    isBlock,isElevated,isRounded,
    color,bgColor,
    text,fontSize,
    customClass,
    borderColor,borderWidth,
    onClick,
    icon,iconPosition
    }) {
    return (
        <button
        onClick={onClick}
        style={{
            background:bgColor,
            color:color,
            margin:`${marginTB} ${marginLR}`,
            padding:`${paddingTB} ${paddingLR}`,
            display:isBlock?'block':'inline',
            width:isBlock?'100%':'auto',
            textAlign:'center',
            outline:'none',
            fontSize:fontSize,
            boxShadow:isElevated?'0 1px 2px 0 rgba(0, 0, 0, 0.26)':'none',
            transition:'ease-in',
            borderRadius:isRounded?'4px':'0px',
            border:`${borderWidth?borderWidth:'none'} solid ${borderColor}`

        }}
        className={customClass}
        >
        {
            iconPosition=="left"?<i className={icon} style={{marginRight:'5px'}}></i>:null
        }
        { text}
        {
            iconPosition=="right"?<i className={icon} style={{marginLeft:'5px'}}></i>:null
        }
        </button>
    )
}

export default Button
