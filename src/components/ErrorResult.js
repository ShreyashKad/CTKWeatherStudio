import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const ErrorResult = () => {
    return (
        <div className="errorBlock fadeInBottom fadeInAnimation" >
            <SentimentVeryDissatisfiedIcon fontSize="large" /> Sorry, Something went wrong
        </div>
    );
};

export default ErrorResult