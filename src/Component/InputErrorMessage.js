

export default function InputErrorMessage({type, errorObj}){
    if(type !== errorObj.type){
        return null;
    }

    return (
        <div className="has-error">
            {errorObj.message}
        </div>
    )
}