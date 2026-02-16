import CountUp from 'react-countup';
import './SuccessCounter.css';

const SuccessCounter = ({ end, label, suffix = '+', prefix = '' }) => {
    return (
        <div className="success-counter">
            <div className="counter-value">
                {prefix}
                <CountUp end={end} duration={2.5} separator="," />
                {suffix}
            </div>
            <div className="counter-label">{label}</div>
        </div>
    );
};

export default SuccessCounter;
