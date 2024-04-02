import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import Constants from '../../Utils/constants';

const DoubleCards = ({
    title,
    description,
}) => {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: 'center'
        }}
        >
            <Card sx={{
                backgroundColor: Constants.CARD_BACKGROUND_COLOR
            }}>
                <CardContent>
                    {title}
                    {description}
                </CardContent>
            </Card>
            <Card sx={{
                backgroundColor: Constants.CARD_BACKGROUND_COLOR
            }}>
                <CardContent>
                    {title}
                    {description}
                </CardContent>
            </Card>
        </div>
    )
}

DoubleCards.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default DoubleCards