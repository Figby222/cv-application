function Dialog({
    className,
    open,
    children

}) {
    return (
        <>
        <dialog
            className={className}
            open={open}>
                {children}
        </dialog>
        </>
    )
}

Dialog.defaultProps = {
    className: "",
    open: false
}

export default Dialog;