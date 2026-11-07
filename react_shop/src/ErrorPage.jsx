import ErrorIcon from './assets/error-icon.png'
import './styles/ErrorPage.css'

function ErrorPage(){
    return(
        <div className='error'>
            <h1>This link does not exist!</h1>
            <img src={ErrorIcon} alt="error_icon" />
            <p>Click <a href="/">here</a> to return to main page.</p>
        </div>
    )
}

export default ErrorPage;