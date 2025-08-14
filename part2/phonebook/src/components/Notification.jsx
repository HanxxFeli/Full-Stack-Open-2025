const Notification = ({message, type}) => {
    if (message === null) { 
        return null
    }

    const notificationType = `notification ${type === 'error' ? 'error' : 'success'}`
    return (
        <div className={`${notificationType} ${"notification"}`}>
            {message}
        </div>
    )
}

export default Notification