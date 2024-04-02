import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';

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
                backgroundColor: "rgba(66, 69, 72)"
            }}>
                <CardContent>
                    {title}
                    {description}
                </CardContent>
            </Card>
            <Card sx={{
                backgroundColor: "rgba(66, 69, 72)"
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