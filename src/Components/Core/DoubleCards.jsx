import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import Constants from '../../Utils/constants';

const DoubleCards = ({
    picked = [],
}) => {

    console.log("DC:", picked);

    return (
        <div
        style={{
            display: "flex",
            justifyContent: 'center',
        }}
        >
            {picked.length !== 0 && picked.map((item, index) => {
            <Card 
            sx={{
                backgroundColor: Constants.CARD_BACKGROUND_COLOR
            }} 
            key={index}
            >
                <CardContent>
                    <img src={item.image} alt="img" />
                </CardContent>
            </Card>
            })}
        </div>
    )
}

DoubleCards.propTypes = {
    picked: PropTypes.array,
}

export default DoubleCards