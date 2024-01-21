import './Button.css'
export default function Button({ children, onClick, isActive, where }){
    return(
        <button
        // className={isActive ? 'buttonw' : 'buttonb'}
        className={where==='img' ? (isActive ? 'buttonw' : 'buttonb') : (isActive ? 'buttonp active' : 'buttonp passive') }
        onClick={onClick}>
        {children}</button>
    )
}