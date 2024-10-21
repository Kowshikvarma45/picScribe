import React, { useEffect} from 'react';

export const Alert = ({alertatom,setalertatom})=>{

    useEffect(()=>{
        if(alertatom.showAlert) {
            const timer = setTimeout(()=>{
                setalertatom({
                    message:"",
                    statusCode:0,
                    showAlert:false
                })
            },4000)
            return ()=> clearTimeout(timer)
        }
    },[alertatom,setalertatom])

    if(alertatom.showAlert) {
        return (
            <div className={`fixed top-4 right-4 ${alertatom.statusCode===200?"bg-green-700":alertatom.statusCode===404?"bg-red-600":alertatom.statusCode===0?"":"bg-blue-700"} text-white font-medium text-xl px-4 py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out`}>
                {alertatom.message}
            </div>
        )
    }

}